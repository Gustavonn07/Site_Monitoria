import { PageItemsType } from "../../@types";
import { PageBuilder } from "../../components/containers/PageBuilder";

export const ConstructorFunctionsPage = () => {
  return (
    <PageBuilder
      head={{
        title: "Funções Construtoras",
        description:
          "Funções construtoras em JavaScript permitem criar múltiplos objetos com a mesma estrutura, funcionando como 'molde' para instâncias.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "O que são funções construtoras?",
          description: (
            <p>
              Funções construtoras são usadas para criar objetos de forma
              consistente. Elas funcionam como um molde, permitindo criar
              várias instâncias com propriedades e métodos semelhantes.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Sintaxe básica",
          description: (
            <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.apresentar = function() {
    console.log(\`Olá, meu nome é \${this.nome} e tenho \${this.idade} anos.\`);
  };
}

const pessoa1 = new Pessoa("Ana", 25);
pessoa1.apresentar(); // Olá, meu nome é Ana e tenho 25 anos.`}
            </pre>
          ),
        },
        {
          type: PageItemsType.SECTION,
          title: "Usando o prototype",
          description: (
            <p>
              Para métodos compartilhados entre todas as instâncias, usamos o{" "}
              <code>prototype</code>:
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

// Adicionando método ao prototype
Pessoa.prototype.apresentar = function() {
  console.log(\`Olá, meu nome é \${this.nome} e tenho \${this.idade} anos.\`);
};

const pessoa1 = new Pessoa("Ana", 25);
const pessoa2 = new Pessoa("João", 30);

pessoa1.apresentar(); // Olá, meu nome é Ana e tenho 25 anos.
pessoa2.apresentar(); // Olá, meu nome é João e tenho 30 anos.`}
              </pre>
              Dessa forma, todas as instâncias compartilham o mesmo método, economizando memória.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.INFO,
          title: "Resumo",
          description: (
            <p>
              Funções construtoras ajudam a criar objetos consistentes e
              reutilizáveis. Para métodos que serão compartilhados, use o{" "}
              <code>prototype</code> para otimizar memória e manter o código
              limpo.
            </p>
          ),
        },
      ]}
      bibliography={[
        {
          title: "MDN - Constructor & Prototype",
          link: "https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Object_prototypes",
          text: "Guia sobre protótipos e funções construtoras.",
        },
        {
          title: "JavaScript.info - Constructors",
          link: "https://javascript.info/constructor-new",
          text: "Explicação detalhada sobre construtores e instâncias.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "programming/functions_scope_closure",
      }}
      goFoward={{
        text: "Próximo",
        link: "programming/functions_generators",
      }}
    />
  );
};
