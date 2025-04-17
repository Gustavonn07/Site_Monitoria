import { PageItemsType } from "../../@types";
import { PageBuilder } from "../../components/containers/PageBuilder";

export const ProgrammingFundamentals = () => {
  return (
    <PageBuilder
      head={{
        title: "Fundamentos do JavaScript",
        description:
          "Explore os fundamentos do JavaScript, incluindo tipos de dados, variáveis, estruturas de controle e funções.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "Declaração de Variáveis",
          description: (
            <div>
              <p>
                JavaScript permite criar variáveis usando <code>var</code>, <code>let</code> e <code>const</code>. Cada uma tem suas particularidades e deve ser usada conforme o contexto:
              </p>
              <ul className="list-disc list-inside mt-3">
                <li><strong>var</strong>: tem escopo de função e é içada (hoisted). Evite seu uso em novos códigos.</li>
                <li><strong>let</strong>: possui escopo de bloco. Ideal para variáveis que podem mudar.</li>
                <li><strong>const</strong>: também tem escopo de bloco. Use quando o valor não será reatribuído.</li>
              </ul>
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
{`var nome = "Lucas";
let idade = 30;
const ativo = true;

console.log(nome, idade, ativo);`}
              </pre>
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Operadores",
          description: (
            <div>
              <p>
                JavaScript possui diversos operadores que ajudam a manipular valores e controlar a lógica do código:
              </p>
              <ul className="list-disc list-inside mt-3">
                <li><strong>Aritméticos:</strong> +, -, *, /</li>
                <li><strong>Comparação:</strong> ==, ===, !=, !==, &gt;, &lt;</li>
                <li><strong>Lógicos:</strong> &&, ||, !</li>
              </ul>
              <p className="mt-3">
                Saber como combiná-los é essencial para construir expressões e condições mais avançadas.
              </p>
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
{`let a = 10;
let b = 5;

console.log(a + b);      // 15
console.log(a > b);      // true
console.log(a === 10);   // true
console.log(a !== b);    // true
console.log(a > 5 && b < 10); // true`}
              </pre>
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Estruturas de Controle",
          description: (
            <div>
              <p>
                As estruturas de controle definem o fluxo da aplicação. Com elas, você pode tomar decisões e repetir ações:
              </p>
              <ul className="list-disc list-inside mt-3">
                <li><code>if / else</code>: executa blocos de código com base em condições.</li>
                <li><code>for</code>: laço com controle por contador.</li>
                <li><code>while</code>: laço que continua enquanto a condição for verdadeira.</li>
              </ul>
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
{`let hora = 14;

if (hora < 12) {
  console.log("Bom dia");
} else if (hora < 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}

for (let i = 0; i < 3; i++) {
  console.log("Contando:", i);
}`}
              </pre>
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Funções e Arrow Functions",
          description: (
            <div>
              <p>
                Funções encapsulam lógica reutilizável. As arrow functions tornam a sintaxe mais enxuta, especialmente para funções curtas:
              </p>
              <p className="mt-3">
                Além disso, arrow functions não criam seu próprio <code>this</code>, o que é útil em métodos ou callbacks.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
                <div>
                  <p className="mt-3 font-semibold">Função tradicional:</p>
                  <pre className="bg-gray-100 p-2 rounded-md text-sm overflow-auto">
{`function saudacao(nome) {
  return \`Olá, \${nome}\`;
}

console.log(saudacao("Lucas")); // Olá, Lucas`}
                  </pre>
                </div>
                <div>
                  <p className="mt-3 font-semibold">Arrow Function:</p>
                  <pre className="bg-gray-100 p-2 rounded-md text-sm overflow-auto">
{`const dobro = (x) => x * 2;
console.log(dobro(4)); // 8`}
                  </pre>
                </div>
              </div>
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Objetos e Arrays",
          description: (
            <div>
              <p>
                Objetos e arrays permitem organizar e manipular coleções de dados de forma eficiente:
              </p>
              <ul className="list-disc list-inside mt-3">
                <li><strong>Objetos:</strong> estruturas com pares chave-valor.</li>
                <li><strong>Arrays:</strong> listas ordenadas de elementos acessados por índice.</li>
              </ul>
              <p className="mt-3">
                Eles são base para trabalhar com dados no dia a dia da programação.
              </p>
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
{`const pessoa = {
  nome: "Maria",
  idade: 25,
  falar: function () {
    console.log(\`Oi, sou \${this.nome}\`);
  }
};

const frutas = ["maçã", "banana", "uva"];

pessoa.falar(); // Oi, sou Maria
console.log(frutas[1]); // banana`}
              </pre>
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Escopo e Hoisting",
          description: (
            <div>
              <p>
                O <strong>escopo</strong> define onde uma variável é acessível. O <strong>hoisting</strong> é o comportamento de mover declarações para o topo do escopo:
              </p>
              <ul className="list-disc list-inside mt-3">
                <li><code>var</code> é içado e pode causar comportamentos inesperados.</li>
                <li><code>let</code> e <code>const</code> respeitam o bloco onde foram declaradas e não são acessadas antes da declaração.</li>
              </ul>
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
{`function exemplo() {
  console.log(x); // undefined
  var x = 10;
}
exemplo();`}
              </pre>
              <p className="mt-4">
                <code>let</code> e <code>const</code> não sofrem hoisting da mesma forma:
              </p>
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
{`if (true) {
  let local = "bloco";
  console.log(local); // bloco
}
// console.log(local); // Erro`}
              </pre>
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Módulos ES6",
          description: (
            <div>
              <p>
                Com ES6, JavaScript passou a suportar <strong>módulos</strong>, permitindo separar responsabilidades entre arquivos:
              </p>
              <ul className="list-disc list-inside mt-3">
                <li><code>export</code>: define o que será compartilhado com outros arquivos.</li>
                <li><code>import</code>: traz funções, objetos ou valores de outro módulo.</li>
              </ul>
              <p className="mt-3">
                Isso melhora a organização do código e facilita a manutenção de projetos maiores.
              </p>
              <pre className="bg-gray-100 p-2 rounded-md text-sm overflow-auto">
{`// soma.js
export function soma(a, b) {
  return a + b;
}`}
              </pre>
              <pre className="bg-gray-100 p-2 rounded-md text-sm overflow-auto">
{`// main.js
import { soma } from './soma.js';

console.log(soma(2, 3)); // 5`}
              </pre>
              <p className="mt-4">
                Para funcionar no navegador, use a tag <code>{`<script type="module">`}</code> no seu index.html
              </p>
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
      ]}
      bibliography={[
        {
          title: "Guia de JavaScript",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
          text: "Referência oficial para aprender JavaScript.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "programming/introduction_p5",
      }}
      goFoward={{
        text: "Próximo",
        link: "programming/structure_p5",
      }}
    />
  );
};
