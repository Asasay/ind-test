import logo from "@/app/icon.svg";
import Image from "next/image";
import Link from "next/link";

const HeaderLogo = () => {
  return (
    <Link href="/" className="flex items-center gap-4 lg:basis-1/3  2xl:basis-1/4 ">
      <Image src={logo} alt="logo" />
      <p className="hidden md:block text-base/6 tracking-[0.02em]">STEMPS</p>
    </Link>
  );
};
export default HeaderLogo;
