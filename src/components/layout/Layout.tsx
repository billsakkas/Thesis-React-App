import React from "react";
import Head from "../primitive/Head";

type TLayout = {
  Head?: JSX.Element;
  Header?: JSX.Element;
  Footer?: JSX.Element;
  children?: React.ReactNode;
};

const DefaultHead = () => (
  <Head
    title="Thesis app"
    description="My thesis full stack app using T3 stack"
  />
);

const Layout = ({ Head, Header, Footer, children }: TLayout) => {
  return (
    <>
      {Head ? Head : <DefaultHead />}
      <main className="flex min-h-screen flex-col bg-slate-200">
        {Header}
        <div className="relative h-0 grow">{children}</div>
        {Footer}
      </main>
    </>
  );
};

export default Layout;
