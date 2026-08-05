import { PageItemsType } from "../../@types";
import { PageBuilder } from "../../components/containers/PageBuilder";
import { CodeBlock } from "../../components/common";

export const ProgrammingArrays = () => {
  return (
    <PageBuilder
      head={{
        title: "Arrays em JavaScript",
        description:
          "Aprenda a criar, acessar e modificar arrays, a estrutura de dados fundamental para guardar coleções de valores.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "O que é um Array?",
          description: (
            <p>
              Um array é uma <strong>lista ordenada</strong> de valores,
              que podem ser de qualquer tipo (números, strings, objetos, ou
              até outros arrays). Cada valor ocupa uma posição, chamada de{" "}
              <strong>índice</strong>, começando sempre em <code>0</code>.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Criando e Acessando Arrays",
          description: (
            <CodeBlock
              language="javascript"
              code={`const frutas = ["maçã", "banana", "laranja"];

console.log(frutas[0]); // "maçã"
console.log(frutas[2]); // "laranja"
console.log(frutas.length); // 3

frutas[1] = "morango"; // altera um valor existente
frutas[3] = "uva"; // adiciona um novo valor no índice 3`}
            />
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Adicionando e Removendo Elementos",
          description: (
            <CodeBlock
              language="javascript"
              code={`const numeros = [1, 2, 3];

numeros.push(4);      // adiciona no final -> [1, 2, 3, 4]
numeros.unshift(0);   // adiciona no início -> [0, 1, 2, 3, 4]

numeros.pop();        // remove o último -> [0, 1, 2, 3]
numeros.shift();      // remove o primeiro -> [1, 2, 3]

numeros.splice(1, 1); // remove 1 item a partir do índice 1 -> [1, 3]
numeros.splice(1, 0, 2); // insere 2 no índice 1, sem remover -> [1, 2, 3]`}
            />
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Verificando e Buscando",
          description: (
            <CodeBlock
              language="javascript"
              code={`const cores = ["vermelho", "verde", "azul"];

Array.isArray(cores);        // true
cores.includes("verde");     // true
cores.indexOf("azul");       // 2
cores.indexOf("rosa");       // -1 (não encontrado)`}
            />
          ),
          sectionProps: { hasSeparatorSection: false },
        },
        {
          type: PageItemsType.INFO,
          title: "Arrays são Objetos",
          description: (
            <p>
              Em JavaScript, arrays são um tipo especial de{" "}
              <code>object</code>. Por isso, ao passar um array para uma
              função, ele é passado <strong>por referência</strong>: alterar
              o array dentro da função também altera o original.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.QUIZ,
          title: "Quiz rápido",
          question:
            "Qual método adiciona um elemento ao final de um array?",
          options: [
            { option: "array.unshift()", isCorrect: false },
            { option: "array.push()", isCorrect: true },
            { option: "array.pop()", isCorrect: false },
          ],
        },
      ]}
      bibliography={[
        {
          title: "Array - MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array",
          text: "Referência completa do objeto Array em JavaScript.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "programming/functions_recursion",
      }}
      goFoward={{
        text: "Próximo",
        link: "programming/array_methods",
      }}
    />
  );
};
