/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { RawSourceMap } from 'source-map';
import type { Config, TransformTypes } from '@jest/types';
export declare type ShouldInstrumentOptions = Pick<Config.GlobalConfig, 'collectCoverage' | 'collectCoverageFrom' | 'collectCoverageOnlyFrom' | 'coverageProvider'> & {
    changedFiles?: Set<Config.Path>;
    sourcesRelatedToTestsInChangedFiles?: Set<Config.Path>;
};
export declare type Options = ShouldInstrumentOptions & Partial<{
    isCoreModule: boolean;
    isInternalModule: boolean;
}> & CallerTransformOptions;
interface FixedRawSourceMap extends Omit<RawSourceMap, 'version'> {
    version: number;
}
export declare type TransformedSource = {
    code: string;
    map?: FixedRawSourceMap | string | null;
} | string;
export declare type TransformResult = TransformTypes.TransformResult;
export interface CallerTransformOptions {
    supportsDynamicImport: boolean;
    supportsExportNamespaceFrom: boolean;
    supportsStaticESM: boolean;
    supportsTopLevelAwait: boolean;
}
export interface ReducedTransformOptions extends CallerTransformOptions {
    instrument: boolean;
}
export declare type StringMap = Map<string, string>;
export interface TransformOptions<OptionType = unknown> extends ReducedTransformOptions {
    /** a cached file system which is used in jest-runtime - useful to improve performance */
    cacheFS: StringMap;
    config: Config.ProjectConfig;
    /** A stringified version of the configuration - useful in cache busting */
    configString: string;
    /** the options passed through Jest's config by the user */
    transformerConfig: OptionType;
}
export interface Transformer<OptionType = unknown> {
    canInstrument?: boolean;
    createTransformer?: (options?: OptionType) => Transformer;
    getCacheKey?: (sourceText: string, sourcePath: Config.Path, options: TransformOptions<OptionType>) => string;
    process: (sourceText: string, sourcePath: Config.Path, options: TransformOptions<OptionType>) => TransformedSource;
}
export {};
