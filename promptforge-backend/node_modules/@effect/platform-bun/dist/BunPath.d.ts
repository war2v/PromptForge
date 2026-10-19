import type * as Layer from "effect/Layer";
import type { Path } from "effect/Path";
/**
 * Layer that provides the default `Path` service for Bun using the shared Node path implementation.
 *
 * @category layers
 * @since 4.0.0
 */
export declare const layer: Layer.Layer<Path>;
/**
 * Layer that provides the POSIX `Path` service for Bun using the shared Node path implementation.
 *
 * @category layers
 * @since 4.0.0
 */
export declare const layerPosix: Layer.Layer<Path>;
/**
 * Layer that provides the Win32 `Path` service for Bun using the shared Node path implementation.
 *
 * @category layers
 * @since 4.0.0
 */
export declare const layerWin32: Layer.Layer<Path>;
//# sourceMappingURL=BunPath.d.ts.map