"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Breadcrumbs from "./Breadcrumbs";
import mCImg from "@/assets/images/layout/menu close.webp";
import mOImg from "@/assets/images/layout/menu open.webp";
import Image from "next/image";
import { Suspense } from "react";

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <>
      <nav className={`wrapper pb-10 flex justify-end`}>
        <Link href={isHome ? "/more" : "/"} prefetch={false}>
          <Suspense fallback={<>{isHome ? "More" : "Less"}</>}>
            <Image
              src={isHome ? mOImg : mCImg}
              alt={isHome ? "More" : "Less"}
              className="size-14"
              quality={0.3}
              width={56}
              height={56}
              onLoad={}
              unoptimized={false}
              placeholder="empty"
              loading="eager"
            />
          </Suspense>
        </Link>
      </nav>
      {!isHome && <Breadcrumbs />}
    </>
  );
};

export default Header;
