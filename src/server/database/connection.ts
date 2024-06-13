import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const globalQueryClient = global as unknown as {
  queryClient?: postgres.Sql;
};

const queryClient =
  globalQueryClient.queryClient ??
  postgres(process.env.DATABASE_URL!, { max: 12 });

if (process.env.nodeEnv === "development")
  globalQueryClient.queryClient = queryClient;

export const db = drizzle(queryClient);
