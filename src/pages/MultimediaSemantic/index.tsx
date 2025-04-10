import { PageBuilder } from "../../components/containers/PageBuilder";
import { PageItemsType } from "../../@types";

export const SemanticTags = () => {
  return (
    <PageBuilder
      head={{
        title: "HTML Semântico",
        description:
          "Aprenda sobre as principais tags semânticas do HTML e como usá-las para melhorar a estrutura e acessibilidade da sua página.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "O que é HTML Semântico?",
          description: (
            <p>
              HTML Semântico é o uso de tags que descrevem claramente o propósito do conteúdo.
              Isso facilita a leitura e a organização do código, melhora a acessibilidade para
              leitores de tela e ajuda motores de busca a entender melhor o conteúdo da página.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Principais Tags Semânticas",
          description: (
            <>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li><code>&lt;header&gt;</code>: Define o cabeçalho da página ou de uma seção.</li>
                <li><code>&lt;nav&gt;</code>: Representa a navegação principal do site.</li>
                <li><code>&lt;main&gt;</code>: Indica o conteúdo principal da página.</li>
                <li><code>&lt;section&gt;</code>: Agrupa conteúdo relacionado dentro da página.</li>
                <li><code>&lt;article&gt;</code>: Define um conteúdo independente e reutilizável.</li>
                <li><code>&lt;footer&gt;</code>: Representa o rodapé da página ou de uma seção.</li>
                <li><code>&lt;aside&gt;</code>: Conteúdo complementar, como barras laterais ou dicas.</li>
                <li><code>&lt;figure&gt;</code>: Usado para ilustrar mídia, como imagens ou gráficos.</li>
                <li><code>&lt;figcaption&gt;</code>: Legenda para o conteúdo dentro de uma <code>&lt;figure&gt;</code>.</li>
                <li><code>&lt;mark&gt;</code>: Destaca partes do texto, como marcações de busca.</li>
                <li><code>&lt;time&gt;</code>: Representa datas ou horários, útil para eventos ou publicações.</li>
                <li><code>&lt;details&gt;</code>: Cria um bloco expansível com detalhes ocultos por padrão.</li>
                <li><code>&lt;summary&gt;</code>: Título resumido de um elemento <code>&lt;details&gt;</code>.</li>
                <li><code>&lt;address&gt;</code>: Informações de contato de uma pessoa ou organização.</li>
                <li><code>&lt;abbr&gt;</code>: Abreviações com significado completo (útil com o atributo <code>title</code>).</li>
              </ul>
        
              <pre className="bg-gray-100 p-2 rounded-md text-sm overflow-auto mb-5">
        {`<header>
  <h1>Meu Site</h1>
  <nav>
    <a href="/">Início</a>
    <a href="/sobre">Sobre</a>
  </nav>
</header>

<main>
  <section>
    <h2>Notícias</h2>
    <article>
      <h3>Título da notícia</h3>
      <p>Conteúdo da notícia...</p>
    </article>
  </section>
</main>

<footer>
  <p>&copy; 2025 Meu Site</p>
</footer>`}
              </pre>
        
              <pre className="bg-gray-100 p-2 rounded-md text-sm overflow-auto">
        {`<aside>
  <h2>Dica do Dia</h2>
  <p>Use <code>&lt;section&gt;</code> para dividir bem os blocos de conteúdo.</p>
</aside>

<figure>
  <img src="paisagem.jpg" alt="Paisagem bonita" />
  <figcaption>Paisagem ao entardecer</figcaption>
</figure>

<p>Você pode usar a tag <mark>mark</mark> para destacar trechos importantes.</p>

<time dateTime="2025-04-10">10 de Abril de 2025</time>

<details>
  <summary>Mais informações</summary>
  <p>Esses detalhes ficam escondidos até o usuário clicar.</p>
</details>`}
              </pre>
            </>
          ),
          sectionProps: { hasSeparatorSection: false },
        },
        {
          type: PageItemsType.SECTION,
          title: "Visual do Exemplo Acima",
          description: (
            <div className="border p-4 space-y-4">
              <header className="bg-gray-100 p-4 rounded">
                <h1 className="text-xl font-bold">Meu Site</h1>
                <nav className="mt-2 space-x-4">
                  <a href="/" className="text-blue-500 underline">Início</a>
                  <a href="/sobre" className="text-blue-500 underline">Sobre</a>
                </nav>
              </header>
              <main className="mt-4">
                <section>
                  <h2 className="text-lg font-semibold mb-2">Notícias</h2>
                  <article className="bg-white border p-3 rounded shadow">
                    <h3 className="font-bold">Título da notícia</h3>
                    <p>Conteúdo da notícia...</p>
                  </article>
                </section>
              </main>
              <footer className="bg-gray-100 p-4 rounded text-center text-sm mt-4">
                &copy; 2025 Meu Site
              </footer>
            </div>
          ),
          sectionProps: { hasSeparatorSection: false },
        },
        {
          type: PageItemsType.SECTION,
          title: "Visual de Outras Tags Semânticas",
          description: (
            <div className="border p-4 space-y-4">
              <aside className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <h2 className="font-semibold text-yellow-800">Dica do Dia</h2>
                <p>Use <code className="bg-gray-100 px-1 rounded">&lt;section&gt;</code> para organizar bem o conteúdo da sua página.</p>
              </aside>
        
              <figure className="bg-gray-50 p-4 border rounded text-center">
                <img
                  src="https://plus.unsplash.com/premium_photo-1678495222603-b66f6393c166?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
                  alt="Paisagem bonita"
                  className="mx-auto rounded mb-2"
                />
                <figcaption className="text-sm text-gray-600">Paisagem ao entardecer</figcaption>
              </figure>
        
              <p>
                Você pode usar a tag <mark className="bg-yellow-200 px-1 rounded">mark</mark> para <strong>destacar</strong> partes do texto.
              </p>
        
              <p className="text-sm text-gray-600">
                Publicado em: <time dateTime="2025-04-10">10 de Abril de 2025</time>
              </p>
        
              <details className="bg-gray-100 p-3 rounded border cursor-pointer">
                <summary className="font-medium cursor-pointer">Mais informações</summary>
                <p className="mt-2 text-gray-700">
                  Você pode esconder informações menos relevantes em um <code>&lt;details&gt;</code> para manter a interface mais limpa.
                </p>
              </details>
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.INFO,
          title: "Por que usar HTML Semântico?",
          description: (
            <p>
              Além de deixar seu código mais organizado, o HTML semântico melhora
              a indexação em buscadores, facilita a manutenção e garante maior acessibilidade
              para pessoas que utilizam leitores de tela.
            </p>
          ),
        },
      ]}
      bibliography={[
        {
          title: "HTML Semântico - MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Glossary/Semantics",
          text: "Entenda melhor o conceito e a importância da semântica no HTML.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "multimedia/forms",
      }}
      goFoward={{
        text: "Próximo",
        link: "multimedia/challenges_html",
      }}
    />
  );
};
