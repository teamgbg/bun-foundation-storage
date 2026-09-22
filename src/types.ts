/**
 * @system storage
 * @status handwritten
 * @edit edit directly
 *
 * Type definitions for @teamscala/storage — unified browser localStorage
 * primitive with SSR-safe guards, key namespacing, and optional TTL.
 */

export interface StorageOptions {
	namespace: string;
	ttlMs?: number;
}

export interface StorageOverride {
	enabled?: boolean;
	ttlMs?: number;
}

export interface StorageEntry {
	namespace: string;
	enabled: boolean;
	ttlMs?: number;
	size: number;
}
