import { PageItemsType } from "../../@types";
import { PageBuilder } from "../../components/containers/PageBuilder";

export const RecursiveFunctionsPage = () => {
  return (
    <PageBuilder
      head={{
        title: "Funções Recursivas",
        description:
          "Funções recursivas são aquelas que chamam a si mesmas, permitindo resolver problemas que podem ser divididos em subproblemas menores.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "O que é recursão?",
          description: (
            <p>
              Recursão é a técnica em que uma função se chama a si mesma. Cada chamada deve aproximar-se de um <em>caso base</em> para evitar loops infinitos.
            </p>
          ),
          sectionProps: {
            hasSeparatorSection: true,
          },
        },
        {
          type: PageItemsType.SECTION,
          title: "Exemplo básico: contagem regressiva",
          description: (
            <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`function contagemRegressiva(n) {
  if (n <= 0) return;
  console.log(n);
  contagemRegressiva(n - 1);
}

contagemRegressiva(5);
// Saída: 5 4 3 2 1`}
            </pre>
          ),
        },
        {
          type: PageItemsType.SECTION,
          title: "Exemplo clássico: Fatorial",
          description: (
            <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`function fatorial(n) {
  if (n <= 1) return 1;
  return n * fatorial(n - 1);
}

console.log(fatorial(5)); // Saída: 120`}
            </pre>
          ),
          sectionProps: {
            hasSeparatorSection: true,
          },
        },
        {
          type: PageItemsType.INFO,
          title: "Dicas para funções recursivas",
          description: (
            <ul className="list-disc list-inside mt-2">
              <li>Sempre defina um <strong>caso base</strong> que encerre a recursão.</li>
              <li>Evite recursão profunda em problemas grandes sem otimização, pois pode causar <strong>stack overflow</strong>.</li>
              <li>Use memoization quando possível para melhorar desempenho em cálculos repetitivos.</li>
            </ul>
          ),
        },
        {
          type: PageItemsType.SECTION,
          title: "Aplicações comuns",
          description: (
            <p>
              Funções recursivas são muito usadas em:
              <ul className="list-disc list-inside mt-2">
                <li>Algoritmos de busca e ordenação (como QuickSort e MergeSort)</li>
                <li>Manipulação de estruturas de dados hierárquicas (árvores, grafos)</li>
                <li>Problemas matemáticos como fatorial, Fibonacci, Torres de Hanoi</li>
              </ul>
            </p>
          ),
          sectionProps: {
            hasSeparatorSection: true,
          },
        },
      ]}
      bibliography={[
        {
          title: "MDN - Recursion",
          link: "https://developer.mozilla.org/en-US/docs/Glossary/Recursion",
          text: "Guia oficial sobre recursão em JavaScript.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "programming/functions_generators",
      }}
      goFoward={{
        text: "Próximo",
        link: "",
      }}
    />
  );
};
