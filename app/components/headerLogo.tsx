"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "../lib/utils";
import dynamic from "next/dynamic";

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false,
});

const HeaderLogo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("flex items-center gap-4", className)}>
      <MediaQuery maxWidth={1023}>
        <Image src={"/logo.svg"} width={28} height={28} alt="logo" />
      </MediaQuery>
      <MediaQuery minWidth={1024}>
        <Image src={"/logo-big.svg"} width={28} height={28} alt="logo" />
        <p className="text-base/6 tracking-[0.02em]">STEMPS</p>
      </MediaQuery>
    </Link>
  );
};
export default HeaderLogo;
