import db from '../../database';
import { Item } from '../../types';

export function getItemsByUser(userOid: string): Item[] {
  return db
    .prepare<[string], Item>('SELECT * FROM items WHERE user_oid = ? ORDER BY created_at ASC')
    .all(userOid);
}

export function createItem(userOid: string, text: string): Item {
  const result = db
    .prepare('INSERT INTO items (user_oid, text) VALUES (?, ?)')
    .run(userOid, text);
  return db
    .prepare<[number | bigint], Item>('SELECT * FROM items WHERE id = ?')
    .get(result.lastInsertRowid) as Item;
}
