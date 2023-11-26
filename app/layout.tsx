import "@/app/globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { Providers } from "@/app/providers";

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fullstack Blog",
  description: "Fullstack Blog with Next.js 13, Prisma, and Posgresql",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rubik.className} text-foreground bg-background`}>
        <Providers>
          <main className="max-h-screen">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
