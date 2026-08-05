import { Outlet } from "react-router-dom";
import { Footer } from "../components";

export const MainLayout = () => {
  return (
    <main>
      <Outlet />
      <Footer />
    </main>
  );
};
