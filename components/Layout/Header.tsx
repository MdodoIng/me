"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Breadcrumbs from "./Breadcrumbs";
import mCImg from "@/assets/images/layout/menu close.webp";
import mOImg from "@/assets/images/layout/menu open.webp";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <>
      <nav className={`wrapper pb-10 flex justify-end`}>
        <Link href={isHome ? "/more" : "/"} prefetch={false}>
          <Image
            src={isHome ? mOImg : mCImg}
            alt={isHome ? "open" : "close"}
            className="size-14"
            quality={0.3}
            width={56}
            height={56}
            unoptimized={false}
            placeholder="empty"
            loading="eager"
          />
        </Link>
      </nav>
      {!isHome && <Breadcrumbs />}
    </>
  );
};

export default Header;
