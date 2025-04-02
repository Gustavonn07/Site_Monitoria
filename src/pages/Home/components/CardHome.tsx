import { cn } from "../../../utils";
import { useNavigate } from "react-router-dom";

interface PropsCardHome {
  title: string;
  img: string;
  link: string;
}

export const CardHome = ({ title, link, img }: PropsCardHome) => {
  const navigate = useNavigate();
  const backgroundStyle = { backgroundImage: `url("${img}")` };

  return (
    <li
      className="w-full max-w-xs bg-primary-600 pb-6 overflow-hidden flex flex-col gap-6 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-150"
      onClick={() => navigate(link)}
    >
      <div
        style={backgroundStyle}
        className={cn("block w-full h-64 bg-cover bg-center")}
      />
      <h2 className="text-white text-lg font-semibold text-center">{title}</h2>
    </li>
  );
};
