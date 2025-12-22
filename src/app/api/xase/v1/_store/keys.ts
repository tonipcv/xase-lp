export type ApiKeyItem = {
  id: string;
  apiKey: string;
  tenant: string;
  project: string | null;
  environment: string | null;
  scopes: string[];
  ttl: string | number | null;
  createdAt: string;
};

const keys: ApiKeyItem[] = [];

export function listKeys(): ApiKeyItem[] {
  return keys.slice();
}

export function addKey(item: ApiKeyItem): void {
  keys.push(item);
}

export function removeKey(id: string): boolean {
  const idx = keys.findIndex((k) => k.id === id);
  if (idx >= 0) {
    keys.splice(idx, 1);
    return true;
  }
  return false;
}
