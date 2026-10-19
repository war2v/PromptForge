import * as Layer from "effect/Layer";
import * as Worker from "effect/unstable/workers/Worker";
/**
 * Provides the Bun `WorkerPlatform` together with a `Worker.Spawner` created
 * from the supplied worker spawning function.
 *
 * @category layers
 * @since 4.0.0
 */
export declare const layer: (spawn: (id: number) => globalThis.Worker) => Layer.Layer<Worker.WorkerPlatform | Worker.Spawner>;
/**
 * Provides the Bun `WorkerPlatform`, wiring worker messages and errors into
 * Effect workers and requesting graceful worker shutdown during scope
 * finalization before terminating on timeout.
 *
 * @category layers
 * @since 4.0.0
 */
export declare const layerPlatform: Layer.Layer<Worker.WorkerPlatform, never, never>;
//# sourceMappingURL=BunWorker.d.ts.map