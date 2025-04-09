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
      // {
      //   title: "Imagens e Sons",
      //   icon: "mdi:image-multiple-outline",
      //   link: "multimedia/sound_and_images",
      // },
      // {
      //   title: "Desafios",
      //   icon: "mdi:link-variant",
      //   link: "multimedia/challenges",
      // },
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
    ],
  },
];

