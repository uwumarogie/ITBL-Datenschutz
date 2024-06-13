const productionUrl = "https://itbl-datenschutz.vercel.app/";

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? productionUrl
    : process.env.NEXT_PUBLIC_API_BASE_URL;
