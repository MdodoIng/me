"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Breadcrumbs from "./Breadcrumbs";

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <>
      <nav className={`wrapper pb-10 flex justify-end`}>
        <Link href={isHome ? "/more" : "/"} prefetch={false}>
          {isHome ? "More" : "Less"}
        </Link>
      </nav>
      {!isHome && <Breadcrumbs />}
    </>
  );
};

export default Header;
