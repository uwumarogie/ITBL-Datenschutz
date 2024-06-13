export const baseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.PRODUCTION_URL
    : process.env.NEXT_PUBLIC_API_BASE_URL;
