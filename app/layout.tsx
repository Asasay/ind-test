import type { Metadata } from "next";
import localFont from "next/font/local";
import HeaderLogo from "./components/headerLogo";
import LoginButton from "./components/loginButton";
import NavMenu from "./components/navMenu";
import "./globals.css";

const PPNeueMontreal = localFont({
  src: "./fonts/PPNeueMontreal.ttf",
  display: "swap",
  variable: "--font-neue-montreal",
});

export const metadata: Metadata = {
  title: "IND",
  description: "Test task for IND",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${PPNeueMontreal.variable}`}>
        <header className="p-4 border-b border-b-[#E1E1E1]">
          <div className="flex justify-between gap-4 lg:justify-start">
            <HeaderLogo className="lg:basis-1/3  2xl:basis-1/4" />
            <NavMenu className="lg:basis-1/3  2xl:basis-1/2" />
            <LoginButton className="lg:basis-1/3 2xl:basis-1/4" />
          </div>
        </header>
        <main className="px-4 py-2">{children}</main>
      </body>
    </html>
  );
}
