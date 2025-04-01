import React from "react";
import { Outlet } from "react-router-dom";
import { Heading, HeadingProps } from "../components";

export type pagesLayoutContext = {
  setHead: React.Dispatch<React.SetStateAction<HeadingProps>>;
};

export const PagesLayout = () => {
  const [head, setHead] = React.useState<HeadingProps>({ title: undefined })
  // Adicionar sidebar de forma que mude de acordo com a url
  return (
    <main>
      <Heading title={head?.title} />
      <Outlet context={{ setHead }}/>
    </main>
  );
};
