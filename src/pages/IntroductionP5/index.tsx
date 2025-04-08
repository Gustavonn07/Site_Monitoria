import { PageItemsType } from "../../@types";
import { PageBuilder } from "../../components/containers/PageBuilder";

export const IntroductionP5js = () => {
  return (
    <PageBuilder
      head={{
        title: "Introdução ao p5.js",
        description:
          "Descubra o p5.js — uma biblioteca JavaScript poderosa e acessível para criar arte interativa e visualizações gráficas.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "O que é p5.js?",
          description: (
            <p>
              O <strong>p5.js</strong> é uma biblioteca JavaScript que facilita
              a criação de gráficos, animações e interações. Ela foi inspirada
              no <em>Processing</em> e tem como objetivo tornar a programação
              mais acessível para artistas, designers, educadores e iniciantes.
            </p>
          ),
          sectionProps: {
            hasSeparatorSection: true,
          },
        },
        {
          type: PageItemsType.SECTION,
          title: "Como começar",
          description: (
            <p>
              Você pode começar agora mesmo sem instalar nada, usando o editor
              online do p5.js:{" "}
              <a
                href="https://editor.p5js.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600"
              >
                editor.p5js.org
              </a>
              . Se quiser incluir em um projeto próprio, adicione o seguinte
              script no seu HTML:
              <pre className="bg-gray-100 mt-2 p-2 rounded-md text-sm overflow-auto">
                {`<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.min.js"></script>`}
              </pre>
            </p>
          ),
          sectionProps: {
            hasSeparatorSection: false,
          },
        },
        {
          type: PageItemsType.INFO,
          title: "Dica rápida",
          description: (
            <p>
              Salve seus projetos no editor online do p5.js para acessá-los em
              qualquer lugar com sua conta do GitHub ou Google.
            </p>
          ),
          infoProps: {
            actionsInfo: {
              text: "Ir para o editor",
              handler: () => window.open("https://editor.p5js.org", "_blank"),
              className: "mt-10",
            },
          },
        },
        {
          type: PageItemsType.SECTION,
          title: "Estrutura básica de um sketch",
          description: (
            <p>
              Todo sketch em p5.js começa com duas funções principais:
              <ul className="list-disc list-inside mt-2">
                <li>
                  <strong>setup()</strong>: executa uma vez no início.
                </li>
                <li>
                  <strong>draw()</strong>: executa continuamente, quadro a
                  quadro.
                </li>
              </ul>
              Exemplo:
              <pre className="bg-gray-100 mt-2 p-2 rounded-md text-sm overflow-auto">
                {`function setup() {
                  createCanvas(400, 400);
                }

                function draw() {
                  background(220);
                  ellipse(200, 200, 50, 50);
                }`}
              </pre>
            </p>
          ),
          sectionProps: {
            hasSeparatorSection: false,
          },
        },
        {
          type: PageItemsType.SECTION,
          title: "Formas e Cores",
          description: (
            <p>
              O p5.js permite desenhar várias formas com comandos simples:
              <ul className="list-disc list-inside mt-2">
                <li>
                  <code>rect(x, y, w, h)</code>: retângulo
                </li>
                <li>
                  <code>ellipse(x, y, w, h)</code>: círculo/óvulo
                </li>
                <li>
                  <code>line(x1, y1, x2, y2)</code>: linha
                </li>
              </ul>
              Use <code>fill()</code> para cor interna e <code>stroke()</code>{" "}
              para borda. Exemplo:
              <pre className="bg-gray-100 mt-2 p-2 rounded-md text-sm overflow-auto">
                {`fill(255, 0, 0); // vermelho
stroke(0);        // borda preta
rect(100, 100, 50, 50);`}
              </pre>
            </p>
          ),
          sectionProps: {
            hasSeparatorSection: false,
          },
        },
        {
          type: PageItemsType.SECTION,
          title: "Interatividade com mouse e teclado",
          description: (
            <p>
              O p5.js facilita interações:
              <ul className="list-disc list-inside mt-2">
                <li>
                  <strong>mouseX</strong> e <strong>mouseY</strong>: posição do
                  cursor
                </li>
                <li>
                  <strong>mousePressed()</strong>: detecta clique do mouse
                </li>
                <li>
                  <strong>keyPressed()</strong>: detecta pressionamento de
                  teclas
                </li>
              </ul>
              Exemplo:
              <pre className="bg-gray-100 mt-2 p-2 rounded-md text-sm overflow-auto">
                {`function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}`}
              </pre>
            </p>
          ),
          sectionProps: {
            hasSeparatorSection: true,
          },
        },
        {
          type: PageItemsType.SECTION,
          title: "Próximos passos",
          description: (
            <p>
              Explore manipulação de imagens, sons, vídeos e até sensores. Com o
              p5.js você pode criar desde simples animações até instalações
              artísticas complexas. Próxima seção iremos entrar ainda mais no
              assunto das estruturas básicas do p5.js
            </p>
          ),
          sectionProps: {
            hasSeparatorSection: true,
          },
        },
      ]}
      bibliography={[
        {
          title: "Documentação Oficial",
          link: "https://p5js.org/reference/",
          text: "Referência completa das funções do p5.js.",
        },
        {
          title: "Editor Online",
          link: "https://editor.p5js.org",
          text: "Ambiente de codificação direto no navegador.",
        },
        {
          title: "The Coding Train",
          link: "https://www.youtube.com/c/TheCodingTrain",
          text: "Canal de vídeos com tutoriais práticos e criativos.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "",
      }}
      goFoward={{
        text: "Próximo",
        link: "programming/structure_p5",
      }}
    />
  );
};
