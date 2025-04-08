import { PageItemsType } from "../../@types";
import { PageBuilder } from "../../components/containers/PageBuilder";

export const ProgrammingFunctions = () => {
  return (
    <PageBuilder
      head={{
        title: "Organização e Funções no p5.js",
        description:
          "Aprenda como organizar seu código no p5.js criando funções reutilizáveis e separando responsabilidades.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "Por que organizar o código?",
          description: (
            <p>
              À medida que sketches crescem, torna-se essencial dividir o código
              em partes reutilizáveis. Funções ajudam a evitar repetições e
              facilitam manutenção.
              <ul className="list-disc list-inside mt-2">
                <li>Melhora a leitura e entendimento.</li>
                <li>Evita código duplicado.</li>
                <li>Facilita testes e depuração.</li>
              </ul>
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Criando Funções Personalizadas",
          description: (
            <p>
              Você pode criar funções para qualquer tarefa repetitiva:
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                {`function desenharAlvo(x, y) {
  fill("red");
  ellipse(x, y, 50);
  fill("white");
  ellipse(x, y, 25);
}

function draw() {
  background(220);
  desenharAlvo(100, 100);
  desenharAlvo(200, 150);
}`}
              </pre>
              Isso deixa o código mais limpo e flexível.
            </p>
          ),
          sectionProps: { hasSeparatorSection: false },
        },
        {
          type: PageItemsType.INFO,
          title: "Dica: Nomeie funções com verbos",
          description: (
            <p>
              Uma boa prática é usar verbos para funções, indicando ação:
              <ul className="list-disc list-inside mt-2">
                <li>
                  <code>desenharCirculo()</code>, <code>moverBola()</code>,
                  <code>gerarCorAleatoria()</code>.
                </li>
              </ul>
              Isso ajuda a entender o propósito rapidamente.
            </p>
          ),
        },
        {
          type: PageItemsType.SECTION,
          title: "Separando em Arquivos (Sketch Modular)",
          description: (
            <p>
              Em projetos maiores, é comum separar funções e partes do sketch em
              arquivos distintos. Exemplo:
              <ul className="list-disc list-inside mt-2">
                <li>
                  <code>main.js</code> – setup e draw
                </li>
                <li>
                  <code>utils.js</code> – funções auxiliares
                </li>
              </ul>
              No HTML:
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                {`<script src="utils.js"></script>
<script src="main.js"></script>`}
              </pre>
              Isso exige que os arquivos estejam na mesma pasta (ou bem
              referenciados).
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
      ]}
      bibliography={[
        {
          title: "p5.js Reference – Functions",
          link: "https://p5js.org/reference/#group-Structure",
          text: "Referência sobre estrutura de código, funções setup e draw.",
          hasSeparator: true,
        },
        {
          title: "JavaScript MDN – Functions",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions",
          text: "Guia geral sobre criação e uso de funções em JavaScript.",
          hasSeparator: true,
        },
        {
          title: "The Coding Train – Functions in p5.js",
          link: "https://www.youtube.com/watch?v=wRHAitGzBrg",
          text: "Explicação visual e prática sobre funções no p5.js.",
          hasSeparator: false,
        },
      ]}
      goBack={{
        link: 'programming/interactive',
        text: 'Voltar'
      }}
      goFoward={{
        link: 'programming/sound_and_images',
        text: 'Próximo'
      }}
    />
  );
};
