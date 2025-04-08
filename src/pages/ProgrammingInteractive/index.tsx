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
          sectionProps: { hasSeparatorSection: true },
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
      ]}
    />
  );
};
