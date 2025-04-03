import React from "react";
import { Outlet } from "react-router-dom";
import { Heading, HeadingProps, Sidebar } from "../components";

export type pagesLayoutContext = {
  setHead: React.Dispatch<React.SetStateAction<HeadingProps>>;
};

export const PagesLayout = () => {
  const [head, setHead] = React.useState<HeadingProps>({ title: undefined })
  return (
    <main className="flex">
      <Sidebar />
      <section className="bg-primary-100/80 w-full min-h-screen px-5 py-4">
        {head && <Heading title={head?.title} />}
        <Outlet context={{ setHead }}/>
      </section>
    </main>
  );
};
