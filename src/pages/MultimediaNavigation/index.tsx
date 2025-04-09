import { PageBuilder } from "../../components/containers/PageBuilder";
import { PageItemsType } from "../../@types";

export const HTMLLinksPage = () => {
  return (
    <PageBuilder
      head={{
        title: "Links e Navegação",
        description:
          "Aprenda como criar links e trabalhar com navegação interna e externa em HTML.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "Tag <a> e o atributo href",
          description: (
            <p>
              A tag <code>&lt;a&gt;</code> é usada para criar links. O atributo
              <code> href</code> define o destino do link. Pode ser uma URL externa ou um
              caminho interno.
              <br /><br />
              <strong>Exemplo de link externo:</strong>
              <pre className="bg-gray-100 p-2 rounded-md my-3 text-sm overflow-auto">
{`<a href="https://exemplo.com">Visitar exemplo.com</a>`}
              </pre>
              <strong>Exemplo de link interno:</strong>
              <pre className="bg-gray-100 p-2 rounded-md my-3 text-sm overflow-auto">
{`<a href="/contato.html">Página de Contato</a>`}
              </pre>
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Atributo target e _blank",
          description: (
            <p>
              O atributo <code>target</code> especifica onde o link será aberto.
              Usar <code>_blank</code> faz com que o link abra em uma nova aba ou janela.
              <br /><br />
              <strong>Exemplo:</strong>
              <pre className="bg-gray-100 p-2 rounded-md my-3 text-sm overflow-auto">
{`<a href="https://exemplo.com" target="_blank">Abrir em nova aba</a>`}
              </pre>
              Isso é útil quando você quer manter o usuário no seu site enquanto permite a
              navegação para outro.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "target=\"_blank\" e rel=\"noopener noreferrer\"",
          description: (
            <p>
              Ao usar <code>target="_blank"</code>, o link será aberto em uma nova aba ou janela do navegador. Para evitar vulnerabilidades de segurança, é importante incluir <code>rel="noopener noreferrer"</code>.
              <br /><br />
              <strong>Exemplo seguro:</strong>
              <pre className="bg-gray-100 p-2 rounded-md my-3 text-sm overflow-auto">
{`<a href="https://siteexterno.com" target="_blank" rel="noopener noreferrer">Visitar</a>`}
              </pre>
              Sem esses atributos, a nova aba pode manipular a página original com JavaScript, o que é um risco de segurança.
            </p>
          ),
          sectionProps: { hasSeparatorSection: false },
        },
        {
          type: PageItemsType.INFO,
          title: "Por que usar rel=\"noopener noreferrer\"?",
          description: (
            <p>
              Quando usamos <code>target="_blank"</code>, a aba externa ganha acesso ao objeto <code>window.opener</code> da aba original. Isso pode permitir ataques como <strong>phishing</strong> — por exemplo, a aba externa pode redirecionar a aba original para um site malicioso sem que o usuário perceba.
              <br /><br />
              Usar <code>rel="noopener"</code> impede o acesso ao <code>window.opener</code>. O <code>rel="noreferrer"</code>, além disso, evita o envio da origem (referrer) ao site externo.
              <br /><br />
              Sempre que abrir links externos com <code>target="_blank"</code>, inclua <code>rel="noopener noreferrer"</code> para proteger sua página e seus usuários.
            </p>
          )
        },
        {
          type: PageItemsType.SECTION,
          title: "Links Internos com Âncoras",
          description: (
            <p>
              Você pode usar links para navegar para partes específicas da mesma página
              utilizando âncoras com o atributo <code>id</code>.
              <br /><br />
              <strong>Exemplo:</strong>
              <pre className="bg-gray-100 p-2 rounded-md my-3 text-sm overflow-auto">
{`<a href="#contato">Ir para a seção de contato</a>

...

<h2 id="contato">Contato</h2>`}
              </pre>
              Isso melhora a navegação, especialmente em páginas longas.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Links de E-mail e Telefone",
          description: (
            <p>
              Com os esquemas <code>mailto:</code> e <code>tel:</code>, é possível criar
              links que abrem o cliente de e-mail ou fazem uma chamada telefônica em
              dispositivos compatíveis.
              <br /><br />
              <strong>Exemplo de e-mail:</strong>
              <pre className="bg-gray-100 p-2 rounded-md my-3 text-sm overflow-auto">
{`<a href="mailto:exemplo@site.com">Enviar e-mail</a>`}
              </pre>
              <strong>Exemplo de telefone:</strong>
              <pre className="bg-gray-100 p-2 rounded-md my-3 text-sm overflow-auto">
{`<a href="tel:+5511999999999">Ligar</a>`}
              </pre>
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
      ]}
      bibliography={[
        {
          title: "A tag <a> - MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/a",
          text: "Documentação detalhada da tag de link <a>.",
        },
        {
          title: "Uso de rel='noopener' - MDN",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Attribute",
          text: "Entenda o uso e a importância do rel='noopener'.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "multimedia/structures_base",
      }}
      goFoward={{
        text: "Próximo",
        link: "multimedia/images",
      }}
    />
  );
};