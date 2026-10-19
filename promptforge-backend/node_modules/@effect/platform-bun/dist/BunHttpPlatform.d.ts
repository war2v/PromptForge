import * as Layer from "effect/Layer";
import * as Platform from "effect/unstable/http/HttpPlatform";
/**
 * Layer that provides the Bun `HttpPlatform`, including file responses backed by `Bun.file`.
 *
 * @category layers
 * @since 4.0.0
 */
export declare const layer: Layer.Layer<Platform.HttpPlatform, never, never>;
//# sourceMappingURL=BunHttpPlatform.d.ts.map