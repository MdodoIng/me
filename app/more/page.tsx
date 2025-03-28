import projects from "@/libs/content/projects";
import Link from "next/link";
import { Fragment, Suspense } from "react";

const More = () => {
  return (
    <menu className="wrapper grid gap-2">
      <Suspense fallback={<div>Loading...</div>}>
        {projects.map((item, idx) => (
          <Fragment key={idx}>
            <Link
              target="_blank"
              href={item.link}
              className="flex items-center justify-between"
            >
              <div className="grid ">
                <h2 className="text-base">{item.title}</h2>
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
      </Suspense>
    </menu>
  );
};

export default More;
