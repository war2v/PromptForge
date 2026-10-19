/**
 * Aggregate Bun platform services layer.
 *
 * This module defines the `BunServices` union and a single `layer` that
 * provides Bun-backed child process spawning, crypto, filesystem, path, stdio,
 * and terminal services. Use the layer when a Bun program wants the standard
 * platform services from one place.
 *
 * @since 4.0.0
 */
import type { Crypto } from "effect/Crypto";
import type { FileSystem } from "effect/FileSystem";
import * as Layer from "effect/Layer";
import type { Path } from "effect/Path";
import type { Stdio } from "effect/Stdio";
import type { Terminal } from "effect/Terminal";
import type { ChildProcessSpawner } from "effect/unstable/process/ChildProcessSpawner";
/**
 * The union of core services provided by the Bun platform layer, including child
 * process spawning, filesystem, path, stdio, and terminal services.
 *
 * @category models
 * @since 4.0.0
 */
export type BunServices = ChildProcessSpawner | Crypto | FileSystem | Path | Terminal | Stdio;
/**
 * Provides the default Bun implementations for child process spawning,
 * filesystem, path, stdio, and terminal services.
 *
 * @category layers
 * @since 4.0.0
 */
export declare const layer: Layer.Layer<BunServices>;
//# sourceMappingURL=BunServices.d.ts.map