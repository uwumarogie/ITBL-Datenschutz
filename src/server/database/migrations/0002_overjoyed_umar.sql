CREATE TABLE IF NOT EXISTS "highscores" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"highScore" integer NOT NULL,
	"highscore_enum" varchar NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "achievements" DROP CONSTRAINT "achievements_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "achievements" ALTER COLUMN "user_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "achievements" ADD COLUMN "achievement_enum" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "achievements" ADD COLUMN "is_achieved" boolean NOT NULL;--> statement-breakpoint
ALTER TABLE "achievements" ADD COLUMN "createdAt" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "achievements" ADD COLUMN "updatedAt" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "user_name" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "updatedAt" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "highscores" ADD CONSTRAINT "highscores_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "achievements" ADD CONSTRAINT "achievements_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "achievements" DROP COLUMN IF EXISTS "intro_score";--> statement-breakpoint
ALTER TABLE "achievements" DROP COLUMN IF EXISTS "password_score";--> statement-breakpoint
ALTER TABLE "achievements" DROP COLUMN IF EXISTS "privacy_score";--> statement-breakpoint
ALTER TABLE "achievements" DROP COLUMN IF EXISTS "processing_score";--> statement-breakpoint
ALTER TABLE "achievements" DROP COLUMN IF EXISTS "phishing_score";--> statement-breakpoint
ALTER TABLE "achievements" DROP COLUMN IF EXISTS "rights_score";--> statement-breakpoint
ALTER TABLE "achievements" DROP COLUMN IF EXISTS "master_score";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "name";