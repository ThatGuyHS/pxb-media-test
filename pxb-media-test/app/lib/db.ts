// Serverless-compatible storage for processed entries
// Uses in-memory Map but can be extended to use Vercel KV, Redis, etc.

// In-memory store for development and testing
// This will reset on server restart, but works in all environments
const processedEntries = new Map<string, {
  ssn: string;
  processed_at: string;
  payload: string;
}>();

// Equipment interface
export interface Equipment {
  id: string;
  name: string;
  category: string;
  description: string;
  dailyRate: number;
  weeklyRate: number;
  availability: boolean;
  imageUrl?: string;
  specifications: {
    [key: string]: string;
  };
  addedAt: string;
  updatedAt: string;
}

// In-memory store for equipment
const equipmentStore = new Map<string, Equipment>();

// Initialize with some sample equipment data
function initializeEquipment() {
  if (equipmentStore.size === 0) {
    const sampleEquipment: Equipment[] = [
      {
        id: "camera-sony-fx6",
        name: "Sony FX6 Professional Camera",
        category: "Cameras",
        description: "Full-frame professional cinema camera with 4K recording capabilities. Perfect for broadcast and cinematic productions.",
        dailyRate: 450,
        weeklyRate: 2500,
        availability: true,
        imageUrl: "/equipment/sony-fx6.jpg",
        specifications: {
          "Sensor": "Full-Frame Exmor R CMOS",
          "Recording": "4K UHD up to 120p",
          "Mount": "Sony E-mount",
          "Weight": "890g (body only)"
        },
        addedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: "mixer-yamaha-ql5",
        name: "Yamaha QL5 Digital Mixing Console",
        category: "Audio",
        description: "32-channel digital mixing console with premium sound quality and comprehensive I/O capabilities.",
        dailyRate: 350,
        weeklyRate: 2000,
        availability: true,
        imageUrl: "/equipment/yamaha-ql5.jpg",
        specifications: {
          "Channels": "32 mono + 8 stereo",
          "Faders": "32 motorized 100mm",
          "Processing": "96kHz/32bit",
          "I/O": "64x64 Digital I/O"
        },
        addedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: "lights-aputure-300d",
        name: "Aputure 300D Mark II LED Light Kit",
        category: "Lighting",
        description: "Professional COB LED light with high output and color accuracy. Includes light, modifier, and stands.",
        dailyRate: 120,
        weeklyRate: 650,
        availability: true,
        imageUrl: "/equipment/aputure-300d.jpg",
        specifications: {
          "Output": "300W COB LED",
          "CRI": "96+",
          "Color Temperature": "5500K ± 200K",
          "Wireless Control": "2.4G wireless remote"
        },
        addedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: "switcher-blackmagic-atem",
        name: "Blackmagic ATEM Television Studio Pro 4K",
        category: "Video Production",
        description: "Professional live production switcher with 8 SDI inputs, multiview, and streaming capabilities.",
        dailyRate: 180,
        weeklyRate: 950,
        availability: false,
        imageUrl: "/equipment/blackmagic-atem.jpg",
        specifications: {
          "Inputs": "8x 12G-SDI",
          "Outputs": "5x 12G-SDI",
          "Standards": "Ultra HD 4K up to 60p",
          "Streaming": "Built-in H.264 encoder"
        },
        addedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ];

    sampleEquipment.forEach(equipment => {
      equipmentStore.set(equipment.id, equipment);
    });
  }
}

// Initialize equipment on module load
initializeEquipment();

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

// Equipment CRUD operations

/**
 * Get all equipment
 */
export function getAllEquipment(): Equipment[] {
  initializeEquipment();
  return Array.from(equipmentStore.values())
    .sort((a, b) => new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime());
}

/**
 * Get equipment by ID
 */
export function getEquipmentById(id: string): Equipment | null {
  initializeEquipment();
  return equipmentStore.get(id) || null;
}

/**
 * Get equipment by category
 */
export function getEquipmentByCategory(category: string): Equipment[] {
  initializeEquipment();
  return Array.from(equipmentStore.values())
    .filter(equipment => equipment.category.toLowerCase() === category.toLowerCase())
    .sort((a, b) => new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime());
}

/**
 * Get available equipment only
 */
export function getAvailableEquipment(): Equipment[] {
  initializeEquipment();
  return Array.from(equipmentStore.values())
    .filter(equipment => equipment.availability)
    .sort((a, b) => new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime());
}

/**
 * Add new equipment
 */
export function addEquipment(equipment: Omit<Equipment, 'id' | 'addedAt' | 'updatedAt'>): Equipment {
  const id = generateEquipmentId(equipment.name);
  const newEquipment: Equipment = {
    ...equipment,
    id,
    addedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  equipmentStore.set(id, newEquipment);
  return newEquipment;
}

/**
 * Update existing equipment
 */
export function updateEquipment(id: string, updates: Partial<Omit<Equipment, 'id' | 'addedAt'>>): Equipment | null {
  const existing = equipmentStore.get(id);
  if (!existing) {
    return null;
  }
  
  const updated: Equipment = {
    ...existing,
    ...updates,
    id: existing.id, // Ensure ID cannot be changed
    addedAt: existing.addedAt, // Preserve original creation date
    updatedAt: new Date().toISOString()
  };
  
  equipmentStore.set(id, updated);
  return updated;
}

/**
 * Delete equipment
 */
export function deleteEquipment(id: string): boolean {
  return equipmentStore.delete(id);
}

/**
 * Generate equipment ID from name
 */
function generateEquipmentId(name: string): string {
  const baseId = name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  
  let id = baseId;
  let counter = 1;
  
  while (equipmentStore.has(id)) {
    id = `${baseId}-${counter}`;
    counter++;
  }
  
  return id;
}

/**
 * Get equipment categories
 */
export function getEquipmentCategories(): string[] {
  initializeEquipment();
  const categories = new Set<string>();
  equipmentStore.forEach(equipment => {
    categories.add(equipment.category);
  });
  return Array.from(categories).sort();
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