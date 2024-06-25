import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
export const databaseUrl = drizzle(
  postgres(process.env.DATABASE_URL!, { ssl: "require", max: 20 }),
);
const main = async () => {
  try {
    await migrate(databaseUrl, {
      migrationsFolder: "src/server/database/migrations",
    });
    console.log("Migration complete");
  } catch (error) {
    console.error(error);
  }
  process.exit(0);
};

main()
  .then(() => {})
  .catch(() => {});
