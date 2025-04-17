import { createBrowserRouter, RouteObject } from "react-router-dom";
import { MainLayout, PagesLayout } from "./layout";
import {
  Home,
  IntroductionHTML5,
  ProgrammingStructure,
  ProgrammingInteractive,
  ProgrammingStyles,
  IntroductionP5js,
  ProgrammingSound,
  ProgrammingFunctions,
  ChallengesP5,
  HTMLTagsPage,
  HTMLStructurePage,
  HTMLLinksPage,
  MultimediaImages,
  MultimediaTables,
  MultimediaForms,
  SemanticTags,
  MultimediaChallengesHtml,
  ProgrammingFundamentals
} from "./pages";


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
        path: "programming/organization_and_functions",
        element: <ProgrammingFunctions />,
      },
      {
        path: "programming/sound_and_images",
        element: <ProgrammingSound />,
      },
      {
        path: "programming/challenges",
        element: <ChallengesP5 />,
      },
      {
        path: "programming/js_fundamentals",
        element: <ProgrammingFundamentals />,
      },
      {
        path: "/multimedia/introduction_html",
        element: <IntroductionHTML5 />,
      },
      {
        path: "/multimedia/formatting_tags",
        element: <HTMLTagsPage />,
      },
      {
        path: "/multimedia/structures_base",
        element: <HTMLStructurePage />,
      },
      {
        path: "/multimedia/navigation",
        element: <HTMLLinksPage />,
      },
      {
        path: "/multimedia/images",
        element: <MultimediaImages />,
      },
      {
        path: "/multimedia/tables",
        element: <MultimediaTables />,
      },
      {
        path: "/multimedia/forms",
        element: <MultimediaForms />,
      },
      {
        path: "/multimedia/semantic_tags",
        element: <SemanticTags />,
      },
      {
        path: "/multimedia/challenges_html",
        element: <MultimediaChallengesHtml />,
      },
    ],
  },
  {
    path: "*",
    element: <main>NOT_FOUND</main>,
  },
];

const routesList: RouteObject[] = [
  ...publicRoutes,
];

export const routes = createBrowserRouter(routesList);
