/**
 * Bun-backed implementation of Effect's `Terminal` service.
 *
 * This module reuses the shared Node terminal implementation for Bun. `make`
 * creates a scoped process-backed `Terminal` service, and `layer` provides the
 * default terminal service with the standard quit behavior for key input.
 *
 * @since 4.0.0
 */
import * as NodeTerminal from "@effect/platform-node-shared/NodeTerminal";
/**
 * Creates a scoped `Terminal` service backed by process stdin/stdout, using the
 * optional predicate to decide when key input should end the input stream.
 *
 * @category constructors
 * @since 4.0.0
 */
export const make = NodeTerminal.make;
/**
 * Provides the default process-backed `Terminal` service, ending key input on
 * the default quit keys.
 *
 * @category layers
 * @since 4.0.0
 */
export const layer = NodeTerminal.layer;
//# sourceMappingURL=BunTerminal.js.map