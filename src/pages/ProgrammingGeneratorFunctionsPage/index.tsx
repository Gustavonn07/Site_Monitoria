import { PageItemsType } from "../../@types";
import { PageBuilder } from "../../components/containers/PageBuilder";

export const GeneratorFunctionsPage = () => {
  return (
    <PageBuilder
      head={{
        title: "Funções Geradoras",
        description:
          "Funções geradoras em JavaScript permitem pausar e retomar a execução, retornando múltiplos valores ao longo do tempo.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "O que são funções geradoras?",
          description: (
            <p>
              Funções geradoras usam a palavra-chave <code>function*</code> e permitem
              que a execução seja pausada com <code>yield</code>. Isso possibilita 
              produzir múltiplos valores ao longo do tempo sem criar arrays completos.
            </p>
          ),
          sectionProps: {
            hasSeparatorSection: true,
          },
        },
        {
          type: PageItemsType.SECTION,
          title: "Sintaxe básica",
          description: (
            <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`function* contador() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = contador();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }`}
            </pre>
          ),
        },
        {
          type: PageItemsType.SECTION,
          title: "Iterando sobre geradores",
          description: (
            <p>
              Você pode usar loops como <code>for...of</code> para iterar diretamente sobre
              os valores de uma função geradora:
            </p>
          ),
        },
        {
          type: PageItemsType.SECTION,
          title: "Exemplo prático com for...of",
          description: (
            <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`function* sequencia(max) {
  for (let i = 1; i <= max; i++) {
    yield i;
  }
}

for (const num of sequencia(5)) {
  console.log(num);
}
// Saída: 1 2 3 4 5`}
            </pre>
          ),
          sectionProps: {
            hasSeparatorSection: true,
          },
        },
        {
          type: PageItemsType.SECTION,
          title: "Quando usar funções geradoras?",
          description: (
            <p>
              Funções geradoras são úteis quando você precisa:
              <ul className="list-disc list-inside mt-2">
                <li>Produzir sequências grandes ou infinitas sem alocar memória para todos os elementos.</li>
                <li>Pausar e retomar tarefas assíncronas (em combinação com <code>async</code> e <code>await</code>).</li>
                <li>Implementar streams de dados ou pipelines.</li>
              </ul>
            </p>
          ),
        },
      ]}
      bibliography={[
        {
          title: "MDN - Generator Functions",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*",
          text: "Referência oficial sobre funções geradoras.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "programming/functions_constructor",
      }}
      goFoward={{
        text: "Próximo",
        link: "programming/functions_recursion",
      }}
    />
  );
};
