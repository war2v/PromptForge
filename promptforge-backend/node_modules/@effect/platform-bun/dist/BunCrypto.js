/**
 * The `BunCrypto` module provides Bun's `Crypto` service layer for Effect
 * programs. Provide {@link layer} at the edge of a Bun app, CLI, script, or
 * test to satisfy `effect/Crypto` with cryptographically secure random bytes,
 * UUID generation, random values, and SHA digest operations.
 *
 * This adapter reuses the shared Node-compatible implementation, so randomness
 * and digest behavior follow Bun's `node:crypto` compatibility layer. SHA-1 is
 * present for interoperability with existing protocols, not for new
 * security-sensitive designs.
 *
 * @since 1.0.0
 */
import * as NodeCrypto from "@effect/platform-node-shared/NodeCrypto";
/**
 * Layer that provides the Bun Crypto service implementation.
 *
 * @category layers
 * @since 1.0.0
 */
export const layer = NodeCrypto.layer;
//# sourceMappingURL=BunCrypto.js.map