import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  gameCode: text("gameCode"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
});

export const achievements = pgTable("achievements", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  introScore: integer("intro_score"),
  passwordScore: integer("password_score"),
  privacyScore: integer("privacy_score"),
  processingScore: integer("processing_score"),
  phishingScore: integer("phishing_score"),
  rightsScore: integer("rights_score"),
  masterScore: integer("master_score"),
});

export const userRelations = relations(users, ({ one }) => ({
  achievement: one(achievements),
}));
