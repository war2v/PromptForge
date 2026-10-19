import * as Layer from "effect/Layer";
import * as WorkerRunner from "effect/unstable/workers/WorkerRunner";
/**
 * Provides the `WorkerRunnerPlatform` for code running inside a Bun worker,
 * routing parent messages to the registered handler and sending responses back
 * through the worker port.
 *
 * @category layers
 * @since 4.0.0
 */
export declare const layer: Layer.Layer<WorkerRunner.WorkerRunnerPlatform>;
//# sourceMappingURL=BunWorkerRunner.d.ts.map