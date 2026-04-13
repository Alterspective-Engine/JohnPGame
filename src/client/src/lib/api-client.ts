const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

async function request<T>(
  path: string,
  options: RequestInit,
  getToken: () => Promise<string>
): Promise<T> {
  const token = await getToken();
  const response = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });
  if (!response.ok) {
    const body = await response.json().catch(() => ({})) as { error?: string };
    throw new Error(body.error ?? `Request failed: ${response.status}`);
  }
  return response.json() as Promise<T>;
}

export interface Item {
  id: number;
  user_oid: string;
  text: string;
  created_at: string;
}

export function fetchItems(getToken: () => Promise<string>): Promise<Item[]> {
  return request<Item[]>('/api/items', { method: 'GET' }, getToken);
}

export function createItem(text: string, getToken: () => Promise<string>): Promise<Item> {
  return request<Item>('/api/items', {
    method: 'POST',
    body: JSON.stringify({ text }),
  }, getToken);
}
