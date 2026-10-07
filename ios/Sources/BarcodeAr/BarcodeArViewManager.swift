import React
import ScanditBarcodeCapture
import ScanditDataCaptureCore
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
