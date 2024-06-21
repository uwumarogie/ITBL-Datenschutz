import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";
import { AchievementId } from "@/util/achievement-data";

const achievementArray = Object.values(AchievementId) as AchievementId[];

const achievementEnum:
  | readonly [string, ...string[]]
  | [string, ...string[]]
  | undefined =
  achievementArray.length > 0
    ? [achievementArray[0], ...achievementArray.slice(1)]
    : undefined;

const highScoreArray = ["PASSWORD_STRENGTH"] as const;
export enum HighScoreEnum {
  PASSWORD_STRENGTH = "PASSWORD_STRENGTH",
}
export type HighScoreType = keyof typeof HighScoreEnum;

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  userName: text("user_name").notNull(),
  gameCode: text("gameCode"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const achievements = pgTable("achievements", {
  id: serial("id").primaryKey().notNull(),
  userId: integer("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  achievementEnum: varchar("achievement_enum", {
    enum: achievementEnum,
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
  highScoreEnum: varchar("highscore_enum", {
    enum: highScoreArray,
  }).notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const userSchema = createSelectSchema(users);
