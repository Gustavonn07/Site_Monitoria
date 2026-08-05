import { PageItemsType } from "../../@types";
import { PageBuilder } from "../../components/containers/PageBuilder";
import { CodeBlock } from "../../components/common";

export const ProgrammingArrayMethods = () => {
  return (
    <PageBuilder
      head={{
        title: "Métodos de Array e Desestruturação",
        description:
          "Domine os métodos funcionais mais usados em arrays (map, filter, reduce) e a sintaxe de desestruturação.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "forEach: Percorrendo um Array",
          description: (
            <CodeBlock
              language="javascript"
              code={`const numeros = [1, 2, 3, 4];

numeros.forEach((numero, indice) => {
  console.log(\`Posição \${indice}: \${numero}\`);
});`}
            />
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "map: Transformando Cada Elemento",
          description: (
            <CodeBlock
              language="javascript"
              code={`const numeros = [1, 2, 3, 4];

const dobrados = numeros.map((numero) => numero * 2);
console.log(dobrados); // [2, 4, 6, 8]

// map SEMPRE retorna um novo array, do mesmo tamanho`}
            />
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "filter: Selecionando Elementos",
          description: (
            <CodeBlock
              language="javascript"
              code={`const idades = [12, 18, 25, 15, 30];

const maioresDeIdade = idades.filter((idade) => idade >= 18);
console.log(maioresDeIdade); // [18, 25, 30]`}
            />
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "reduce: Reduzindo a um Único Valor",
          description: (
            <CodeBlock
              language="javascript"
              code={`const precos = [10, 25, 30];

const total = precos.reduce((acumulador, precoAtual) => {
  return acumulador + precoAtual;
}, 0); // 0 é o valor inicial do acumulador

console.log(total); // 65`}
            />
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "find e sort",
          description: (
            <CodeBlock
              language="javascript"
              code={`const usuarios = [
  { nome: "Ana", idade: 22 },
  { nome: "Bruno", idade: 30 },
];

const encontrado = usuarios.find((u) => u.nome === "Bruno");
console.log(encontrado); // { nome: "Bruno", idade: 30 }

const ordenados = [5, 2, 8, 1].sort((a, b) => a - b);
console.log(ordenados); // [1, 2, 5, 8]`}
            />
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Desestruturação de Arrays",
          description: (
            <div>
              <p>
                A desestruturação permite extrair valores de um array
                diretamente para variáveis, de forma mais concisa:
              </p>
              <CodeBlock
                language="javascript"
                code={`const coordenadas = [10, 20, 30];

const [x, y, z] = coordenadas;
console.log(x, y, z); // 10 20 30

// Pulando posições
const [primeiro, , terceiro] = coordenadas;

// Com valor padrão
const [a = 0, b = 0] = [5];
console.log(a, b); // 5 0

// Trocando valores sem variável auxiliar
let m = 1, n = 2;
[m, n] = [n, m];
console.log(m, n); // 2 1

// Rest: capturando o restante
const [primeiroItem, ...resto] = [1, 2, 3, 4];
console.log(resto); // [2, 3, 4]`}
              />
            </div>
          ),
          sectionProps: { hasSeparatorSection: false },
        },
        {
          type: PageItemsType.INFO,
          title: "map/filter/reduce não alteram o array original",
          description: (
            <p>
              Esses métodos são <strong>imutáveis</strong>: sempre retornam
              um novo array ou valor, sem modificar o array original. Isso
              torna o código mais previsível e é a base da programação
              funcional em JavaScript.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.QUIZ,
          title: "Quiz rápido",
          question:
            "Qual método é ideal para transformar um array de números em um array com o dobro de cada valor?",
          options: [
            { option: "array.filter()", isCorrect: false },
            { option: "array.map()", isCorrect: true },
            { option: "array.reduce()", isCorrect: false },
          ],
        },
      ]}
      bibliography={[
        {
          title: "Array.prototype.map() - MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
          text: "Documentação detalhada do método map.",
        },
        {
          title: "Desestruturação - MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment",
          text: "Guia completo sobre desestruturação em JavaScript.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "programming/arrays",
      }}
      goFoward={{
        text: "Próximo",
        link: "programming/strings",
      }}
    />
  );
};
