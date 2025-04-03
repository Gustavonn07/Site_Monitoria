import React from "react";
import { pagesLayoutContext } from "../../layout";
import { useOutletContext } from "react-router-dom";

export const Multimedia = () => {
  const { setHead } = useOutletContext<pagesLayoutContext>();

  React.useEffect(() => {
    setHead({ title: "Autoração Multimídia 02" });
  }, []);

  return (
    <>
    
    </>
  );
};
