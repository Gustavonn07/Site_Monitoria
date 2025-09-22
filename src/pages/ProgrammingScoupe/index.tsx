import { PageItemsType } from "../../@types";
import { PageBuilder } from "../../components/containers/PageBuilder";

export const ScopePage = () => {
  return (
    <PageBuilder
      head={{
        title: "Escopo de Variáveis e Closures",
        description:
          "O escopo determina onde variáveis e funções podem ser acessadas no código. Além disso, closures permitem que funções acessem variáveis de escopos externos mesmo após o escopo externo ter sido finalizado.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "Escopo Global",
          description: (
            <p>
              Variáveis declaradas fora de funções ou blocos podem ser acessadas
              em qualquer parte do código.
            </p>
          ),
          sectionProps: {
            hasSeparatorSection: true,
          },
        },
        {
          type: PageItemsType.SECTION,
          title: "Escopo Local (Função)",
          description: (
            <p>
              Variáveis declaradas dentro de uma função só existem dentro dela.
              Não podem ser acessadas fora.
            </p>
          ),
        },
        {
          type: PageItemsType.SECTION,
          title: "Escopo de Bloco",
          description: (
            <p>
              Variáveis criadas com <code>let</code> ou <code>const</code> só
              existem dentro do bloco <code>{`{ }`}</code> onde foram
              declaradas.
            </p>
          ),
        },
        {
          type: PageItemsType.SECTION,
          title: "Exemplo Prático",
          description: (
            <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`let globalVar = "Sou global";

function exemplo() {
  let localVar = "Sou local";
  if (true) {
    let blockVar = "Sou de bloco";
    console.log(globalVar); // ✅ acessível
    console.log(localVar);  // ✅ acessível
    console.log(blockVar);  // ✅ acessível
  }
  console.log(blockVar);    // ❌ erro
}

exemplo();`}
            </pre>
          ),
          sectionProps: {
            hasSeparatorSection: true,
          },
        },
        {
          type: PageItemsType.SECTION,
          title: "Closures",
          description: (
            <>
              <p>
                Uma <strong>closure</strong> ocorre quando uma função "lembra" 
                do escopo em que foi criada, mesmo após o escopo externo ter sido finalizado.
              </p>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`function contador() {
  let count = 0; // variável privada

  return function () {
    count += 1;
    return count;
  };
}

const meuContador = contador();

console.log(meuContador()); // 1
console.log(meuContador()); // 2
console.log(meuContador()); // 3
`}
              </pre>
              <p>
                Closures são úteis para criar funções com estado privado, 
                gerar funções dinâmicas e implementar padrões como o módulo.
              </p>
            </>
          ),
          sectionProps: {
            hasSeparatorSection: true,
          },
        },
      ]}
      bibliography={[
        {
          title: "Escopo em JavaScript (MDN)",
          text: "Explicação completa sobre escopo global, local e de bloco.",
          link: "https://developer.mozilla.org/pt-BR/docs/Glossary/Scope",
        },
        {
          title: "Closures em JavaScript (MDN)",
          text: "Guia detalhado sobre closures e exemplos práticos.",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "programming/functions_params",
      }}
      goFoward={{
        text: "Próximo",
        link: "programming/functions_constructor",
      }}
    />
  );
};
