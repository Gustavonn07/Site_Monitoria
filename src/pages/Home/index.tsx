import "./animation.css";
import { useNavigate } from "react-router-dom";
import { useViewport } from "../../hooks";
import { CardHome } from "./components/CardHome";

export const Home = () => {
  const navigate = useNavigate();
  const viewport = useViewport();

  return (
    <div className="w-full flex md:flex-row flex-col relative overflow-hidden bg-primary-800">
      <h1 className="absolute top-0 translate-y-1/2 left-1/2 -translate-1/2 z-50 text-sm sm:text-base font-medium text-gray-300 bg-primary-600 shadow-lg px-4 py-2 md:hidden rounded-sm">
        Selecione sua turma
      </h1>

      {!viewport.isMobile ? (
        <>
          <div
            className="w-1/2 cursor-pointer hover:scale-105 duration-150 h-screen bg-cover bg-center flex justify-center items-center relative group text-primary-200 hover:text-white"
            style={{
              backgroundImage: "url('images/home_code.jpg')",
              clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)",
            }}
            onClick={() => navigate("/programming/introduction_p5")}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/40 to-black/40 transition-opacity duration-300 group-hover:opacity-40" />
            <h2 className="text-current text-2xl lg:text-4xl font-bold z-20 mb-10">
              Programação 02
            </h2>
            <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-black/60 to-transparent pointer-events-none group-hover:animate-clip" />
          </div>

          <div
            className="w-1/2 cursor-pointer hover:scale-105 duration-150 h-screen bg-cover bg-center flex justify-center items-center relative group text-primary-200 hover:text-white"
            style={{
              backgroundImage: "url('images/home_computer.jpg')",
              clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%)",
            }}
            onClick={() => navigate("/multimedia/introduction_html")}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/40 to-black/40 transition-opacity duration-300 group-hover:opacity-0" />
            <h2 className="text-current text-2xl lg:text-4xl font-bold z-20 mb-10">
              Autoração Multimídia 02
            </h2>
            <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-black/60 to-transparent pointer-events-none group-hover:animate-clip-reverse" />
          </div>
        </>
      ) : (
        <ul className="w-full h-full min-h-screen flex flex-col items-center gap-4 mt-24 px-6 py-6">
          <CardHome
            img="images/home_code.jpg"
            link="/programming/introduction_p5"
            title="Programação 02"
          />
          <CardHome
            img="images/home_computer.jpg"
            link="/multimedia/introduction_html"
            title="Autoração Multimídia 02"
          />
        </ul>
      )}
    </div>
  );
};
