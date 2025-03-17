"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();

  const data = [
    {
      title: "projects",
      link: "/more",
    },
  ];

  const isActive = (link: string) => pathname === link;

  return (
    <menu className="flex gap-10 wrapper pb-4">
      {data.map((item, idx) => (
        <Link
          key={idx}
          href={item.link}
          className={`capitalize ${isActive(item.link) ? "underline" : ""}`}
        >
          {item.title}
        </Link>
      ))}
    </menu>
  );
};

export default Breadcrumbs;
