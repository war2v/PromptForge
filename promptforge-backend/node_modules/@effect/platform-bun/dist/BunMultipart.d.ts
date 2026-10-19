/**
 * Bun-specific helpers for parsing HTTP `multipart/form-data` request bodies.
 *
 * This module adapts a Bun `Request` body and headers into the shared
 * `Multipart` model. `stream` returns multipart parts as a `Stream`, while
 * `persisted` collects the form and writes file parts to scoped temporary files
 * through the current `FileSystem`, `Path`, and `Scope` services.
 *
 * @since 4.0.0
 */
import type * as Effect from "effect/Effect";
import type { FileSystem } from "effect/FileSystem";
import type { Path } from "effect/Path";
import type * as Scope from "effect/Scope";
import * as Stream from "effect/Stream";
import * as Multipart from "effect/unstable/http/Multipart";
/**
 * Parses a Bun `Request` body as multipart data and returns a stream of multipart parts.
 *
 * @category constructors
 * @since 4.0.0
 */
export declare const stream: (source: Request) => Stream.Stream<Multipart.Part, Multipart.MultipartError>;
/**
 * Parses and persists multipart data from a Bun `Request`, requiring file-system, path, and scope services.
 *
 * @category constructors
 * @since 4.0.0
 */
export declare const persisted: (source: Request) => Effect.Effect<Multipart.Persisted, Multipart.MultipartError, FileSystem | Path | Scope.Scope>;
//# sourceMappingURL=BunMultipart.d.ts.map