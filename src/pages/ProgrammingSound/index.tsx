import { PageItemsType } from "../../@types";
import { PageBuilder } from "../../components/containers/PageBuilder";

export const ProgrammingSound = () => {
  return (
    <PageBuilder
      head={{
        title: "Imagens e Som no p5.js",
        description:
          "Aprenda como importar e manipular imagens, além de adicionar sons e efeitos sonoros nos seus sketches.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "Carregando Imagens",
          description: (
            <p>
              Use a função <code>loadImage()</code> para carregar imagens no
              p5.js. A função deve ser chamada dentro de <code>preload()</code>.
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                {`let img;

function preload() {
  img = loadImage("imagem.png");
}

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220);
  image(img, 50, 50, 200, 150); // x, y, largura, altura
}`}
              </pre>
              Certifique-se de que a imagem esteja na mesma pasta do arquivo
              HTML ou bem referenciada.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Manipulando Imagens",
          description: (
            <p>
              Você pode aplicar efeitos com filtros ou alterar transparência com
              <code>tint()</code>.
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                {`function draw() {
  background(255);
  tint(255, 100); // transparência
  image(img, 0, 0);
  
  filter(GRAY); // aplica filtro em tons de cinza
}`}
              </pre>
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Carregando e Tocando Sons",
          description: (
            <p>
              Para adicionar áudio, use <code>loadSound()</code>. É necessário
              importar a biblioteca de som do p5.
              <ul className="list-disc list-inside mt-2">
                <li>
                  Adicione no HTML:{" "}
                  <code>{`<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/addons/p5.sound.min.js"></script>`}</code>
                </li>
              </ul>
              Exemplo:
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                {`let som;

function preload() {
  som = loadSound("som.mp3");
}

function setup() {
  createCanvas(200, 200);
  let botao = createButton("Tocar Som");
  botao.mousePressed(() => som.play());
}`}
              </pre>
            </p>
          ),
          sectionProps: { hasSeparatorSection: false },
        },
        {
          type: PageItemsType.INFO,
          title: "Dica: Controle de Áudio",
          description: (
            <p>
              Sons podem ser pausados, alterados de volume e loopados:
              <ul className="list-disc list-inside mt-2">
                <li>
                  <code>som.pause()</code>, <code>som.setVolume(0.5)</code>,{" "}
                  <code>som.loop()</code>
                </li>
              </ul>
              Isso permite criar experiências ricas com som dinâmico e feedback
              auditivo.
            </p>
          ),
        },
      ]}
      bibliography={[
        {
          title: "p5.js Reference – Image",
          link: "https://p5js.org/reference/#/p5/image",
          text: "Documentação oficial sobre imagens.",
          hasSeparator: true,
        },
        {
          title: "p5.js Sound Library",
          link: "https://p5js.org/reference/#/libraries/p5.sound",
          text: "Biblioteca de som do p5.js com exemplos e funções.",
          hasSeparator: true,
        },
        {
          title: "Função preload() no p5.js",
          link: "https://p5js.org/reference/#/p5/preload",
          text: "Carregamento de mídia antes da execução.",
        },
      ]}
      goBack={{link: 'programming/organization_and_functions', text: 'Voltar'}}
      goFoward={{link: 'programming/challenges', text: 'Próximo'}}
    />
  );
};
