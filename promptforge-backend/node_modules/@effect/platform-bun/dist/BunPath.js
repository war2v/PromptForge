/**
 * Bun-backed layers for Effect's {@link Path} service.
 *
 * This module provides the `Path` service for Bun programs by reusing the
 * shared Node-compatible path implementation. Provide one of these layers when
 * Bun code should receive path operations from the Effect environment instead
 * of importing runtime path helpers directly.
 *
 * @since 4.0.0
 */
import * as NodePath from "@effect/platform-node-shared/NodePath";
/**
 * Layer that provides the default `Path` service for Bun using the shared Node path implementation.
 *
 * @category layers
 * @since 4.0.0
 */
export const layer = NodePath.layer;
/**
 * Layer that provides the POSIX `Path` service for Bun using the shared Node path implementation.
 *
 * @category layers
 * @since 4.0.0
 */
export const layerPosix = NodePath.layerPosix;
/**
 * Layer that provides the Win32 `Path` service for Bun using the shared Node path implementation.
 *
 * @category layers
 * @since 4.0.0
 */
export const layerWin32 = NodePath.layerWin32;
//# sourceMappingURL=BunPath.js.map