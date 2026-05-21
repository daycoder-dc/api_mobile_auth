import { drizzle } from "drizzle-orm/node-postgres";

export const DRIZZLE_CONFIG = "DRIZZLE_CONFIG";

export interface IDrizzleConfig {
  params: Parameters<typeof drizzle>["1"],
}
