import { PageBuilder } from "../../components/containers/PageBuilder";
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
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                {`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Título da Página</title>
  </head>
  <body>
    <h1>Conteúdo principal</h1>
  </body>
</html>`}
              </pre>
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
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                {`<!DOCTYPE html>`}
              </pre>
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
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                {`<html lang="pt-BR">
  ...
</html>`}
              </pre>
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
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                {`<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Minha Página</title>
  <link rel="stylesheet" href="estilo.css" />
</head>`}
              </pre>
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
              <pre className="bg-gray-100 p-2 rounded-md my-3 text-sm overflow-auto">
                {`<a href="https://exemplo.com">Ir para o site</a>`}
              </pre>
              <strong>Exemplo de &lt;link&gt;:</strong>
              <pre className="bg-gray-100 p-2 rounded-md my-3 text-sm overflow-auto">
                {`<link rel="stylesheet" href="estilos.css">`}
              </pre>
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
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                {`<meta charset="UTF-8" />
<meta name="description" content="Descrição da página" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />`}
              </pre>
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
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                {`<title>Minha Página</title>`}
              </pre>
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
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                {`<body>
  <h1>Bem-vindo!</h1>
  <p>Este é o conteúdo principal da página.</p>
</body>`}
              </pre>
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
