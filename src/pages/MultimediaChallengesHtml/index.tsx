import { PageItemsType } from "../../@types";
import { PageBuilder } from "../../components/containers/PageBuilder";
import { Button } from "../../components";
import React from "react";

export const MultimediaChallengesHtml = () => {
  const [showAnswers, setShowAnswers] = React.useState<boolean[]>(
    Array(4).fill(false)
  );

  const toggleAnswer = (index: number) => {
    setShowAnswers((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <PageBuilder
      head={{
        title: "Desafios de HTML Puro",
        description: "Pratique seus conhecimentos de HTML resolvendo desafios básicos e intermediários.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "Desafio 1: Formulário Simples",
          description: (
            <div>
              <p>Crie um formulário com os seguintes campos: nome, email e uma mensagem. Inclua um botão de envio.</p>
              <Button className="mt-3" onClick={() => toggleAnswer(0)} variant="outline">
                {showAnswers[0] ? "Esconder Resposta" : "Mostrar Resposta"}
              </Button>
              {showAnswers[0] && (
                <pre className="bg-gray-100 p-3 rounded-md my-4 text-sm overflow-auto">
{`<form action="/enviar" method="POST">
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome"><br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email"><br>
  <label for="mensagem">Mensagem:</label>
  <textarea id="mensagem" name="mensagem"></textarea><br>
  <button type="submit">Enviar</button>
</form>`}
                </pre>
              )}
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Desafio 2: Página com Tags Semânticas",
          description: (
            <div>
              <p>Monte uma estrutura HTML com <code>header</code>, <code>main</code>, <code>section</code>, <code>article</code> e <code>footer</code>.</p>
              <Button className="mt-3" onClick={() => toggleAnswer(1)} variant="outline">
                {showAnswers[1] ? "Esconder Resposta" : "Mostrar Resposta"}
              </Button>
              {showAnswers[1] && (
                <pre className="bg-gray-100 p-3 rounded-md my-4 text-sm overflow-auto">
{`<header>
  <h1>Blog Semântico</h1>
</header>
<main>
  <section>
    <article>
      <h2>Postagem 1</h2>
      <p>Conteúdo da primeira postagem.</p>
    </article>
  </section>
</main>
<footer>
  <p>Todos os direitos reservados.</p>
</footer>`}
                </pre>
              )}
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Desafio 3: Lista de Compras",
          description: (
            <div>
              <p>Crie uma lista não ordenada com 5 itens de compras. Utilize a tag <code>&lt;ul&gt;</code>.</p>
              <Button className="mt-3" onClick={() => toggleAnswer(2)} variant="outline">
                {showAnswers[2] ? "Esconder Resposta" : "Mostrar Resposta"}
              </Button>
              {showAnswers[2] && (
                <pre className="bg-gray-100 p-3 rounded-md my-4 text-sm overflow-auto">
{`<ul>
  <li>Pão</li>
  <li>Leite</li>
  <li>Arroz</li>
  <li>Feijão</li>
  <li>Banana</li>
</ul>`}
                </pre>
              )}
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Desafio 4: Imagem com Legenda",
          description: (
            <div>
              <p>Insira uma imagem com uma legenda usando as tags <code>&lt;figure&gt;</code> e <code>&lt;figcaption&gt;</code>.</p>
              <Button className="mt-3" onClick={() => toggleAnswer(3)} variant="outline">
                {showAnswers[3] ? "Esconder Resposta" : "Mostrar Resposta"}
              </Button>
              {showAnswers[3] && (
                <pre className="bg-gray-100 p-3 rounded-md my-4 text-sm overflow-auto">
{`<figure>
  <img src="https://via.placeholder.com/300x150" alt="Descrição da imagem">
  <figcaption>Paisagem ao entardecer</figcaption>
</figure>`}
                </pre>
              )}
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.INFO,
          title: "Dica Final",
          description: (
            <p>
              Tente escrever o código sem olhar a resposta primeiro. Depois, compare com a solução e ajuste o que for necessário!
            </p>
          ),
        },
      ]}
      goBack={{ text: "Voltar", link: "multimedia/semantic_tags" }}
    />
  );
};
