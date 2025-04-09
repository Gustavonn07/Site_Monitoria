import { PageBuilder } from "../../components/containers/PageBuilder";
import { PageItemsType } from "../../@types";

export const IntroductionHTML5 = () => {
  return (
    <PageBuilder
      head={{
        title: "Introdução à Estrutura do HTML",
        description:
          "Entenda os principais elementos estruturais e como organizar uma página HTML.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "O que é HTML?",
          description: (
            <p>
              HTML (HyperText Markup Language) é a linguagem base da web, responsável por estruturar o conteúdo das páginas. Ao contrário de linguagens de programação, o HTML é uma linguagem de marcação que define a hierarquia e o tipo dos elementos exibidos ao usuário.
              <br />
              <br />
              Ele é utilizado em conjunto com o CSS (que cuida do estilo visual da página) e o JavaScript (que adiciona interatividade e comportamentos dinâmicos). Juntas, essas tecnologias formam o núcleo do desenvolvimento front-end.
              <br />
              <br />
              Ao longo do tempo, o HTML evoluiu. A primeira versão surgiu nos anos 90 com Tim Berners-Lee, criador da World Wide Web. Com o tempo, foram surgindo novas versões até o HTML5, que trouxe elementos semânticos e maior integração com mídia e APIs modernas.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "História e Evolução do HTML",
          description: (
            <p>
              A linguagem HTML foi criada por Tim Berners-Lee em 1991, como parte de um projeto no CERN para compartilhar documentos científicos de forma mais acessível. Inicialmente, o HTML era extremamente simples, com poucas tags e funcionalidade restrita.
              <br />
              <br />
              Com o passar dos anos, novas versões surgiram: HTML 2.0, 3.2, 4.01 e, finalmente, o HTML5, lançado oficialmente em 2014. Esta última versão trouxe diversas melhorias, como suporte nativo a vídeos, áudios, gráficos (com o elemento <code>&lt;canvas&gt;</code>) e, principalmente, elementos semânticos.
              <br />
              <br />
              O desenvolvimento do HTML agora é conduzido pelo WHATWG, garantindo atualizações contínuas com foco em compatibilidade e inovação.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Diferença entre HTML, CSS e JavaScript",
          description: (
            <p>
              Muitas vezes, iniciantes confundem o papel de cada tecnologia da tríade da web: HTML, CSS e JavaScript.
              <br />
              <br />
              O HTML define a estrutura e o conteúdo da página, como títulos, parágrafos, imagens e links. Já o CSS (Cascading Style Sheets) é responsável pela aparência — cores, fontes, tamanhos, espaçamento, etc. Por fim, o JavaScript adiciona comportamento dinâmico, permitindo interações como cliques, animações e validações.
              <br />
              <br />
              Juntas, essas linguagens permitem criar desde páginas simples até aplicações web complexas e responsivas.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Estrutura Básica de um Documento HTML",
          description: (
            <p>
              Um arquivo HTML segue uma estrutura base com elementos como {" "}
              <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code> e {" "}
              <code>&lt;body&gt;</code>.
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
{`<!DOCTYPE html>
<html>
  <head>
    <title>Minha Página</title>
  </head>
  <body>
    <h1>Olá, mundo!</h1>
  </body>
</html>`}
              </pre>
              Cada uma dessas partes tem um papel fundamental: <code>&lt;head&gt;</code> guarda metadados e referências a scripts e estilos, enquanto <code>&lt;body&gt;</code> contém todo o conteúdo visível da página.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Tags Semânticas",
          description: (
            <p>
              Tags semânticas ajudam a dar significado ao conteúdo:
              <ul className="list-disc list-inside mt-2">
                <li>
                  <code>&lt;header&gt;</code> – cabeçalho da página
                </li>
                <li>
                  <code>&lt;nav&gt;</code> – navegação
                </li>
                <li>
                  <code>&lt;main&gt;</code> – conteúdo principal
                </li>
                <li>
                  <code>&lt;footer&gt;</code> – rodapé
                </li>
              </ul>
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
{`<main>
  <section>
    <h2>Seção Principal</h2>
    <p>Texto aqui...</p>
  </section>
</main>`}
              </pre>
            </p>
          ),
          sectionProps: { hasSeparatorSection: false },
        },
        {
          type: PageItemsType.INFO,
          title: "Mais sobre tags semânticas",
          description: (
            <p>
              Em páginas futuras, falaremos detalhadamente sobre tags semânticas, suas vantagens para acessibilidade, SEO e estruturação de código.
            </p>
          ),
          infoProps: { hasSeparatorInfo: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Agrupando e Organizandos Conteúdos",
          description: (
            <p>
              Use tags como <code>&lt;div&gt;</code> e <code>&lt;span&gt;</code> {" "}
              para agrupar conteúdos e aplicar estilos:
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
{`<div class="container">
  <span class="highlight">Texto importante</span>
</div>`}
              </pre>
              Essas tags não têm significado semântico, mas são muito úteis para
              estrutura e CSS.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
      ]}
      bibliography={[
        {
          title: "HTML - W3Schools",
          link: "https://www.w3schools.com/html/",
          text: "Referência completa para HTML com exemplos interativos.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "html/introduction",
      }}
      goFoward={{
        text: "Próximo",
        link: "html/formatting_tags",
      }}
    />
  );
};
