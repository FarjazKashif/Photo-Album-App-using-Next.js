import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Button } from "../../components/ui/button";
import Header from "../Component/Header/page";
const inter = Inter({ subsets: ["latin"] });
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import SideMenu from "../Component/sideMenu/page";

export const metadata: Metadata = {
  title: "Photo Album - Farjaz Kashif",
  description: "This is the best Photo Albumm app in the World.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Header />
        <div className="flex gap-0">
          <SideMenu />
          {children}
        </div>
      </body>
    </html>
  );
}
