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
    groupTitle: "Introdução",
    groupIcon: "tabler:braces",
    group: [
      {
        title: "Introdução a p5.js",
        icon: "tabler:bulb",
        link: "/introduction_p5",
      },
    ],
  },
];
