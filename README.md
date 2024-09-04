This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Make sure you have the following required software installed:
- Node v20+ installed on your system. Make sure `npm` is available on your system.
We recommend to use a version manager like [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm).
- PostgresDB
- A project on [supabase](https://supabase.com/) to use for SafeSpace

> [!NOTE]
> The app should be usable without supabase, but it has not been properly tested.

First, set up your .env (or .env.local) file with the following variables:
```dotenv
DATABASE_URL=postgresql://<user>:<password>@<host>:<password>/<databasename>
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
PRODUCTION_URL=<your-production-url>
NEXT_PUBLIC_SUPABASE_URL=<supabase-url>
NEXT_PUBLIC_SUPABASE_KEY=<supabase-public-key>
```

Then, install the dependencies and run the development server:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
# or
pnpm install
pnpm dev
# or
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

