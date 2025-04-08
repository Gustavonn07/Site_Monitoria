import { PageItemsType } from "../../@types";
import { PageBuilder } from "../../components/containers/PageBuilder";
import { Button } from "../../components";
import React from "react";

export const ChallengesP5 = () => {
  const [showAnswers, setShowAnswers] = React.useState<boolean[]>(
    Array(4).fill(false)
  );

  const toggleAnswer = (index: number) => {
    setShowAnswers((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <PageBuilder
      head={{
        title: "Desafios Interativos",
        description:
          "Coloque seus conhecimentos em prática com desafios que envolvem interação com mouse, teclado, imagens e som usando p5.js.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "Desafio 1: Círculo Clicável",
          description: (
            <div>
              <p>
                Crie um sketch onde um círculo muda de cor toda vez que você
                clica dentro dele. Dica: use a função <code>dist()</code> para
                medir a distância entre o clique e o centro do círculo.
              </p>
              <Button
                className="mt-3"
                onClick={() => toggleAnswer(0)}
                variant="outline"
              >
                {showAnswers[0] ? "Esconder Resposta" : "Mostrar Resposta"}
              </Button>
              {showAnswers[0] && (
                <pre className="bg-gray-100 p-3 rounded-md my-4 text-sm overflow-auto">
{`let x = 150;
let y = 100;
let radius = 50;
let c;

function setup() {
  createCanvas(300, 200);
  c = color(random(255), random(255), random(255));
}

function draw() {
  background(240);
  fill(c);
  ellipse(x, y, radius * 2);
}

function mousePressed() {
  if (dist(mouseX, mouseY, x, y) < radius) {
    c = color(random(255), random(255), random(255));
  }
}`}
                </pre>
              )}
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Desafio 2: Tecla para Mover",
          description: (
            <div>
              <p>
                Faça um quadrado que se move com as setas do teclado. Ao
                pressionar uma tecla, ele deve andar suavemente na direção
                correspondente.
              </p>
              <Button
                className="mt-3"
                onClick={() => toggleAnswer(1)}
                variant="outline"
              >
                {showAnswers[1] ? "Esconder Resposta" : "Mostrar Resposta"}
              </Button>
              {showAnswers[1] && (
                <pre className="bg-gray-100 p-3 rounded-md my-4 text-sm overflow-auto">
{`let x = 150;
let y = 100;

function setup() {
  createCanvas(300, 200);
}

function draw() {
  background(240);
  if (keyIsDown(LEFT_ARROW)) x -= 2;
  if (keyIsDown(RIGHT_ARROW)) x += 2;
  if (keyIsDown(UP_ARROW)) y -= 2;
  if (keyIsDown(DOWN_ARROW)) y += 2;
  rect(x, y, 40, 40);
}`}
                </pre>
              )}
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Desafio 3: Pincel Interativo",
          description: (
            <div>
              <p>
                Transforme o mouse em um pincel! Cada vez que o mouse for
                clicado e arrastado, ele deve desenhar com uma cor diferente e
                tamanho aleatório.
              </p>
              <Button
                className="mt-3"
                onClick={() => toggleAnswer(2)}
                variant="outline"
              >
                {showAnswers[2] ? "Esconder Resposta" : "Mostrar Resposta"}
              </Button>
              {showAnswers[2] && (
                <pre className="bg-gray-100 p-3 rounded-md my-4 text-sm overflow-auto">
{`function setup() {
  createCanvas(300, 200);
  background(255);
}

function draw() {
  if (mouseIsPressed) {
    let r = random(255);
    let g = random(255);
    let b = random(255);
    let size = random(5, 30);
    fill(r, g, b);
    noStroke();
    ellipse(mouseX, mouseY, size, size);
  }
}`}
                </pre>
              )}
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Desafio 4: Jogo da Mira",
          description: (
            <div>
              <p>
                Crie um mini game onde alvos aparecem em posições aleatórias e
                somem ao serem clicados. Use <code>random()</code>,{" "}
                <code>mousePressed()</code> e som ao acertar.
              </p>
              <Button
                className="mt-3"
                onClick={() => toggleAnswer(3)}
                variant="outline"
              >
                {showAnswers[3] ? "Esconder Resposta" : "Mostrar Resposta"}
              </Button>
              {showAnswers[3] && (
                <pre className="bg-gray-100 p-3 rounded-md my-4 text-sm overflow-auto">
{`let x, y, r;

function setup() {
  createCanvas(300, 200);
  novoAlvo();
}

function draw() {
  background(240);
  fill("red");
  ellipse(x, y, r * 2);
}

function mousePressed() {
  if (dist(mouseX, mouseY, x, y) < r) {
    novoAlvo();
  }
}

function novoAlvo() {
  x = random(50, 250);
  y = random(50, 150);
  r = random(20, 40);
}`}
                </pre>
              )}
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.INFO,
          title: "Dica: Teste, Erre e Melhore",
          description: (
            <p>
              Os desafios servem para errar, tentar de novo e aprender fazendo.
              Personalize como quiser: adicione imagens, pontuação ou animações!
            </p>
          ),
        },
      ]}
      bibliography={[
        {
          title: "Referência: dist()",
          link: "https://p5js.org/reference/#/p5/dist",
          text: "Função para medir distância entre dois pontos.",
          hasSeparator: true,
        },
        {
          title: "Referência: random()",
          link: "https://p5js.org/reference/#/p5/random",
          text: "Use para criar valores imprevisíveis.",
        },
      ]}
      goBack={{text: 'Voltar', link: 'programming/sound_and_images'}}
    />
  );
};
