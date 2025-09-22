export type SidebarData = {
  groupTitle: string;
  groupIcon: string;
  group: {
    title: string;
    icon: string;
    link: string;
    disabled?: boolean;
  }[];
  groupOnClick?: () => void;
  groupDisabled?: boolean;
}[];

export const sidebar_data_multimedia: SidebarData = [
  {
    groupTitle: "Introdução à HTML5",
    groupIcon: "simple-icons:html5",
    group: [
      {
        title: "O que é HTML?",
        icon: "mdi:lightbulb-on-outline",
        link: "/multimedia/introduction_html",
      },
      {
        title: "Tags e Elementos",
        icon: "ph:code-bold",
        link: "/multimedia/formatting_tags",
      },
      {
        title: "Estruturas Basicas",
        icon: "hugeicons:structure-04",
        link: "/multimedia/structures_base",
      },
      {
        title: "Links e Navegação",
        icon: "tdesign:link",
        link: "multimedia/navigation",
      },
      {
        title: "Imagens",
        icon: "mdi:images-outline",
        link: "multimedia/images",
      },
      {
        title: "Tabelas",
        icon: "tabler:table",
        link: "multimedia/tables",
      },
      {
        title: "Formulários",
        icon: "mdi:form-outline",
        link: "multimedia/forms",
      },
      {
        title: "Tags Semânticas",
        icon: "material-symbols:check-rounded",
        link: "multimedia/semantic_tags",
      },
      {
        title: "Desafios",
        icon: "mdi:link-variant",
        link: "multimedia/challenges_html",
      },
    ],
  },
];

export const sidebar_data_programming: SidebarData = [
  {
    groupTitle: "Introdução ao p5.js",
    groupIcon: "simple-icons:p5dotjs",
    group: [
      {
        title: "O que é p5.js",
        icon: "mdi:lightbulb-on-outline",
        link: "/programming/introduction_p5",
      },
      {
        title: "Fundamentos do JS",
        icon: "mdi:code-json",
        link: "programming/js_fundamentals",
      },
      {
        title: "Estrutura Básica",
        icon: "ph:code-bold",
        link: "/programming/structure_p5",
      },
      {
        title: "Formas e Cores",
        icon: "material-symbols:palette-outline",
        link: "/programming/styles",
      },
      {
        title: "Interatividade",
        icon: "mdi:gesture-tap-button",
        link: "programming/interactive",
      },
      {
        title: "Organização/Funções",
        icon: "mdi:function-variant",
        link: "programming/organization_and_functions",
      },
      {
        title: "Imagens e Sons",
        icon: "mdi:image-multiple-outline",
        link: "programming/sound_and_images",
      },
      {
        title: "Desafios",
        icon: "mdi:link-variant",
        link: "programming/challenges",
      },
    ]
  },
  {
    groupTitle: "Funções",
    groupIcon: "mdi:function",
    group: [
      {
        title: "Introdução às Funções",
        icon: "mdi:function",
        link: "/programming/functions_intro",
      },
      {
        title: "Parâmetros e Retorno",
        icon: "mdi:variable",
        link: "/programming/functions_params",
      },
      {
        title: "Escopo e Closures",
        icon: "mdi:lock-outline",
        link: "/programming/functions_scope_closure",
      },
      {
        title: "Funções Construtoras",
        icon: "mdi:hammer-screwdriver",
        link: "/programming/functions_constructor",
      },
      {
        title: "Funções Geradoras (yield)",
        icon: "mdi:repeat-once",
        link: "/programming/functions_generators",
      },
      {
        title: "Funções Recursivas",
        icon: "mdi:sync",
        link: "/programming/functions_recursion",
      },
    ],
  },
];

