package com.scandit.datacapture.reactnative.barcode

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.scandit.datacapture.frameworks.barcode.generator.BarcodeGeneratorModule
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult

class ScanditDataCaptureBarcodeGeneratorModule(
    reactContext: ReactApplicationContext,
    private val barcodeGenerator: BarcodeGeneratorModule
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
    fun disposeGenerator(generatorId: String, promise: Promise) {
        barcodeGenerator.disposeGenerator(generatorId, ReactNativeResult(promise))
    }

    override fun invalidate() {
        super.invalidate()
        barcodeGenerator.onDestroy()
    }
}
