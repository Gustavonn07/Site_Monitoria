import { createBrowserRouter, RouteObject } from "react-router-dom";
import { MainLayout } from "./layout";
import { Home, Multimedia, ProgrammingStructure, ProgrammingInteractive, ProgrammingStyles, IntroductionP5js } from "./pages";
import { PrivateRoutes } from "./components";
import { PagesLayout } from "./layout/PagesLayout";

const privateRoutes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/private",
        element: <div>ROTA_PRIVADA</div>,
      },
    ],
  },
];

const publicRoutes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    element: <PagesLayout />,
    children: [
      {
        path: "/programming/introduction_p5",
        element: <IntroductionP5js />,
      },
      {
        path: "/programming/structure_p5",
        element: <ProgrammingStructure />,
      },
      {
        path: "programming/styles",
        element: <ProgrammingStyles />,
      },
      {
        path: "programming/interactive",
        element: <ProgrammingInteractive />,
      },
      {
        path: "/multimedia_authoring_2",
        element: <Multimedia />,
      },
    ],
  },
  {
    path: "*",
    element: <main>NOT_FOUND</main>,
  },
];

const routesList: RouteObject[] = [
  {
    element: <PrivateRoutes />,
    children: privateRoutes,
  },
  ...publicRoutes,
];

export const routes = createBrowserRouter(routesList);
