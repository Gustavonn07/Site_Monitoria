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
  {
    groupTitle: "Formulários",
    groupIcon: "mdi:form-textbox",
    group: [
      {
        title: "Input Text",
        icon: "mdi:form-textbox",
        link: "/multimedia/forms_input",
      },
      {
        title: "Select e Option",
        icon: "mdi:menu-down",
        link: "/multimedia/forms_select_option",
      },
      {
        title: "Textarea",
        icon: "mdi:text-box-multiple",
        link: "/multimedia/forms_textarea",
      },
      {
        title: "Botões (Submit, Reset, Button)",
        icon: "mdi:gesture-tap-button",
        link: "/multimedia/forms_buttons",
      },
      {
        title: "Validação de Formulários",
        icon: "mdi:check-circle-outline",
        link: "/multimedia/forms_validation",
      },
      {
        title: "Envio de Formulário",
        icon: "mdi:send",
        link: "/multimedia/forms_submission",
      },
    ],
  },
  {
    groupTitle: "CSS",
    groupIcon: "simple-icons:css3",
    group: [
      {
        title: "Introdução ao CSS",
        icon: "mdi:language-css3",
        link: "multimedia/css_introduction",
      },
      {
        title: "Cores e Bordas",
        icon: "mdi:palette-outline",
        link: "multimedia/css_colors_borders",
      },
      {
        title: "Texto e Tabelas",
        icon: "mdi:format-text",
        link: "multimedia/css_text_tables",
      },
      {
        title: "Position",
        icon: "mdi:axis-arrow",
        link: "multimedia/css_position",
      },
      {
        title: "Align e Pseudo-classes",
        icon: "mdi:format-align-center",
        link: "multimedia/css_align_pseudo",
      },
      {
        title: "Flexbox",
        icon: "mdi:view-column-outline",
        link: "multimedia/css_flexbox",
      },
    ],
  },
  {
    groupTitle: "Mídia, DOM e Interação",
    groupIcon: "mdi:gesture-double-tap",
    group: [
      {
        title: "Canvas",
        icon: "mdi:draw-pen",
        link: "multimedia/canvas",
      },
      {
        title: "Áudio e Vídeo",
        icon: "mdi:play-circle-outline",
        link: "multimedia/audio_video",
      },
      {
        title: "Introdução ao DOM",
        icon: "mdi:file-tree-outline",
        link: "multimedia/dom_introduction",
      },
      {
        title: "Manipulando o DOM",
        icon: "mdi:pencil-ruler",
        link: "multimedia/dom_manipulation",
      },
      {
        title: "Eventos",
        icon: "mdi:cursor-default-click-outline",
        link: "multimedia/events",
      },
      {
        title: "Módulos",
        icon: "mdi:puzzle-outline",
        link: "multimedia/modules",
      },
      {
        title: "Web Storage",
        icon: "mdi:database-outline",
        link: "multimedia/web_storage",
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
  {
    groupTitle: "Arrays e Strings",
    groupIcon: "mdi:code-brackets",
    group: [
      {
        title: "Arrays",
        icon: "mdi:code-brackets",
        link: "programming/arrays",
      },
      {
        title: "Métodos e Desestruturação",
        icon: "mdi:function-variant",
        link: "programming/array_methods",
      },
      {
        title: "Strings",
        icon: "mdi:format-quote-close",
        link: "programming/strings",
      },
    ],
  },
  {
    groupTitle: "Programação Orientada a Objetos",
    groupIcon: "mdi:shape-outline",
    group: [
      {
        title: "Fundamentos de POO",
        icon: "mdi:shape-outline",
        link: "programming/oop_fundamentals",
      },
      {
        title: "Modelagem de Problemas",
        icon: "mdi:sitemap-outline",
        link: "programming/oop_modeling",
      },
      {
        title: "POO em JavaScript",
        icon: "simple-icons:javascript",
        link: "programming/oop_javascript",
      },
    ],
  },
];

