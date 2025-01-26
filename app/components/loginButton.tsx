import Image from "next/image";
import Link from "next/link";

const LoginButton = () => {
  return (
    <Link href="/login" className="hidden justify-items-end lg:block lg:basis-1/3 2xl:basis-1/4">
      <button className="flex items-center gap-4 text-base/6">
        <p>Вход</p>
        <Image src="/login.svg" width={30} height={28} alt="login button icon" />
      </button>
    </Link>
  );
};
export default LoginButton;
