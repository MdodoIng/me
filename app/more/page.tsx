import Link from "next/link";
import { Fragment } from "react";

const More = () => {
  const data = [
    {
      title: "easydine",
      link: "easydine.net",
      year: "2024",
      subtitle: "Seamless Multiplayer for unity",
      workType: "w/ The Collected Works",
    },
    {
      title: "easydine",
      link: "easydine.net",
      year: "2024",
      subtitle: "Seamless Multiplayer for unity",
      workType: "w/ The Collected Works",
    },
  ];
  return (
    <menu className="wrapper grid gap-2">
      {data.map((item, idx) => (
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
          {idx !== data.length - 1 && <hr className="opacity-20" />}
        </Fragment>
      ))}
    </menu>
  );
};

export default More;
