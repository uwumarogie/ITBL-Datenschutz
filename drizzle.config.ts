import { defineConfig } from "drizzle-kit";

if (process.env.DATABASE_URL === undefined) {
  throw new Error("DATABASE_URL is required");
}
export default defineConfig({
  schema: "./src/server/database/schema.ts",
  dialect: "postgresql",
  out: "./src/server/database/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
