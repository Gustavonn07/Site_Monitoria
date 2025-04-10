import { PageBuilder } from "../../components/containers/PageBuilder";
import { PageItemsType } from "../../@types";

export const MultimediaImages = () => {
  return (
    <PageBuilder
      head={{
        title: "Imagens em HTML",
        description:
          "Aprenda como utilizar a tag <img>, o atributo alt e boas práticas para exibir imagens em páginas HTML.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "A Tag <img>",
          description: (
            <p>
              A tag <code>&lt;img&gt;</code> é usada para incorporar imagens em uma página web.
              Ela é uma tag auto-fechável e exige, no mínimo, os atributos <code>src</code> (fonte da imagem) e <code>alt</code> (texto alternativo).
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
{`<img src="imagem.jpg" alt="Descrição da imagem" />`}
              </pre>
              O atributo <code>src</code> indica o caminho da imagem, enquanto <code>alt</code> descreve a imagem para leitores de tela e usuários que não podem vê-la.
            </p>
          ),
          sectionProps: { hasSeparatorSection: false },
        },
        {
          type: PageItemsType.INFO,
          title: "Importância do atributo alt",
          description: (
            <p>
              O atributo <code>alt</code> é fundamental para acessibilidade e SEO. Ele fornece uma descrição textual da imagem quando ela não pode ser carregada ou visualizada.
              <br /><br />
              Além disso, ajuda pessoas com deficiência visual a entenderem o conteúdo por meio de leitores de tela.
              <br /><br />
              Nunca use <code>alt=""</code> em imagens importantes. Essa prática deve ser usada apenas para imagens puramente decorativas.
            </p>
          ),
        },
        {
          type: PageItemsType.SECTION,
          title: "Exemplo com caminhos diferentes",
          description: (
            <p>
              Você pode usar caminhos relativos ou absolutos no atributo <code>src</code>:
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
{`<!-- Caminho relativo -->
<img src="imagens/foto.jpg" alt="Foto da paisagem" />

<!-- Caminho absoluto -->
<img src="https://exemplo.com/foto.jpg" alt="Foto externa" />`}
              </pre>
              Certifique-se de que o caminho está correto para evitar imagens quebradas.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Responsividade e boas práticas",
          description: (
            <p>
              Para garantir que a imagem se ajuste a diferentes tamanhos de tela, utilize atributos como <code>width</code>, <code>height</code> ou estilize com CSS.
              <br /><br />
              Também é comum usar a propriedade <code>max-width: 100%</code> em CSS para que a imagem não ultrapasse os limites do contêiner.
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
{`<style>
  img {
    max-width: 100%;
    height: auto;
  }
</style>`}
              </pre>
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
      ]}
      bibliography={[
        {
          title: "Imagens em HTML - MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/img",
          text: "Documentação completa sobre a tag <img> e seus atributos.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "multimedia/navigation",
      }}
      goFoward={{
        text: "Próximo",
        link: "multimedia/tables",
      }}
    />
  );
};
