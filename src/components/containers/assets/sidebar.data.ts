export type SidebarData = {
  groupTitle: string;
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
    groupTitle: "Grupo 1",
    group: [
      {
        title: "Titulo 01",
        icon: "tabler:user",
        link: "/batata",
      },
      {
        title: "Titulo 02",
        icon: "tabler:user",
        link: "/batata-2",
      },
      {
        title: "Titulo 03",
        icon: "tabler:user",
        link: "/batata-3",
      },
    ],
    groupDisabled: true
  },
  {
    groupTitle: "Grupo 2",
    group: [
      {
        title: "Titulo 04",
        icon: "tabler:user",
        link: "/batata-4",
      },
      {
        title: "Titulo 05",
        icon: "tabler:user",
        link: "/batata-5",
      },
      {
        title: "Titulo 06",
        icon: "tabler:user",
        link: "/batata-6",
        disabled: true
      },
    ],
  },
  {
    groupTitle: "Grupo 3",
    group: [
      {
        title: "Titulo 07",
        icon: "tabler:user",
        link: "/batata-7",
      },
      {
        title: "Titulo 08",
        icon: "tabler:user",
        link: "/batata-8",
      },
    ],
  },
];
