import { PageItemsType } from "../../@types";
import { PageBuilder } from "../../components/containers/PageBuilder";

export const ProgrammingInteractive = () => {
  return (
    <PageBuilder
      head={{
        title: "Interatividade no p5.js",
        description:
          "Explore como detectar cliques, pressionar teclas e usar variáveis como mouseX para criar experiências interativas.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "Eventos com o Mouse",
          description: (
            <p>
              O p5.js permite detectar interações com o mouse usando funções
              como:
              <ul className="list-disc list-inside mt-2">
                <li>
                  <code>mousePressed()</code> – acionada ao clicar no canvas.
                </li>
                <li>
                  <code>mouseReleased()</code>, <code>mouseClicked()</code> –
                  também são suportadas.
                </li>
              </ul>
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                {`function setup() {
  createCanvas(300, 200);
  background(220);
}

function draw() {
  fill(100);
  ellipse(mouseX, mouseY, 40, 40);
}

function mousePressed() {
  background(random(255)); // muda fundo ao clicar
}`}
              </pre>
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Variáveis Globais: mouseX e mouseY",
          description: (
            <p>
              <code>mouseX</code> e <code>mouseY</code> armazenam as posições
              atuais do cursor no canvas. Úteis para seguir o mouse ou medir
              distâncias.
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                {`function setup() {
  createCanvas(300, 150);
}

function draw() {
  background(255);
  ellipse(mouseX, mouseY, 40, 40);
}`}
              </pre>
              <p className="mt-2">
                Outros valores úteis:
                <ul className="list-disc list-inside mt-2">
                  <li>
                    <code>pmouseX</code> e <code>pmouseY</code>: posição do
                    frame anterior.
                  </li>
                </ul>
              </p>
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Teclado: keyPressed e keyIsDown",
          description: (
            <p>
              O p5.js detecta teclas com:
              <ul className="list-disc list-inside mt-2">
                <li>
                  <code>keyPressed()</code> – chamada quando qualquer tecla é
                  pressionada.
                </li>
                <li>
                  <code>keyIsDown(CODE)</code> – mantém ação se tecla estiver
                  pressionada.
                </li>
              </ul>
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                {`function setup() {
  createCanvas(300, 150);
}

function draw() {
  background(255);
  if (keyIsDown(LEFT_ARROW)) {
    fill("red");
  } else {
    fill("black");
  }
  ellipse(150, 75, 50, 50);
}

function keyPressed() {
  console.log("Tecla pressionada:", key);
}`}
              </pre>
            </p>
          ),
          sectionProps: { hasSeparatorSection: false },
        },
        {
          type: PageItemsType.INFO,
          title: "Dica: Combine múltiplos inputs",
          description: (
            <p>
              Combine teclado e mouse para controle mais rico:
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                {`function draw() {
  if (mouseIsPressed && keyIsDown(32)) {
    // mouse + tecla espaço
    fill("purple");
  } else {
    fill("gray");
  }
  ellipse(mouseX, mouseY, 40, 40);
}`}
              </pre>
            </p>
          ),
        },
        {
          type: PageItemsType.SECTION,
          title: "Detectando Scroll e Movimento",
          description: (
            <p>
              O p5.js também pode detectar eventos de rolagem ou movimento:
              <ul className="list-disc list-inside mt-2">
                <li>
                  <code>mouseWheel(event)</code> – responde ao scroll do mouse.
                </li>
                <li>
                  <code>movedX</code> e <code>movedY</code> – mostram a mudança
                  de posição desde o último frame.
                </li>
              </ul>
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                {`function mouseWheel(event) {
  print(event.delta);
  return false;
}`}
              </pre>
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Arrastar e Soltar (Drag & Drop)",
          description: (
            <p>
              Use <code>mouseDragged()</code> para detectar movimento com botão
              pressionado:
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                {`function draw() {
  if (mouseIsPressed) {
    fill("blue");
    ellipse(mouseX, mouseY, 30, 30);
  }
}`}
              </pre>
              Também é possível trabalhar com arquivos usando{" "}
              <code>drop()</code>.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
      ]}
      bibliography={[
        {
          title: "p5.js Reference – Events",
          link: "https://p5js.org/reference/#group-Events",
          text: "Documentação oficial sobre eventos como mousePressed, keyPressed, etc.",
          hasSeparator: true,
        },
        {
          title: "p5.js Reference – Mouse",
          link: "https://p5js.org/reference/#group-Mouse",
          text: "Referência para variáveis como mouseX, mouseY e mouseIsPressed.",
          hasSeparator: true,
        },
        {
          title: "p5.js Reference – Keyboard",
          link: "https://p5js.org/reference/#group-Keyboard",
          text: "Controle de teclas com key, keyCode e keyIsDown.",
          hasSeparator: true,
        },
        {
          title: "p5.js Reference – DOM",
          link: "https://p5js.org/reference/#group-DOM",
          text: "Interações com elementos HTML como botões e sliders.",
          hasSeparator: true,
        },
        {
          title: "The Coding Train – Interactivity Playlist",
          link: "https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA",
          text: "Série de vídeos sobre interações com mouse, teclado e elementos dinâmicos.",
          hasSeparator: true,
        },
        {
          title: "The Nature of Code – Capítulo 1",
          link: "https://natureofcode.com/book/chapter-1-vectors/",
          text: "Base conceitual para trabalhar com vetores e movimento em p5.js.",
          hasSeparator: false,
        },
      ]}
      goBack={{
        link: 'programming/styles',
        text: 'Voltar'
      }}
      goFoward={{
        link: 'programming/organization_and_functions',
        text: 'Próximo'
      }}
    />
  );
};
