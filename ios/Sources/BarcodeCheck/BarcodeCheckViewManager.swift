import React
import ScanditBarcodeCapture
import ScanditDataCaptureCore
import ScanditFrameworksCore

class BarcodeCheckViewWrapperView: UIView {
    weak var viewManager: BarcodeCheckViewManager?

    var barcodeCheckView: BarcodeCheckView? {
        dispatchMainSync {
            subviews.first { $0 is BarcodeCheckView } as? BarcodeCheckView
        }
    }

    override func addSubview(_ view: UIView) {
        super.addSubview(view)
        if view is BarcodeCheckView {
            view.translatesAutoresizingMaskIntoConstraints = false
            addConstraints([
                view.leadingAnchor.constraint(equalTo: leadingAnchor),
                view.trailingAnchor.constraint(equalTo: trailingAnchor),
                view.topAnchor.constraint(equalTo: topAnchor),
                view.bottomAnchor.constraint(equalTo: bottomAnchor)
            ])
        }
    }

    override func removeFromSuperview() {
        super.removeFromSuperview()
        guard let index = BarcodeCheckViewManager.containers.firstIndex(of: self) else {
            return
        }

        BarcodeCheckViewManager.containers.remove(at: index)

        if let view = barcodeCheckView,
           let _ = viewManager {
            if view.superview != nil {
                view.removeFromSuperview()
            }
        }
    }
}

@objc(RNTSDCBarcodeCheckViewManager)
class BarcodeCheckViewManager: RCTViewManager {
    static var containers: [BarcodeCheckViewWrapperView] = []

    override class func requiresMainQueueSetup() -> Bool {
        true
    }

    override func view() -> UIView! {
        let container = BarcodeCheckViewWrapperView()
        container.viewManager = self

        BarcodeCheckViewManager.containers.append(container)

        return container
    }
}
