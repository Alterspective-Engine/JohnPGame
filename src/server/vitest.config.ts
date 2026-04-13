import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    // Test files live in the repo root tests/ directory, not under src/server/
    include: ['../../tests/api/**/*.{test,spec}.{ts,mts}'],
    env: {
      DATABASE_PATH: ':memory:',
      AZURE_TENANT_ID: 'test-tenant',
      AZURE_CLIENT_ID: 'test-client',
      CORS_ORIGIN: 'http://localhost:3000',
      VITEST: 'true',
    },
    // Each test file runs in its own worker thread for module isolation
    pool: 'threads',
  },
  resolve: {
    alias: {
      // Ensure relative imports in test files resolve from the repo root
      '@': path.resolve(__dirname, '../../'),
    },
  },
});
