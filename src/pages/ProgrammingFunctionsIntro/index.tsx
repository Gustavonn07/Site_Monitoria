import { PageItemsType } from "../../@types";
import { PageBuilder } from "../../components/containers/PageBuilder";

export const FunctionsIntro = () => {
  return (
    <PageBuilder
      head={{
        title: "Introdução às Funções",
        description:
          "Entenda o que são funções em JavaScript, como declará-las e por que são tão importantes no desenvolvimento.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "O que são funções?",
          description: (
            <p>
              <strong>Funções</strong> são blocos de código que podem ser
              reutilizados sempre que necessário. Elas recebem entradas (opcionais),
              processam e podem retornar um resultado. Isso ajuda a{" "}
              <em>organizar</em>, <em>reutilizar</em> e <em>modularizar</em> o código.
            </p>
          ),
          sectionProps: {
            hasSeparatorSection: true,
          },
        },
        {
          type: PageItemsType.SECTION,
          title: "Declaração de função",
          description: (
            <p>
              A forma mais comum de criar funções é usando a palavra-chave{" "}
              <code>function</code>:
              <pre className="bg-gray-100 my-5 p-2 rounded-md text-sm overflow-auto">
                {`function saudacao() {
  console.log("Olá, mundo!");
}

saudacao(); // saída: Olá, mundo!`}
              </pre>
              Neste exemplo, definimos uma função chamada{" "}
              <code>saudacao</code> que imprime uma mensagem no console.
            </p>
          ),
          sectionProps: {
            hasSeparatorSection: false,
          },
        },
        {
          type: PageItemsType.SECTION,
          title: "Funções anônimas e atribuídas",
          description: (
            <p>
              Funções também podem ser atribuídas a variáveis. Isso é útil em
              programação funcional e callbacks:
              <pre className="bg-gray-100 my-5 p-2 rounded-md text-sm overflow-auto">
                {`const soma = function (a, b) {
  return a + b;
};

console.log(soma(2, 3)); // saída: 5`}
              </pre>
              Aqui criamos uma função anônima que soma dois números e a
              atribuimos à constante <code>soma</code>.
            </p>
          ),
          sectionProps: {
            hasSeparatorSection: false,
          },
        },
        {
          type: PageItemsType.SECTION,
          title: "Arrow functions",
          description: (
            <p>
              O ES6 introduziu a sintaxe de <strong>arrow functions</strong>,
              mais curta e moderna:
              <pre className="bg-gray-100 my-5 p-2 rounded-md text-sm overflow-auto">
                {`const multiplicar = (x, y) => x * y;

console.log(multiplicar(4, 5)); // saída: 20`}
              </pre>
              Essa sintaxe é muito usada em funções curtas e callbacks.
            </p>
          ),
          sectionProps: {
            hasSeparatorSection: true,
          },
        },
        {
          type: PageItemsType.INFO,
          title: "Resumo",
          description: (
            <p>
              Funções são a base da programação em JavaScript. Elas permitem
              organizar o código e evitar repetição. Nas próximas seções, vamos
              aprender sobre parâmetros, escopo, closures, geradoras e
              recursividade.
            </p>
          ),
        },
      ]}
      bibliography={[
        {
          title: "MDN - Functions",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions",
          text: "Guia completo sobre funções em JavaScript.",
        },
        {
          title: "JavaScript.info - Functions",
          link: "https://javascript.info/function-basics",
          text: "Explicação prática e exemplos de funções.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "",
      }}
      goFoward={{
        text: "Próximo",
        link: "programming/functions_params",
      }}
    />
  );
};
