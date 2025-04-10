import { PageBuilder } from "../../components/containers/PageBuilder";
import { PageItemsType } from "../../@types";

export const HTMLTagsPage = () => {
  return (
    <PageBuilder
      head={{
        title: "Principais Tags HTML",
        description:
          "Explore as principais tags HTML e veja exemplos práticos do seu uso.",
      }}
      itens={[ 
        {
          type: PageItemsType.SECTION,
          title: "Tags de Título e Parágrafo",
          description: (
            <p>
              As tags <code>&lt;h1&gt;</code> até <code>&lt;h6&gt;</code> representam títulos com diferentes níveis de importância semântica. <br /><br />
              A tag <code>&lt;p&gt;</code> é usada para criar parágrafos de texto corrido.
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
{`<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<h3>Seção Interna</h3>
<p>Este é um parágrafo explicando o conteúdo da seção.</p>`}
              </pre>
              Essas tags ajudam a estruturar o conteúdo de maneira clara e semântica.
            </p>
          ),
          sectionProps: { hasSeparatorSection: false },
        },
        {
          type: PageItemsType.INFO,
          title: "Importância semântica dos títulos",
          description: (
            <p>
              É importante usar as tags de título com base na hierarquia do conteúdo e não no seu tamanho visual. Por exemplo, o <code>&lt;h1&gt;</code> deve ser usado apenas uma vez como o título principal da página, e as demais tags devem seguir uma estrutura lógica e semântica (<code>&lt;h2&gt;</code> para seções principais, <code>&lt;h3&gt;</code> para subseções etc). Isso melhora a acessibilidade e ajuda motores de busca a entenderem melhor o conteúdo da página.
            </p>
          ),
          infoProps: { hasSeparatorInfo: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Tags de Lista",
          description: (
            <p>
              Existem três tipos principais de listas em HTML, cada uma com uma finalidade diferente:
              <br /><br />
              <strong>1. Lista Não Ordenada (<code>&lt;ul&gt;</code>):</strong><br /> usada quando a ordem dos itens não importa. Ideal para listas de compras, recursos, tópicos soltos etc.
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
{`<ul>
  <li>Maçã</li>
  <li>Banana</li>
  <li>Laranja</li>
</ul>`}
              </pre>
              <strong>2. Lista Ordenada (<code>&lt;ol&gt;</code>):</strong><br /> usada quando a ordem dos itens faz diferença. É útil para passo a passo, tutoriais ou sequências.
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
{`<ol>
  <li>Pré-aqueça o forno</li>
  <li>Misture os ingredientes</li>
  <li>Asse por 40 minutos</li>
</ol>`}
              </pre>
              <strong>3. Lista de Definição (<code>&lt;dl&gt;</code>):</strong><br /> usada para apresentar termos e suas definições, como em glossários. Contém:
              <br />
              <code>&lt;dt&gt;</code> (Definition Term) para o termo definido;
              <br />
              <code>&lt;dd&gt;</code> (Definition Description) para a descrição daquele termo.
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
{`<dl>
  <dt>HTML</dt>
  <dd>Linguagem de marcação para estruturar páginas web.</dd>
  <dt>CSS</dt>
  <dd>Folhas de estilo para definir aparência visual.</dd>
</dl>`}
              </pre>
              <strong>Exemplo com listas aninhadas:</strong>
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
{`<ol>
  <li>Comprar ingredientes</li>
  <li>Preparar:
    <ul>
      <li>Picar legumes</li>
      <li>Temperar carne</li>
    </ul>
  </li>
  <li>Cozinhar</li>
</ol>`}
              </pre>
              As listas ajudam a organizar melhor a informação e a estruturar o conteúdo de forma clara e legível.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Tags de Mídia",
          description: (
            <p>
              O HTML permite incorporar diversos tipos de mídia, como imagens, vídeos e áudios para enriquecer a experiência do usuário.
              <br /><br />
              <strong>Imagem (<code>&lt;img&gt;</code>):</strong><br /> A tag <code>&lt;img&gt;</code> serve para exibir imagens em uma página. O atributo <code>alt</code> é essencial para acessibilidade e para casos em que a imagem não pode ser carregada.
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
{`<img src="logo.png" alt="Logo da empresa" width="200" />`}
              </pre>
              <strong>Vídeo (<code>&lt;video&gt;</code>):</strong><br /> A tag <code>&lt;video&gt;</code> permite incorporar vídeos. Se o vídeo não estiver disponível ou o navegador não for compatível, o conteúdo alternativo dentro da tag será exibido.
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
{`<video controls width="320">
  <source src="apresentacao.mp4" type="video/mp4" />
  Seu navegador não suporta vídeo ou o arquivo não foi encontrado.
</video>`}
              </pre>
              <strong>Áudio (<code>&lt;audio&gt;</code>):</strong><br /> A tag <code>&lt;audio&gt;</code> permite incorporar sons, como música ou narração.
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
{`<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  Seu navegador não suporta áudio.
</audio>`}
              </pre>
              Sempre ofereça conteúdo alternativo e use os atributos corretamente para garantir acessibilidade e compatibilidade entre navegadores.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Tag details e summary",
          description: (
            <p>
              As tags <code>&lt;details&gt;</code> e <code>&lt;summary&gt;</code> criam seções interativas que o usuário pode expandir ou recolher.
              <br /><br />
              <strong><code>&lt;summary&gt;</code>:</strong> é o rótulo visível que funciona como botão para abrir ou fechar o conteúdo;
              <br />
              <strong><code>&lt;details&gt;</code>:</strong> envolve o conteúdo que será mostrado ou escondido quando o usuário interagir.
              <br /><br />
              É uma solução nativa e acessível para exibir informações complementares.
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
{`<details>
  <summary>Ver mais</summary>
  <p>Este texto fica escondido até o usuário clicar no título.</p>
</details>`}
              </pre>
              Muito útil para FAQs, seções colapsáveis e descrições que não precisam estar visíveis o tempo todo.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Tags de Formatação e Ênfase",
          description: (
            <p>
              Tags de formatação ajudam a destacar partes do conteúdo:
              <br /><br />
              <strong><code>&lt;strong&gt;</code>:</strong> dá ênfase forte ao conteúdo (semântico, geralmente renderizado em negrito).
              <br />
              <strong><code>&lt;em&gt;</code>:</strong> dá ênfase leve (semântico, geralmente em itálico).
              <br />
              <strong><code>&lt;mark&gt;</code>:</strong> destaca com fundo amarelo.
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
{`<p><strong>Importante:</strong> leia com atenção.</p>
<p><em>Esse detalhe pode passar despercebido.</em></p>
<p>Palavras <mark>marcadas</mark> são úteis em revisões.</p>`}
              </pre>
              Essas tags melhoram a comunicação, acessibilidade e a experiência geral de leitura.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Tags Não Semânticas",
          description: (
            <p>
              Tags não semânticas são aquelas que não indicam o significado do conteúdo. As mais comuns são <code>&lt;div&gt;</code> e <code>&lt;span&gt;</code>.
              <br /><br />
              <strong><code>&lt;div&gt;</code>:</strong> usada para agrupar blocos de conteúdo. É uma "caixa" genérica que pode conter outros elementos.
              <br />
              <strong><code>&lt;span&gt;</code>:</strong> usada para agrupar conteúdo em linha, como partes de texto.
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
{`<div class="card">
  <h2>Título</h2>
  <p>Conteúdo do card.</p>
</div>

<p>Você pode <span class="destaque">destacar</span> partes do texto.</p>`}
              </pre>
              Use essas tags quando não houver uma tag semântica apropriada, mas sempre que possível prefira tags que expressem o significado do conteúdo, como <code>&lt;header&gt;</code>, <code>&lt;article&gt;</code> ou <code>&lt;section&gt;</code>.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
      ]}
      bibliography={[
        {
          title: "HTML - MDN Web Docs",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
          text: "Documentação completa e confiável sobre HTML.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "multimedia/introduction_html",
      }}
      goFoward={{
        text: "Próximo",
        link: "multimedia/structures_base",
      }}
    />
  );
};
