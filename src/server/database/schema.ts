import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createSelectSchema } from "drizzle-zod";

const achievementArray = [
  "DATENSCHUTZ_HELD",
  "WERBE_GURU",
  "PHISHING_FAENGER",
  "NULL",
] as const;

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  userName: text("user_name").notNull(),
  gameCode: text("gameCode"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const userRelations = relations(users, ({ one }) => ({
  achievement: one(achievements),
}));

export const achievements = pgTable("achievements", {
  id: serial("id").primaryKey().notNull(),
  userId: integer("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  achievementEnum: varchar("achievement_enum", {
    enum: achievementArray,
  }).notNull(),
  isAchieved: boolean("is_achieved").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const highScores = pgTable("highscores", {
  id: serial("id").primaryKey().notNull(),
  userId: integer("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  highScore: integer("highScore").notNull(),
  gameId: integer("game_id").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const userSchema = createSelectSchema(users);
