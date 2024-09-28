import type { Metadata } from "next";
import { inter } from "@/utils/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "GraphQL Weather Client",
  description: "Frontend implementation of the API",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
