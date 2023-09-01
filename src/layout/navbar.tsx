"use client";
import { NAV_LINKS } from "@/const";
import Link from "next/link";
import React, { ReactElement } from "react";
import { usePathname } from "next/navigation";

type INavLink = {
  name: string;
  path: string;
};

const Navbar = (): ReactElement => {
  const pathname = usePathname();
  return (
    <header className="w-full sticky top-0 border-b z-10 bg-white h-14 flex items-center md:px-20 px-4 shadow-sm">
      <nav className="w-full ">
        <ul className="flex items-center justify-end w-full">
          {NAV_LINKS.map((link: INavLink, index: number) => {
            return (
              <li key={index}>
                <Link
                  className={`ml-4 cursor-pointer px-4 py-2 rounded-lg hover:bg-slate-100 transition ${
                    pathname === link.path && "bg-slate-100"
                  }`}
                  href={link.path}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
