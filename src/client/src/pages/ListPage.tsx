import { useState, useEffect, FormEvent } from 'react';
import type { CSSProperties } from 'react';
import { useAuth } from '../context/AuthContext';
import { fetchItems, createItem, Item } from '../lib/api-client';

export function ListPage() {
  const { user, logout, getAccessToken } = useAuth();
  const [items, setItems] = useState<Item[]>([]);
  const [inputText, setInputText] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchItems(getAccessToken)
      .then(setItems)
      .catch((err: unknown) => setError(err instanceof Error ? err.message : 'Failed to load'))
      .finally(() => setLoading(false));
  }, [getAccessToken]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!inputText.trim()) return;
    setSubmitting(true);
    setError(null);
    try {
      const item = await createItem(inputText.trim(), getAccessToken);
      setItems((prev) => [...prev, item]);
      setInputText('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add item');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <span style={styles.greeting}>Hello, {user?.name ?? user?.username}</span>
        <button style={styles.logoutBtn} onClick={logout}>Sign out</button>
      </header>
      <main style={styles.main}>
        <h2 style={styles.heading}>My List</h2>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            style={styles.input}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Add a new item..."
            maxLength={500}
            disabled={submitting}
          />
          <button style={styles.addBtn} type="submit" disabled={submitting || !inputText.trim()}>
            {submitting ? 'Adding…' : 'Add'}
          </button>
        </form>
        {loading ? (
          <p style={styles.empty}>Loading…</p>
        ) : items.length === 0 ? (
          <p style={styles.empty}>No items yet. Add your first one above.</p>
        ) : (
          <ul style={styles.list}>
            {items.map((item) => (
              <li key={item.id} style={styles.listItem}>
                {item.text}
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

const styles = {
  page: { minHeight: '100vh', background: '#f5f5f5' } as CSSProperties,
  header: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '16px 24px', background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
  } as CSSProperties,
  greeting: { fontWeight: 600, color: '#1a1a1a' } as CSSProperties,
  logoutBtn: {
    background: 'transparent', border: '1px solid #ccc', borderRadius: '6px',
    padding: '6px 16px', cursor: 'pointer', fontSize: '14px',
  } as CSSProperties,
  main: { maxWidth: '600px', margin: '40px auto', padding: '0 16px' } as CSSProperties,
  heading: { fontSize: '22px', fontWeight: 700, marginBottom: '20px' } as CSSProperties,
  error: { color: '#c00', marginBottom: '16px', fontSize: '14px' } as CSSProperties,
  form: { display: 'flex', gap: '8px', marginBottom: '24px' } as CSSProperties,
  input: {
    flex: 1, padding: '10px 14px', border: '1px solid #ccc', borderRadius: '6px',
    fontSize: '15px', outline: 'none',
  } as CSSProperties,
  addBtn: {
    padding: '10px 20px', background: '#0078d4', color: '#fff', border: 'none',
    borderRadius: '6px', fontSize: '15px', fontWeight: 600, cursor: 'pointer',
  } as CSSProperties,
  list: { listStyle: 'none' } as CSSProperties,
  listItem: {
    background: '#fff', borderRadius: '8px', padding: '14px 16px',
    marginBottom: '8px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', fontSize: '15px',
  } as CSSProperties,
  empty: { color: '#777', fontSize: '15px' } as CSSProperties,
};
