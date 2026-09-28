/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2026- Scandit AG. All rights reserved.
 */

import type { HostComponent, ViewProps } from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';

/**
 * Native props for the SparkScanView component.
 *
 * Note: SparkScanView is a container view that hosts the native SparkScan scanning UI.
 * Most configuration is done through the TurboModule methods rather than props.
 */
export interface NativeProps extends ViewProps {}

export default codegenNativeComponent<NativeProps>(
  'RNTSparkScanView',
) as HostComponent<NativeProps>;
