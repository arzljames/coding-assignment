"use client";
import { NAV_LINKS } from "@/constant";
import Link from "next/link";
import React, { ReactElement } from "react";
import { usePathname } from "next/navigation";

interface INavLink {
  key: string;
  name: string;
  href: string;
}

const Navbar = (): ReactElement => {
  const pathname = usePathname();
  return (
    <header className="w-full sticky top-0 border-b z-10 bg-white h-14 flex items-center md:px-20 px-4">
      <nav className="w-full ">
        <ul className="flex items-center justify-end w-full">
          {NAV_LINKS.map((link: INavLink) => {
            return (
              <li key={link.key}>
                <Link
                  className={`ml-2 cursor-pointer px-4 text-sm   py-2 rounded-lg hover:bg-slate-100 transition ${
                    pathname === link.href
                      ? "bg-slate-100 text-black font-semibold"
                      : "text-gray-500 font-normal"
                  }`}
                  href={link.href}
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
