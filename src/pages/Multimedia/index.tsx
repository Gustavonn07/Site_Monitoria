import React from "react";
import { InfoCard } from "../../components";
import { pagesLayoutContext } from "../../layout";
import { useOutletContext } from "react-router-dom";

export const Multimedia = () => {
  const { setHead } = useOutletContext<pagesLayoutContext>();

  React.useEffect(() => {
    setHead({ title: "Autoração Multimídia 02" });
  }, []);

  return (
    <section className="w-full">
      <InfoCard
        title="Learn JavaScript"
        description={
          <p>
            JavaScript is the world's most popular programming language. <br />
            JavaScript is the programming language of the Web. <br />
            JavaScript is easy to learn. <br />
            This tutorial will teach you JavaScript from basic to advanced.
          </p>
        }
        className=""
      />
    </section>
  );
};
