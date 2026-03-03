package com.scandit.datacapture.reactnative.barcode

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.scandit.datacapture.frameworks.barcode.generator.BarcodeGeneratorModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.errors.ModuleNotStartedError
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult

class ScanditDataCaptureBarcodeGeneratorModule(
    reactContext: ReactApplicationContext,
    private val serviceLocator: ServiceLocator<FrameworkModule>,
) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "ScanditDataCaptureBarcodeGenerator"

    @ReactMethod
    fun create(barcodeGeneratorJson: String, promise: Promise) {
        barcodeGenerator.createGenerator(barcodeGeneratorJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun generateFromBase64EncodedData(
        generatorId: String,
        data: String,
        imageWidth: Int,
        promise: Promise
    ) {
        barcodeGenerator.generateFromBase64EncodedData(
            generatorId,
            data,
            imageWidth,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun generate(
        generatorId: String,
        text: String,
        imageWidth: Int,
        promise: Promise
    ) {
        barcodeGenerator.generate(
            generatorId,
            text,
            imageWidth,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun disposeGenerator(generatorId: String, text: String, imageWidth: Int, promise: Promise) {
        barcodeGenerator.generate(generatorId, text, imageWidth, ReactNativeResult(promise))
    }

    override fun invalidate() {
        super.invalidate()
        barcodeGenerator.onDestroy()
    }

    private val barcodeGenerator: BarcodeGeneratorModule
        get() {
            return serviceLocator.resolve(
                BarcodeGeneratorModule::class.java.name
            ) as? BarcodeGeneratorModule? ?: throw ModuleNotStartedError(name)
        }
}
