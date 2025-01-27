import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdownMenu";
import { LogIn } from "lucide-react";
import { cn } from "../lib/utils";

const NavMenu = ({ className }: { className?: string }) => {
  return (
    <>
      <ul className={cn("hidden lg:flex gap-6", className)}>
        <li>
          <Link href="/about">О школе</Link>
        </li>
        <li>
          <Link href="/courses">Курсы</Link>
        </li>
        <li>
          <Link href="/library">Библиотека</Link>
        </li>
      </ul>
      <div className="lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-[#121212] text-[#F3F3F3] text-base/5 tracking-[0.02em] py-1 px-2 rounded">
            Меню
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href="/about">О школе</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/courses">Курсы</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/library">Библиотека</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-300" />
            </DropdownMenuGroup>
            <DropdownMenuItem>
              <LogIn />
              <Link href="/library">Вход</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default NavMenu;
