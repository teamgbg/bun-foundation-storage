/**
 * @system storage
 * @status handwritten
 * @edit edit directly
 *
 * Bootloader entry point for the storage primitive. Called by the
 * configurable_primitive boot chain with per-namespace overrides from
 * the config/storage-registry row.
 */

import type { StorageOverride } from "./types.ts";

let _overrides: Record<string, StorageOverride> = {};

export function configure(opts: {
	namespaces?: Record<string, StorageOverride> | null;
}): void {
	_overrides = opts.namespaces ?? {};
}

export function getConfiguredOverrides(
	namespace: string,
): StorageOverride | undefined {
	return _overrides[namespace];
}
