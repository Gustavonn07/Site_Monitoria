import { PageItemsType } from "../../@types";
import { PageBuilder } from "../../components/containers/PageBuilder";

export const FunctionsParams = () => {
  return (
    <PageBuilder
      head={{
        title: "Parâmetros e Retorno",
        description:
          "Aprenda como passar informações para funções e como retornar valores para reutilizar os resultados.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "Parâmetros",
          description: (
            <p>
              <strong>Parâmetros</strong> permitem que funções recebam valores
              externos, tornando-as mais flexíveis:
              <pre className="bg-gray-100 my-5 p-2 rounded-md text-sm overflow-auto">
                {`function saudar(nome) {
  console.log("Olá, " + nome + "!");
}

saudar("Ana"); // saída: Olá, Ana!
saudar("Carlos"); // saída: Olá, Carlos!`}
              </pre>
              Neste exemplo, o parâmetro <code>nome</code> é substituído pelos
              valores passados ao chamar a função.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Múltiplos parâmetros",
          description: (
            <p>
              Uma função pode receber vários parâmetros:
              <pre className="bg-gray-100 my-5 p-2 rounded-md text-sm overflow-auto">
                {`function soma(a, b) {
  console.log(a + b);
}

soma(3, 4); // saída: 7
soma(10, 5); // saída: 15`}
              </pre>
              Aqui, <code>a</code> e <code>b</code> são somados e exibidos no
              console.
            </p>
          ),
          sectionProps: { hasSeparatorSection: false },
        },
        {
          type: PageItemsType.SECTION,
          title: "Retorno de valores",
          description: (
            <p>
              Usamos a palavra-chave <code>return</code> para devolver valores
              de uma função:
              <pre className="bg-gray-100 my-5 p-2 rounded-md text-sm overflow-auto">
                {`function soma(a, b) {
  return a + b;
}

const resultado = soma(5, 7);
console.log(resultado); // saída: 12`}
              </pre>
              O valor retornado pode ser armazenado em uma variável ou usado em
              outra expressão.
            </p>
          ),
          sectionProps: { hasSeparatorSection: false },
        },
        {
          type: PageItemsType.SECTION,
          title: "Retorno implícito em Arrow Functions",
          description: (
            <p>
              Arrow functions permitem um retorno direto quando o corpo é uma
              única expressão:
              <pre className="bg-gray-100 my-5 p-2 rounded-md text-sm overflow-auto">
                {`const multiplicar = (x, y) => x * y;

console.log(multiplicar(3, 4)); // saída: 12`}
              </pre>
              Nesse caso, não precisamos escrever <code>return</code>.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.INFO,
          title: "Resumo",
          description: (
            <p>
              Parâmetros tornam funções reutilizáveis em diferentes contextos, e
              o retorno permite trabalhar com os resultados. Esses conceitos são
              a base para criar funções realmente úteis e versáteis.
            </p>
          ),
        },
      ]}
      bibliography={[
        {
          title: "MDN - Parâmetros",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions#par%C3%A2metros",
          text: "Detalhes sobre parâmetros em funções JavaScript.",
        },
        {
          title: "JavaScript.info - Retorno",
          link: "https://javascript.info/function-basics#returning-a-value",
          text: "Explicação prática sobre retorno de valores.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "programming/functions_intro",
      }}
      goFoward={{
        text: "Próximo",
        link: "programming/functions_scope_closure",
      }}
    />
  );
};
