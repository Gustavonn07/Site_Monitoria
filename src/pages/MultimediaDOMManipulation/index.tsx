import { PageBuilder } from "../../components/containers/PageBuilder";
import { CodeBlock } from "../../components/common";
import { PageItemsType } from "../../@types";
import React from "react";

const DOMDemo = () => {
  const [items, setItems] = React.useState(["Estudar HTML", "Estudar CSS"]);
  const [value, setValue] = React.useState("");

  return (
    <div className="border rounded-lg p-4 bg-primary-100">
      <div className="flex gap-2 mb-3">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Nova tarefa"
          className="border rounded px-2 py-1 text-sm flex-1"
        />
        <button
          onClick={() => {
            if (!value.trim()) return;
            setItems((prev) => [...prev, value]);
            setValue("");
          }}
          className="bg-secondary-500 text-white px-3 py-1 rounded text-sm cursor-pointer hover:bg-secondary-700"
        >
          Adicionar
        </button>
      </div>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex justify-between items-center bg-white border rounded px-2 py-1 text-sm"
          >
            {item}
            <button
              onClick={() => setItems((prev) => prev.filter((_, idx) => idx !== i))}
              className="text-destructive cursor-pointer text-xs"
            >
              remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const MultimediaDOMManipulation = () => {
  return (
    <PageBuilder
      head={{
        title: "Manipulando o DOM com JavaScript",
        description:
          "Aprenda a criar, alterar, estilizar e remover elementos da página dinamicamente com JavaScript.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "Alterando Conteúdo e Atributos",
          description: (
            <CodeBlock
              language="javascript"
              code={`const titulo = document.querySelector("h1");

titulo.textContent = "Novo título"; // altera apenas o texto
titulo.innerHTML = "Novo <strong>título</strong>"; // permite HTML

const link = document.querySelector("a");
link.setAttribute("href", "https://exemplo.com");
link.classList.add("ativo");
link.classList.remove("inativo");
link.classList.toggle("destaque");`}
            />
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Alterando Estilos",
          description: (
            <CodeBlock
              language="javascript"
              code={`const caixa = document.querySelector(".caixa");

caixa.style.backgroundColor = "#598392";
caixa.style.padding = "16px";
caixa.style.borderRadius = "8px";`}
            />
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Criando e Removendo Elementos",
          description: (
            <div>
              <CodeBlock
                language="javascript"
                code={`// Criando um novo elemento
const novoItem = document.createElement("li");
novoItem.textContent = "Nova tarefa";

// Adicionando à lista
const lista = document.querySelector("ul");
lista.appendChild(novoItem);

// Removendo um elemento
novoItem.remove();`}
              />
              <p className="mt-3 mb-2 text-sm text-secondary-700">
                Exemplo interativo (React por baixo, mas o conceito de
                adicionar/remover é o mesmo do DOM puro):
              </p>
              <DOMDemo />
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Navegando entre Elementos",
          description: (
            <CodeBlock
              language="javascript"
              code={`const item = document.querySelector("li");

item.parentElement;      // elemento pai
item.children;           // filhos diretos
item.nextElementSibling; // próximo irmão
item.previousElementSibling; // irmão anterior`}
            />
          ),
          sectionProps: { hasSeparatorSection: false },
        },
        {
          type: PageItemsType.INFO,
          title: "textContent vs innerHTML",
          description: (
            <p>
              Prefira <code>textContent</code> quando for inserir apenas
              texto puro — é mais seguro e evita riscos de{" "}
              <strong>XSS</strong> (injeção de código malicioso). Use{" "}
              <code>innerHTML</code> apenas quando realmente precisar
              inserir HTML, e nunca com conteúdo vindo diretamente do
              usuário sem tratamento.
            </p>
          ),
        },
      ]}
      bibliography={[
        {
          title: "Manipulando documentos - MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents",
          text: "Guia prático de manipulação do DOM.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "multimedia/dom_introduction",
      }}
      goFoward={{
        text: "Próximo",
        link: "multimedia/events",
      }}
    />
  );
};
