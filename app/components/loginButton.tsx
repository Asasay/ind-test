import Image from "next/image";
import Link from "next/link";
import { cn } from "../lib/utils";

const LoginButton = ({ className }: { className?: string }) => {
  return (
    <div className={cn("hidden justify-end lg:flex", className)}>
      <Link href="/login">
        <button className="flex items-center gap-4 text-base/6">
          <p>Вход</p>
          <Image src="/login.svg" width={30} height={28} alt="login button icon" />
        </button>
      </Link>
    </div>
  );
};
export default LoginButton;
