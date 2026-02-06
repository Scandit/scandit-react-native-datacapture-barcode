import React
import ScanditBarcodeCapture
import ScanditDataCaptureCore
import ScanditFrameworksCore

class BarcodeArViewWrapperView: UIView {
    weak var viewManager: BarcodeArViewManager?

    var barcodeArView: BarcodeArView? {
        dispatchMainSync {
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
                view.bottomAnchor.constraint(equalTo: bottomAnchor)
            ])
        }
    }

    override func removeFromSuperview() {
        super.removeFromSuperview()
        guard let index = BarcodeArViewManager.containers.firstIndex(of: self) else {
            return
        }

        BarcodeArViewManager.containers.remove(at: index)

        if let view = barcodeArView,
           let _ = viewManager {
            if view.superview != nil {
                view.removeFromSuperview()
            }
        }
    }
}

@objc(RNTSDCBarcodeArViewManager)
class BarcodeArViewManager: RCTViewManager {
    static var containers: [BarcodeArViewWrapperView] = []

    override class func requiresMainQueueSetup() -> Bool {
        true
    }

    override func view() -> UIView! {
        let container = BarcodeArViewWrapperView()
        container.viewManager = self

        BarcodeArViewManager.containers.append(container)

        return container
    }
}
