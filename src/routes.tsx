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
  ProgrammingFundamentals,
  FunctionsIntro,
  FunctionsParams
} from "./pages";
import { ScopePage } from "./pages/ProgrammingScoupe";
import { ConstructorFunctionsPage } from "./pages/ProgrammingConstructorFunctionsPage";
import { GeneratorFunctionsPage } from "./pages/ProgrammingGeneratorFunctionsPage";
import { RecursiveFunctionsPage } from "./pages/ProgrammingRecursiveFunctionsPage";
import { FormsInputPage } from "./pages/MultimediaFormInputText";
import { FormsSelectOptionPage } from "./pages/MultimediaFormSelect";
import { FormsTextareaPage } from "./pages/MultimediaTextArea";
import { FormsButtonsPage } from "./pages/MultimediaButtons";
import { FormsValidationPage } from "./pages/MultimediaValidation";
import { FormsSubmissionPage } from "./pages/MultimediaFormSubmission";
import {
  CSSIntroductionPage,
  CSSColorsBordersPage,
  CSSTextTablesPage,
  CSSPositionPage,
  CSSAlignPseudoPage,
  CSSFlexboxPage,
  MultimediaCanvas,
  MultimediaAudioVideo,
  MultimediaDOMIntroduction,
  MultimediaDOMManipulation,
  MultimediaEvents,
  MultimediaModules,
  MultimediaWebStorage,
  ProgrammingArrays,
  ProgrammingArrayMethods,
  ProgrammingStrings,
  ProgrammingOOPFundamentals,
  ProgrammingOOPModeling,
  ProgrammingOOPJavaScript,
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
      {
        path: "/multimedia/forms_input",
        element: <FormsInputPage />,
      },
      {
        path: "/multimedia/forms_select_option",
        element: <FormsSelectOptionPage />,
      },
      {
        path: "/multimedia/forms_textarea",
        element: <FormsTextareaPage />,
      },
      {
        path: "/multimedia/forms_buttons",
        element: <FormsButtonsPage />,
      },
      {
        path: "/multimedia/forms_validation",
        element: <FormsValidationPage />,
      },
      {
        path: "/multimedia/forms_submission",
        element: <FormsSubmissionPage />,
      },
      {
        path: "/programming/functions_intro",
        element: <FunctionsIntro />
      },
      {
        path: "/programming/functions_params",
        element: <FunctionsParams />
      },
      {
        path: "/programming/functions_scope_closure",
        element: <ScopePage />
      },
      {
        path: "/programming/functions_constructor",
        element: <ConstructorFunctionsPage />
      },
      {
        path: "/programming/functions_generators",
        element: <GeneratorFunctionsPage />
      },
      {
        path: "/programming/functions_recursion",
        element: <RecursiveFunctionsPage />
      },
      {
        path: "/multimedia/css_introduction",
        element: <CSSIntroductionPage />,
      },
      {
        path: "/multimedia/css_colors_borders",
        element: <CSSColorsBordersPage />,
      },
      {
        path: "/multimedia/css_text_tables",
        element: <CSSTextTablesPage />,
      },
      {
        path: "/multimedia/css_position",
        element: <CSSPositionPage />,
      },
      {
        path: "/multimedia/css_align_pseudo",
        element: <CSSAlignPseudoPage />,
      },
      {
        path: "/multimedia/css_flexbox",
        element: <CSSFlexboxPage />,
      },
      {
        path: "/multimedia/canvas",
        element: <MultimediaCanvas />,
      },
      {
        path: "/multimedia/audio_video",
        element: <MultimediaAudioVideo />,
      },
      {
        path: "/multimedia/dom_introduction",
        element: <MultimediaDOMIntroduction />,
      },
      {
        path: "/multimedia/dom_manipulation",
        element: <MultimediaDOMManipulation />,
      },
      {
        path: "/multimedia/events",
        element: <MultimediaEvents />,
      },
      {
        path: "/multimedia/modules",
        element: <MultimediaModules />,
      },
      {
        path: "/multimedia/web_storage",
        element: <MultimediaWebStorage />,
      },
      {
        path: "/programming/arrays",
        element: <ProgrammingArrays />,
      },
      {
        path: "/programming/array_methods",
        element: <ProgrammingArrayMethods />,
      },
      {
        path: "/programming/strings",
        element: <ProgrammingStrings />,
      },
      {
        path: "/programming/oop_fundamentals",
        element: <ProgrammingOOPFundamentals />,
      },
      {
        path: "/programming/oop_modeling",
        element: <ProgrammingOOPModeling />,
      },
      {
        path: "/programming/oop_javascript",
        element: <ProgrammingOOPJavaScript />,
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
