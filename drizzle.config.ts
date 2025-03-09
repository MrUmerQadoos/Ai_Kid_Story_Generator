import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: "./config/schema.ts",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://neondb_owner:btnwkC3K6TJd@ep-red-smoke-a5q12tm6.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
  verbose: true,
  strict: true,
})