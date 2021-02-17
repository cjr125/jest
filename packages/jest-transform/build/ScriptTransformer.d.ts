/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Config } from '@jest/types';
import type { Options, ReducedTransformOptions, StringMap, TransformResult } from './types';
export default class ScriptTransformer {
    private readonly _cache;
    private readonly _cacheFS;
    private readonly _config;
    private readonly _transformCache;
    private readonly _transformConfigCache;
    constructor(config: Config.ProjectConfig, cacheFS?: StringMap);
    private _getCacheKey;
    private _getFileCachePath;
    private _getTransformPath;
    private _getTransformer;
    private _instrumentFile;
    preloadTransformer(filepath: Config.Path): void;
    transformSource(filepath: Config.Path, content: string, options: ReducedTransformOptions): TransformResult;
    private _transformAndBuildScript;
    transform(filename: Config.Path, options: Options, fileSource?: string): TransformResult;
    transformJson(filename: Config.Path, options: Options, fileSource: string): string;
    requireAndTranspileModule<ModuleType = unknown>(moduleName: string, callback?: (module: ModuleType) => void, transformOptions?: ReducedTransformOptions): ModuleType;
    requireAndTranspileModule<ModuleType = unknown>(moduleName: string, callback?: (module: ModuleType) => Promise<void>, transformOptions?: ReducedTransformOptions): Promise<ModuleType>;
    shouldTransform(filename: Config.Path): boolean;
}
export declare function createTranspilingRequire(config: Config.ProjectConfig): <TModuleType = unknown>(resolverPath: string, applyInteropRequireDefault?: boolean) => TModuleType;
