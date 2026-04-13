import { Item } from '../../types';
import { getItemsByUser, createItem } from './item-repository';

export function listItemsForUser(userOid: string): Item[] {
  return getItemsByUser(userOid);
}

export function addItemForUser(userOid: string, text: string): Item {
  const trimmed = text.trim();
  if (trimmed.length === 0) throw new Error('Item text cannot be empty');
  if (trimmed.length > 500) throw new Error('Item text exceeds maximum length of 500 characters');
  return createItem(userOid, trimmed);
}
