import { Database } from 'better-sqlite3';
import fs from 'fs';
import path from 'path';

// Create the data directory if it doesn't exist
const DATA_DIR = path.join(process.cwd(), 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const DB_PATH = path.join(DATA_DIR, 'webhook-entries.db');

// Initialize the database with better-sqlite3
let db: Database;

// This function ensures we have a database connection and the necessary tables
export function getDB(): Database {
  if (!db) {
    // Import dynamically to avoid issues with server-side rendering
    const BetterSQLite3 = require('better-sqlite3');
    db = new BetterSQLite3(DB_PATH);
    
    // Enable foreign keys
    db.pragma('journal_mode = WAL');
    
    // Create the processed_entries table if it doesn't exist
    db.exec(`
      CREATE TABLE IF NOT EXISTS processed_entries (
        ssn TEXT PRIMARY KEY,
        processed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        payload TEXT
      )
    `);
  }
  
  return db;
}

// Check if an entry with the given SSN has been processed before
export function hasProcessedEntry(ssn: string): boolean {
  const db = getDB();
  const stmt = db.prepare('SELECT 1 FROM processed_entries WHERE ssn = ?');
  const result = stmt.get(ssn);
  return !!result;
}

// Add a new processed entry to the database
export function addProcessedEntry(ssn: string, payload: any): void {
  const db = getDB();
  const stmt = db.prepare('INSERT OR REPLACE INTO processed_entries (ssn, payload) VALUES (?, ?)');
  stmt.run(ssn, JSON.stringify(payload));
}

// Get all processed entries
export function getAllProcessedEntries(): any[] {
  const db = getDB();
  const stmt = db.prepare('SELECT * FROM processed_entries ORDER BY processed_at DESC');
  return stmt.all();
}

// Close the database connection when the server is shutting down
export function closeDB(): void {
  if (db) {
    db.close();
  }
} 