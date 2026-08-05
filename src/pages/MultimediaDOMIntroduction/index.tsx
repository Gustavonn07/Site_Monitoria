import { PageBuilder } from "../../components/containers/PageBuilder";
import { CodeBlock } from "../../components/common";
import { PageItemsType } from "../../@types";

export const MultimediaDOMIntroduction = () => {
  return (
    <PageBuilder
      head={{
        title: "Introdução ao DOM",
        description:
          "Entenda o que é o DOM (Document Object Model) e como ele conecta o HTML da sua página ao JavaScript.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "O que é o DOM?",
          description: (
            <p>
              O <strong>DOM (Document Object Model)</strong> é a
              representação da página HTML em forma de{" "}
              <strong>árvore de objetos</strong> que o JavaScript pode ler e
              modificar. Quando o navegador carrega uma página, ele
              transforma o HTML em uma estrutura de nós que pode ser
              acessada e alterada dinamicamente, sem precisar recarregar a
              página.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "A Árvore do DOM",
          description: (
            <div>
              <p>Um HTML simples como este:</p>
              <CodeBlock
                language="html"
                code={`<html>
  <body>
    <h1>Título</h1>
    <p>Um parágrafo</p>
  </body>
</html>`}
              />
              <p className="mt-3">
                É representado internamente como esta árvore de nós:
              </p>
              <div className="mt-3 font-mono text-sm bg-primary-100 p-4 rounded-lg">
                <div>document</div>
                <div className="ml-4">└─ html</div>
                <div className="ml-8">└─ body</div>
                <div className="ml-12">├─ h1 ("Título")</div>
                <div className="ml-12">└─ p ("Um parágrafo")</div>
              </div>
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Selecionando Elementos",
          description: (
            <div>
              <p>
                O objeto global <code>document</code> é o ponto de entrada
                para acessar o DOM. Os métodos mais usados para selecionar
                elementos são:
              </p>
              <ul className="list-disc list-inside space-y-1 my-2">
                <li><code>document.getElementById("id")</code></li>
                <li><code>document.querySelector("seletor-css")</code>: retorna o primeiro elemento encontrado.</li>
                <li><code>document.querySelectorAll("seletor-css")</code>: retorna todos os elementos, como uma NodeList.</li>
                <li><code>document.getElementsByClassName("classe")</code></li>
              </ul>
              <CodeBlock
                language="javascript"
                code={`const titulo = document.getElementById("titulo-principal");
const primeiroParagrafo = document.querySelector("p");
const todosOsCards = document.querySelectorAll(".card");
const botoes = document.getElementsByClassName("btn");

console.log(titulo.textContent); // acessa o texto do elemento`}
              />
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.INFO,
          title: "querySelector vs getElementById",
          description: (
            <p>
              <code>getElementById</code> é mais rápido, mas só busca por
              id. <code>querySelector</code> aceita qualquer seletor CSS
              (classe, tag, atributo, combinações), sendo muito mais
              flexível — por isso é o mais usado no dia a dia.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.QUIZ,
          title: "Quiz rápido",
          question:
            "Qual método retorna TODOS os elementos que combinam com um seletor CSS?",
          options: [
            { option: "document.getElementById()", isCorrect: false },
            { option: "document.querySelector()", isCorrect: false },
            { option: "document.querySelectorAll()", isCorrect: true },
          ],
        },
      ]}
      bibliography={[
        {
          title: "Introdução ao DOM - MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction",
          text: "Explicação oficial sobre a árvore do DOM.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "multimedia/audio_video",
      }}
      goFoward={{
        text: "Próximo",
        link: "multimedia/dom_manipulation",
      }}
    />
  );
};
