import React, { ReactNode } from "react";
import Header from "./Header";
import { ViewTransition } from "@/libs/helpers";

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <Header />
      <ViewTransition>{children}</ViewTransition>

      {/* {children} */}
    </>
  );
};

export default Layout;
