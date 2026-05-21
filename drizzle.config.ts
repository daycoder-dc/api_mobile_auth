import { defineConfig } from "drizzle-kit";
import "dotenv/config";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/schemas/index.ts",
  out: "./drizzle",
  dbCredentials: {
    host: process.env.DATABASE_HOST ?? "localhost",
    port: Number(process.env.DATABASE_PORT ?? 5432),
    user: process.env.DATABASE_USER ?? "postgres",
    password: process.env.DATABASE_PASS ?? "postgres",
    database: process.env.DATABASE_NAME ?? "postgres",
  },
});
