import * as Layer from "effect/Layer";
import * as BunChildProcessSpawner from "./BunChildProcessSpawner.js";
import * as BunCrypto from "./BunCrypto.js";
import * as BunFileSystem from "./BunFileSystem.js";
import * as BunPath from "./BunPath.js";
import * as BunStdio from "./BunStdio.js";
import * as BunTerminal from "./BunTerminal.js";
/**
 * Provides the default Bun implementations for child process spawning,
 * filesystem, path, stdio, and terminal services.
 *
 * @category layers
 * @since 4.0.0
 */
export const layer = /*#__PURE__*/BunChildProcessSpawner.layer.pipe(/*#__PURE__*/Layer.provideMerge(/*#__PURE__*/Layer.mergeAll(BunFileSystem.layer, BunCrypto.layer, BunPath.layer, BunStdio.layer, BunTerminal.layer)));
//# sourceMappingURL=BunServices.js.map