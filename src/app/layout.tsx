import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DesktopNav } from "@/components/NavBar/DesktopNavigation/DesktopNav";
import { MobileNav } from "@/components/NavBar/MobileNavigation/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SafeSpace",
  description: "Sicher unterwegs in sozialen Medien",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-blue-background h-screen bg-fixed">
          <div className="flex justify-center  h-reduced-safari sm:h-full px-3 pt-1 sm:py-11 sm:pr-8 sm:pl-0 flex-col sm:flex-row">
            <div className="hidden sm:block">
              <DesktopNav />
            </div>

            <div className="sm:hidden">
              <MobileNav />
            </div>

            <div className="flex flex-row justify-center grow min-w-[220px] overflow-hidden">
              <div className="bg-white rounded-3xl py-6 w-full">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
