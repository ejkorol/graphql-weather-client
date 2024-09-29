import type { Metadata } from "next";
import { inter } from "@/utils/fonts";
import "./globals.css";
import { Providers } from "./providers/Provider";
import { ThemeSwitcher, Footer } from "@/components/ui";

export const metadata: Metadata = {
  title: "GraphQL Weather Client",
  description: "Frontend implementation of the API",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <main>
          <Providers>
            <ThemeSwitcher />
            {children}
            <Footer />
          </Providers>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
