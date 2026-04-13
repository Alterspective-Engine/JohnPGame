import db from '../../database';
import { User } from '../../types';

export function findUser(oid: string): User | undefined {
  return db.prepare<[string], User>(
    'SELECT * FROM users WHERE entra_oid = ?'
  ).get(oid);
}

// Auto-provision user on first login; update email/display_name on subsequent logins
export function upsertUser(oid: string, email: string, displayName: string): User {
  db.prepare(`
    INSERT INTO users (entra_oid, email, display_name)
    VALUES (?, ?, ?)
    ON CONFLICT(entra_oid) DO UPDATE SET
      email        = excluded.email,
      display_name = excluded.display_name
  `).run(oid, email, displayName);

  const user = findUser(oid);
  if (!user) throw new Error('Failed to provision user after upsert');
  return user;
}
