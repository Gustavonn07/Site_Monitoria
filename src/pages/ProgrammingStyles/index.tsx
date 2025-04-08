import { PageItemsType } from "../../@types";
import { PageBuilder } from "../../components/containers/PageBuilder";

export const ProgrammingStyles = () => {
  return (
    <PageBuilder
      head={{
        title: "Estrutura e Estilização Basica 02 no p5.js",
        description:
          "Entenda o funcionamento completo do ciclo de vida no p5.js e explore as possibilidades de estilização para seus desenhos.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "Entendendo o Ciclo de Vida",
          description: (
            <div>
              <p>
                O p5.js possui funções que organizam o fluxo de execução do seu
                sketch. As principais são:
              </p>

              <ul className="list-disc list-inside mt-3">
                <li>
                  <strong>preload()</strong> – Usado para carregar arquivos
                  antes do sketch iniciar (ex: <code>loadImage</code>,{" "}
                  <code>loadSound</code>).
                  <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                    {`let img;
        
function preload() {
  img = loadImage('imagem.jpg');
}`}
                  </pre>
                </li>

                <li className="mt-4">
                  <strong>setup()</strong> – Executado uma única vez. Ideal para
                  criar o canvas, definir estilos iniciais e configurar
                  variáveis.
                  <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                    {`function setup() {
  createCanvas(400, 400);
  background(200);
  textSize(24);
}`}
                  </pre>
                </li>

                <li className="mt-4">
                  <strong>draw()</strong> – Roda continuamente (em loop) a cerca
                  de 60 quadros por segundo. Usado para animações e atualizações
                  visuais.
                  <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                    {`function draw() {
  ellipse(mouseX, mouseY, 30, 30);
}`}
                  </pre>
                </li>
              </ul>

              <p className="mt-4">
                Além dessas, há outras funções opcionais úteis:
              </p>

              <ul className="list-disc list-inside mt-2">
                <li>
                  <code>mousePressed()</code> – Disparada quando o mouse é
                  clicado.
                  <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                    {`function mousePressed() {
  console.log("Clique detectado!");
}`}
                  </pre>
                </li>

                <li className="mt-2">
                  <code>keyPressed()</code> – Disparada ao pressionar uma tecla.
                  <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                    {`function keyPressed() {
  if (key === 'a') {
    background('aqua');
  }
}`}
                  </pre>
                </li>

                <li className="mt-2">
                  <code>windowResized()</code> – Chamado quando a janela do
                  navegador é redimensionada.
                  <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                    {`function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}`}
                  </pre>
                </li>
              </ul>

              <p className="mt-4">
                Esse ciclo de vida permite criar sketches interativos e
                dinâmicos, com controle total sobre o comportamento visual e de
                entrada do usuário.
              </p>
            </div>
          ),
          sectionProps: { hasSeparatorSection: false },
        },
        {
          type: PageItemsType.INFO,
          title: "Organizando Seu Código",
          description: (
            <p>
              Embora o p5.js permita código direto no sketch, boas práticas
              incluem:
              <ul className="list-disc list-inside mt-2">
                <li>
                  <strong>Funções auxiliares</strong> – crie funções como{" "}
                  <code>desenhaCarro()</code>, <code>moverJogador()</code> para
                  evitar repetições.
                </li>
                <li>
                  <strong>Variáveis Globais</strong> – declare fora das funções
                  principais para manter o estado do sketch.
                </li>
                <li>
                  <strong>Modularização</strong> – com bibliotecas ou frameworks
                  JS (ex: classes, arquivos separados).
                </li>
              </ul>
              <p className="mt-2">
                Um sketch bem estruturado é mais fácil de ler, depurar e
                expandir.
              </p>
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Usando Cores com HSB e Tons de Cinza",
          description: (
            <div>
              <p>
                Além do tradicional RGB, o p5.js permite outros modelos de
                cores:
              </p>

              <ul className="list-disc list-inside mt-2">
                <li>
                  <code>colorMode(HSB)</code> – usa <strong>Hue (matiz)</strong>
                  , <strong>Saturation (saturação)</strong> e{" "}
                  <strong>Brightness (brilho)</strong>.
                </li>
                <li>
                  <code>fill(128)</code> – quando recebe apenas um número,
                  define um tom de cinza (0 = preto, 255 = branco).
                </li>
              </ul>

              <p className="mt-4 font-semibold">Exemplo com HSB:</p>
              <pre className="bg-gray-100 p-2 rounded-md text-sm overflow-auto">
                {`function setup() {
  createCanvas(300, 200);
  colorMode(HSB);
  noStroke();

  fill(0, 100, 100);     // vermelho
  rect(0, 0, 100, 200);

  fill(120, 100, 100);   // verde
  rect(100, 0, 100, 200);

  fill(240, 100, 100);   // azul
  rect(200, 0, 100, 200);
}`}
              </pre>

              <p className="mt-4 font-semibold">Exemplo com escala de cinza:</p>
              <pre className="bg-gray-100 p-2 rounded-md text-sm overflow-auto">
                {`function setup() {
  createCanvas(300, 100);
  noStroke();

  fill(50);   // cinza escuro
  rect(0, 0, 100, 100);

  fill(128);  // cinza médio
  rect(100, 0, 100, 100);

  fill(220);  // cinza claro
  rect(200, 0, 100, 100);
}`}
              </pre>

              <p className="mt-4">
                Você pode usar ferramentas como o{" "}
                <a
                  href="https://colorpicker.me"
                  className="underline text-blue-600"
                  target="_blank"
                >
                  Color Picker
                </a>{" "}
                para experimentar cores e converter entre RGB, HSB, HEX e outros
                modelos.
              </p>
            </div>
          ),
          sectionProps: { hasSeparatorSection: false },
        },
        {
          type: PageItemsType.INFO,
          title: "Dica: Agrupe com push() e pop()",
          description: (
            <div>
              <p>
                Ao aplicar estilos como <code>fill()</code>,{" "}
                <code>stroke()</code> ou <code>rotate()</code>, eles afetam tudo
                o que vem depois. Para isolar esses estilos em um bloco
                específico, use <code>push()</code> e <code>pop()</code>.
              </p>

              <p className="mt-3 font-semibold">Exemplo simples:</p>
              <pre className="bg-gray-100 p-2 rounded-md text-sm overflow-auto">
                {`function setup() {
  createCanvas(300, 150);
  noStroke();

  fill(0, 255, 0); // verde
  rect(10, 10, 80, 80);

  push();
  fill(255, 0, 0); // vermelho apenas aqui
  stroke(0);       // com contorno
  ellipse(150, 50, 80, 80);
  pop();

  rect(220, 10, 80, 80); // ainda verde
}`}
              </pre>

              <p className="mt-4 font-semibold">Exemplo com transformações:</p>
              <pre className="bg-gray-100 p-2 rounded-md text-sm overflow-auto">
                {`function draw() {
  background(240);

  push();
  translate(150, 75);
  rotate(frameCount * 0.02);
  fill('orange');
  rect(-25, -25, 50, 50);
  pop();

  fill('blue');
  text("Quadrado rotacionado sem afetar o resto", 10, 140);
}`}
              </pre>

              <p className="mt-4">
                Isso mantém seu sketch organizado e evita efeitos colaterais não
                esperados em outros elementos do canvas.
              </p>
            </div>
          ),
        },
      ]}
      bibliography={[
        {
          title: "Funções de Estilo no p5.js",
          link: "https://p5js.org/reference/#group-Shape",
          text: "Documentação oficial das funções de desenho e estilo.",
        },
        {
          title: "Color Mode e Transparência",
          link: "https://p5js.org/pt-BR/learn/color.html",
          text: "Explicação detalhada dos modos de cor no p5.js.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "programming/structure_p5",
      }}
      goFoward={{
        text: "Próximo",
        link: "programming/interactive",
      }}
    />
  );
};
