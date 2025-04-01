import { useNavigate } from "react-router-dom";
import "./animation.css";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex relative overflow-hidden bg-primary-800">
      <h1 className="absolute top-16 left-1/2 -translate-1/2 z-50 text-base font-medium text-gray-300 bg-primary-600 shadow-lg px-4 py-2 rounded-sm">
        Selecione sua turma
      </h1>

      <div
        className="w-1/2 cursor-pointer hover:scale-105 duration-150 h-screen bg-cover bg-center flex justify-center items-center relative group"
        style={{
          backgroundImage: "url('images/home_code.jpg')",
          clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)",
        }}
        onClick={() => navigate("/programming_2")}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/60 to-black/60 transition-opacity duration-300 group-hover:opacity-40" />
        <h2 className="text-white text-4xl font-bold z-20 mb-10">
          Programação 02
        </h2>
        <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-black/60 to-transparent pointer-events-none group-hover:animate-clip" />
      </div>

      <div
        className="w-1/2 cursor-pointer hover:scale-105 duration-150 h-screen bg-cover bg-center flex justify-center items-center relative group"
        style={{
          backgroundImage: "url('images/home_computer.jpg')",
          clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%)",
        }}
        onClick={() => navigate('/multimedia_authoring_2')}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/40 to-black/40 transition-opacity duration-300 group-hover:opacity-0" />
        <h2 className="text-white text-4xl font-bold z-20 mb-10">
          Autoração Multimídia 02
        </h2>
        <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-black/60 to-transparent pointer-events-none group-hover:animate-clip-reverse" />
      </div>
    </div>
  );
};
