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

export const sidebar_data_multimedia: SidebarData = [];

export const sidebar_data_programming: SidebarData = [
  {
    groupTitle: "Introdução ao p5.js",
    groupIcon: "simple-icons:p5dotjs",
    group: [
      {
        title: "O que é p5.js",
        icon: "mdi:lightbulb-on-outline",
        link: "/introduction_p5",
      },
      {
        title: "Estrutura Básica",
        icon: "ph:code-bold",
        link: "/structure_p5",
      },
      {
        title: "Formas e Cores",
        icon: "material-symbols:palette-outline",
        link: "/shape_and_colors",
      },
      {
        title: "Interatividade",
        icon: "mdi:gesture-tap-button",
        link: "/interactive",
      },
      {
        title: "Organização e Funções",
        icon: "mdi:function-variant",
        link: "/organization_and_functions",
      },
      {
        title: "Trabalhando com Imagens e Sons",
        icon: "mdi:image-multiple-outline",
        link: "/sound_and_images",
      },
      {
        title: "Desafios e Links úteis",
        icon: "mdi:link-variant",
        link: "/challenges",
      },
    ],
  },
];

