import { PageBuilder } from "../../components/containers/PageBuilder";
import { CodeBlock } from "../../components/common";
import { PageItemsType } from "../../@types";

export const HTMLStructurePage = () => {
  return (
    <PageBuilder
      head={{
        title: "Estrutura da Página HTML",
        description:
          "Aprenda sobre a estrutura básica de uma página HTML e o papel de cada elemento principal.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "A Estrutura Fundamental do HTML",
          description: (
            <p>
              Um documento HTML é estruturado de forma hierárquica com base em
              elementos que organizam o conteúdo e fornecem instruções ao
              navegador. A estrutura mais básica contém as seguintes tags:{" "}
              <code>!DOCTYPE html</code>,<code>html</code>, <code>head</code> e{" "}
              <code>body</code>.
              <CodeBlock language="html" code={`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Título da Página</title>
  </head>
  <body>
    <h1>Conteúdo principal</h1>
  </body>
</html>`} />
              Essa estrutura é essencial para garantir que o navegador
              interprete a página corretamente.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "!DOCTYPE html",
          description: (
            <p>
              Essa declaração deve ser a primeira linha do seu documento. Ela
              informa ao navegador que o documento está usando a versão HTML5.
              Sem ela, o navegador pode entrar em modo "quirks" e interpretar o
              código de forma inconsistente.
              <CodeBlock language="html" code={`<!DOCTYPE html>`} />
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Html",
          description: (
            <p>
              Essa tag engloba todo o conteúdo da sua página. É o elemento raiz
              de qualquer documento HTML. Pode receber atributos como{" "}
              <code>lang</code>, que define o idioma principal do conteúdo (por
              exemplo, <code>lang="pt-BR"</code>).
              <CodeBlock language="html" code={`<html lang="pt-BR">
  ...
</html>`} />
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Head",
          description: (
            <p>
              O <code>head</code> contém metadados da página, como título,
              codificação, links para arquivos externos (CSS, fontes, favicon) e
              outras configurações. Esses dados não são exibidos diretamente na
              interface do usuário.
              <CodeBlock language="html" code={`<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Minha Página</title>
  <link rel="stylesheet" href="estilo.css" />
</head>`} />
            </p>
          ),
          sectionProps: { hasSeparatorSection: false },
        },
        {
          type: PageItemsType.INFO,
          title: "Diferença entre <a> e <link>",
          description: (
            <p>
              A tag <code>&lt;a&gt;</code> cria um link clicável que leva o
              usuário para outra página ou documento. Já a tag{" "}
              <code>&lt;link&gt;</code> é usada no <code>&lt;head&gt;</code>{" "}
              para estabelecer relacionamentos com recursos externos, como
              folhas de estilo (CSS) ou ícones. Ela não é visível nem clicável
              na página.
              <br />
              <br />
              <strong>Exemplo de &lt;a&gt;:</strong>
              <CodeBlock language="html" code={`<a href="https://exemplo.com">Ir para o site</a>`} />
              <strong>Exemplo de &lt;link&gt;:</strong>
              <CodeBlock language="html" code={`<link rel="stylesheet" href="estilos.css">`} />
            </p>
          ),
        },
        {
          type: PageItemsType.SECTION,
          title: "Meta",
          description: (
            <p>
              A tag <code>meta</code> é usada dentro do <code>head</code> para
              definir metadados, como a codificação de caracteres, descrição da
              página, palavras-chave, e configurações de responsividade.
              <br />
              <br />
              <strong>Exemplo:</strong>
              <CodeBlock language="html" code={`<meta charset="UTF-8" />
<meta name="description" content="Descrição da página" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />`} />
              Esses dados ajudam os mecanismos de busca, melhoram a
              acessibilidade e a compatibilidade com dispositivos móveis.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Title",
          description: (
            <p>
              A tag <code>title</code> define o título da aba do navegador e é
              importante para o SEO. O conteúdo dessa tag aparece na aba do
              navegador e também como o título exibido nos resultados de
              pesquisa.
              <CodeBlock language="html" code={`<title>Minha Página</title>`} />
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Body",
          description: (
            <p>
              O <code>body</code> representa o corpo visível da página, ou seja,
              todo o conteúdo que será mostrado para o usuário, como textos,
              imagens, links, seções, botões, etc.
              <CodeBlock language="html" code={`<body>
  <h1>Bem-vindo!</h1>
  <p>Este é o conteúdo principal da página.</p>
</body>`} />
              É dentro do <code>body</code> que você constrói a interface da sua
              página web.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
      ]}
      bibliography={[
        {
          title: "HTML Básico - MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element",
          text: "Referência completa sobre os principais elementos HTML.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "multimedia/formatting_tags",
      }}
      goFoward={{
        text: "Próximo",
        link: "multimedia/navigation",
      }}
    />
  );
};
