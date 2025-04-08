import { PageBuilder } from '../../components/containers/PageBuilder'
import { PageItemsType } from '../../@types'

export const ProgrammingStructure = () => {
  return (
    <PageBuilder
      head={{
        title: "Estrutura e Estilização Basica 01 no p5.js",
        description: "Aprofunde seu conhecimento em estrutura de código e estilização gráfica utilizando p5.js.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "Compreendendo o background() e clear()",
          description: (
            <div>
              <p>
                O <code>background()</code> redefine o conteúdo do canvas a cada frame, útil para animações. Já <code>clear()</code> limpa o canvas, mas mantém a transparência:
              </p>
        
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
                <div>
                  <p className="font-semibold mb-2">Exemplo com <code>background()</code>:</p>
                  <pre className="bg-gray-100 p-2 rounded-md text-sm overflow-auto">
        {`function setup() {
          createCanvas(400, 400);
        }
        
        function draw() {
          background(255);
          ellipse(mouseX, mouseY, 50, 50);
        }`}
                  </pre>
                </div>
        
                <div>
                  <p className="font-semibold mb-2">Exemplo com <code>clear()</code>:</p>
                  <pre className="bg-gray-100 p-2 rounded-md text-sm overflow-auto">
        {`function setup() {
          createCanvas(400, 400);
        }
        
        function draw() {
          clear();
          fill(100, 200, 255);
          ellipse(mouseX, mouseY, 50, 50);
        }`}
                  </pre>
                </div>
              </div>
        
              <p>
                Com <code>background()</code>, o fundo é redesenhado a cada frame. Já com <code>clear()</code>, o canvas é apagado, mas a transparência é mantida — isso é útil em composições com camadas ou efeitos visuais mais complexos.
              </p>
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Criando Paletas de Cores",
          description: (
            <p>
              Paletas ajudam a manter a estética do sketch consistente. Você pode armazená-las em arrays:
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
{`const paleta = [
  color(255, 204, 0),
  color(0, 102, 204),
  color(255, 51, 153)
];

fill(paleta[1]);
rect(50, 50, 100, 100);`}
              </pre>
              Isso facilita alterações de tema ou aplicação aleatória de cores em elementos.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Trabalhando com Fonts e Textos",
          description: (
            <p>
              Você pode personalizar textos usando funções como:
              <ul className="list-disc list-inside mt-2">
                <li><code>textSize(tamanho)</code> – define o tamanho da fonte.</li>
                <li><code>textFont(fonte)</code> – aplica uma fonte personalizada.</li>
                <li><code>textAlign(horiz, vert)</code> – alinha o texto.</li>
              </ul>
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
{`textSize(32);
textAlign(CENTER, CENTER);
text("Olá, p5!", width / 2, height / 2);`}
              </pre>
              Lembre-se de carregar fontes externas com <code>loadFont()</code> no <code>preload()</code>.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Estilização Dinâmica com Variáveis",
          description: (
            <p>
              As propriedades visuais podem mudar com base em variáveis e interação:
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
{`let tamanho = 50;

function draw() {
  tamanho = map(mouseX, 0, width, 10, 200);
  fill(100, 200, 255);
  ellipse(width/2, height/2, tamanho, tamanho);
}`}
              </pre>
              Isso cria uma experiência responsiva, importante para interações visuais.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Animações e Controle de FrameRate",
          description: (
            <p>
              Você pode ajustar a velocidade de atualização do sketch com <code>frameRate()</code>:
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
{`function setup() {
  createCanvas(400, 400);
  frameRate(30); // 30 FPS
}`}
              </pre>
              Use a variável <code>frameCount</code> para criar animações com base no tempo.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "programming/introduction_p5",
      }}
      goFoward={{
        text: "Próximo",
        link: "programming/styles",
      }}
    />
  );
}