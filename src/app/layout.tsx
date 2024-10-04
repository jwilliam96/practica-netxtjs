
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopMenu from "@/components/TopMenu";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children, auth
}: Readonly<{
  children: React.ReactNode,
  auth: React.ReactNode

}>) {
  return (
    <html lang="en" className="relative">
      <body className={inter.className}>
        <TopMenu />
        <nav>
          <Link href="/login">Iniciar session</Link>
        </nav>
        <div>{auth}</div>
        <div>{children}</div>
      </body>
    </html>
  );
}
