import {TurboModule, TurboModuleRegistry} from 'react-native';
import type {EventEmitter} from 'react-native/Libraries/Types/CodegenTypes';

/**
 * Unified event payload for all Scandit events.
 * Events are filtered by name on the JS side.
 */
export type ScanditEventPayload = {
  name: string;
  data: string;
  viewId?: number;
  modeId?: number;
};

export interface Spec extends TurboModule {
  // Events - unified event emitter for all Barcode events
  readonly onScanditEvent: EventEmitter<ScanditEventPayload>;

  readonly getConstants: () => {
    // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
    Defaults: Object;
  };

  // Single entry point for all Barcode operations - use Object so codegen produces NSDictionary on iOS
  // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
  executeBarcode(data: Object): Promise<void>;

  // SparkScan view methods
  // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
  createSparkScanView(data: Object): Promise<void>;

  // BarcodeCount view methods
  // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
  createBarcodeCountView(data: Object): Promise<void>;
  // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
  removeBarcodeCountView(data: Object): Promise<void>;
  // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
  setBarcodeCountViewPositionAndSize(data: Object): Promise<void>;

  // BarcodePick view methods
  // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
  createPickView(data: Object): Promise<void>;
  // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
  removePickView(data: Object): Promise<void>;
  // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
  setPickViewPositionAndSize(data: Object): Promise<void>;

  // BarcodeFind view methods
  // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
  createFindView(data: Object): Promise<void>;
  // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
  removeFindView(data: Object): Promise<void>;

  // BarcodeAr view methods
  // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
  createBarcodeArView(data: Object): Promise<void>;
  // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
  removeBarcodeArView(data: Object): Promise<void>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('ScanditDataCaptureBarcode');
