import projects from "@/libs/content/projects";
import Link from "next/link";
import { Fragment } from "react";

const More = () => {
  return (
    <menu className="wrapper grid gap-2">
      {projects.map((item, idx) => (
        <Fragment key={idx}>
          <Link
            target="_blank"
            href={item.link}
            className="flex items-center justify-between"
          >
            <div className="grid ">
              <h2 className="text-xl">{item.title}</h2>
              <span className="opacity-60">{item.subtitle}</span>
            </div>
            <div className="grid justify-items-end">
              <p>{item.year}</p>

              <span className="opacity-60">{item.workType}</span>
            </div>
          </Link>
          {idx !== projects.length - 1 && <hr className="opacity-20" />}
        </Fragment>
      ))}
    </menu>
  );
};

export default More;
