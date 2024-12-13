import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Provider } from "@/contexts/CountContext";

export const metadata: Metadata = {
  title: "Mon application",
  description: "Gestionnaire d'exercices Next.js",
};
const CaveatFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={CaveatFont.className}>
      <body>
        <div className="h-screen flex flex-col">
          <Header></Header>
          <Provider>
            <main className="flex-grow bg-gray-100 flex items-center justify-center">
              {children}
            </main>
          </Provider>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
