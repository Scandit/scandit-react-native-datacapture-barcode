import React
import ScanditBarcodeCapture
import ScanditDataCaptureCore
import ScanditFrameworksBarcode
import ScanditFrameworksCore

class BarcodeArViewWrapperView: UIView {
    weak var viewManager: BarcodeArViewManager?

    var isFrameSet = false

    var postFrameSetAction: (() -> Void)?

    var barcodeArView: BarcodeArView? {
        if Thread.isMainThread {
            return subviews.first { $0 is BarcodeArView } as? BarcodeArView
        }

        return DispatchQueue.main.sync {
            subviews.first { $0 is BarcodeArView } as? BarcodeArView
        }
    }

    override func addSubview(_ view: UIView) {
        super.addSubview(view)
        if view is BarcodeArView {
            view.translatesAutoresizingMaskIntoConstraints = false
            addConstraints([
                view.leadingAnchor.constraint(equalTo: leadingAnchor),
                view.trailingAnchor.constraint(equalTo: trailingAnchor),
                view.topAnchor.constraint(equalTo: topAnchor),
                view.bottomAnchor.constraint(equalTo: bottomAnchor),
            ])
        }
    }

    override func didMoveToSuperview() {
        // Was added to the super view, if no barcodeArView yet
        if let viewManager = viewManager {
            let postCreationAction = viewManager.getAndRemovePostContainerCreateAction(for: self.reactTag.intValue)
            postCreationAction?(self)
        }
    }

    override func removeFromSuperview() {
        super.removeFromSuperview()
        guard let index = BarcodeArViewManager.containers.firstIndex(of: self) else {
            return
        }

        BarcodeArViewManager.containers.remove(at: index)

        if let viewManager = viewManager {
            _ = viewManager.getAndRemovePostContainerCreateAction(for: self.reactTag.intValue)
        }

        if let view = barcodeArView,
            viewManager != nil
        {
            if view.superview != nil {
                view.removeFromSuperview()
            }
        }
    }

    override func layoutSubviews() {
        super.layoutSubviews()
        // This is needed only the first time to execute the action queued in the postFrameSetAction
        if !frame.equalTo(.zero) && !isFrameSet {
            isFrameSet = true
            postFrameSetAction?()
        }
    }

    // Re-assert the native AR view's started state whenever this container
    // (re-)enters a window. Native `SDCBarcodeArView.start()` can silently
    // no-op/fail while off-window (e.g. mid navigation transition) and never
    // self-recovers once re-added, so we force a re-assert here (SDC-32484).
    override func didMoveToWindow() {
        super.didMoveToWindow()
        // Drives the JS single-owner camera model (SDC-32484): attach -> the
        // hosting wrapper claims camera ownership, detach -> it releases.
        ViewWindowEventsRelay.notifyWindowChanged(viewId: reactTag.intValue, attached: window != nil)
        guard window != nil else { return }
        guard
            let module = DefaultServiceLocator.shared.resolve(
                clazzName: String(describing: BarcodeArModule.self)
            ) as? BarcodeArModule
        else {
            return
        }
        module.getView(viewId: self.reactTag.intValue)?.reassertStartedIfNeeded()
    }
}

@objc(RNTSDCBarcodeArViewManager)
class BarcodeArViewManager: RCTViewManager {
    static var containers: [BarcodeArViewWrapperView] = []

    override class func requiresMainQueueSetup() -> Bool {
        true
    }

    private var postContainerCreateActions: [Int: ((BarcodeArViewWrapperView) -> Void)] = [:]

    public func setPostContainerCreateAction(for viewId: Int, action: @escaping (BarcodeArViewWrapperView) -> Void) {
        postContainerCreateActions[viewId] = action
    }

    func getAndRemovePostContainerCreateAction(for viewId: Int) -> ((BarcodeArViewWrapperView) -> Void)? {
        let action = postContainerCreateActions[viewId]
        postContainerCreateActions.removeValue(forKey: viewId)
        return action
    }

    override func view() -> UIView! {
        let container = BarcodeArViewWrapperView()
        container.viewManager = self

        BarcodeArViewManager.containers.append(container)

        return container
    }
}

/// Fabric (New Architecture) bridge for the window re-assert: the ObjC++
/// component view (`RCTBarcodeArView.mm`) cannot reach the Swift module types
/// directly, so this @objc helper performs the module lookup and forwards to
/// `FrameworksBarcodeArView.reassertStartedIfNeeded()` (SDC-32484).
/// Fabric bridge for per-view window attach/detach events: the ObjC++
/// component wrappers cannot reach the Swift relay type directly, so this
/// @objc helper forwards to `ViewWindowEventsRelay` (SDC-32484 single-owner
/// camera model).
@objc(SDCViewWindowEventsBridge)
public class ViewWindowEventsBridge: NSObject {
    @objc public static func notifyWindowChanged(_ tag: NSInteger, attached: Bool) {
        ViewWindowEventsRelay.notifyWindowChanged(viewId: tag, attached: attached)
    }
}

@objc(SDCBarcodeArWindowReassert)
public class SDCBarcodeArWindowReassert: NSObject {
    @objc public static func onWindowAttached(_ tag: NSInteger) {
        guard
            let module = DefaultServiceLocator.shared.resolve(
                clazzName: String(describing: BarcodeArModule.self)
            ) as? BarcodeArModule
        else {
            return
        }
        module.getView(viewId: tag)?.reassertStartedIfNeeded()
    }
}
