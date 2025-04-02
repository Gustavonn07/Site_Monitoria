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
    groupTitle: "Grupo 1",
    groupIcon: "material-symbols:10k",
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
    groupIcon: "material-symbols:10k",
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
    groupTitle: "Grupo 3sad asdsdd",
    groupIcon: "material-symbols:10k",
    group: [
      {
        title: "Titulo 07sad sadasdas dasd",
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

export const sidebar_data_programming: SidebarData = [
  {
    groupTitle: "Grupo 1 P",
    groupIcon: "material-symbols:10k",
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
    groupIcon: "material-symbols:10k",
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
    groupTitle: "Grupo 3sad asdsdd",
    groupIcon: "material-symbols:10k",
    group: [
      {
        title: "Titulo 07sad sadasdas dasd",
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
