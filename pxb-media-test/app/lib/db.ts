// Serverless-compatible storage for processed entries
// Uses in-memory Map but can be extended to use Vercel KV, Redis, etc.

// In-memory store for development and testing
// This will reset on server restart, but works in all environments
const processedEntries = new Map<string, {
  ssn: string;
  processed_at: string;
  payload: string;
}>();

/**
 * Check if an entry with the given SSN has been processed before
 */
export function hasProcessedEntry(ssn: string): boolean {
  return processedEntries.has(ssn);
}

/**
 * Add a new processed entry to the storage
 */
export function addProcessedEntry(ssn: string, payload: any): void {
  processedEntries.set(ssn, {
    ssn,
    processed_at: new Date().toISOString(),
    payload: JSON.stringify(payload)
  });
}

/**
 * Get all processed entries
 */
export function getAllProcessedEntries(): any[] {
  return Array.from(processedEntries.values())
    .sort((a, b) => new Date(b.processed_at).getTime() - new Date(a.processed_at).getTime());
}

/**
 * No-op function kept for compatibility
 */
export function closeDB(): void {
  // No-op for in-memory store
}

/**
 * Note: For a production implementation, consider:
 * 1. Vercel KV (Redis-based key-value store): https://vercel.com/docs/storage/vercel-kv
 * 2. Vercel Postgres: https://vercel.com/docs/storage/vercel-postgres
 * 3. External database service like PlanetScale, Supabase, etc.
 * 
 * Example Vercel KV implementation (uncomment and install @vercel/kv):
 * 
 * import { kv } from '@vercel/kv';
 * 
 * export async function hasProcessedEntry(ssn: string): Promise<boolean> {
 *   const entry = await kv.get(`webhook:${ssn}`);
 *   return !!entry;
 * }
 * 
 * export async function addProcessedEntry(ssn: string, payload: any): Promise<void> {
 *   await kv.set(`webhook:${ssn}`, {
 *     ssn,
 *     processed_at: new Date().toISOString(),
 *     payload: JSON.stringify(payload)
 *   });
 * }
 * 
 * export async function getAllProcessedEntries(): Promise<any[]> {
 *   // This is simplified - would need proper implementation with scan/keys
 *   // or a separate index key
 *   const keys = await kv.keys('webhook:*');
 *   const entries = await Promise.all(keys.map(key => kv.get(key)));
 *   return entries.sort((a, b) => 
 *     new Date(b.processed_at).getTime() - new Date(a.processed_at).getTime()
 *   );
 * }
 */ 