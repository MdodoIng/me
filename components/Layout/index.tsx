import React, { ReactNode } from "react";
import Header from "./Header";

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
