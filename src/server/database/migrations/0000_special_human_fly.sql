CREATE TABLE IF NOT EXISTS "achievements" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"intro_score" integer,
	"password_score" integer,
	"privacy_score" integer,
	"processing_score" integer,
	"phishing_score" integer,
	"rights_score" integer,
	"master_score" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"gameCode" text,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_gameCode_unique" UNIQUE("gameCode")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "achievements" ADD CONSTRAINT "achievements_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
