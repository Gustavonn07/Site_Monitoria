import { PageBuilder } from "../../components/containers/PageBuilder";
import { CodeBlock } from "../../components/common";
import { PageItemsType } from "../../@types";

export const CSSTextTablesPage = () => {
  return (
    <PageBuilder
      head={{
        title: "CSS: Texto e Tabelas",
        description:
          "Estilize textos com tipografia e aprenda a controlar a aparência de tabelas usando CSS.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "Propriedades de Texto",
          description: (
            <div>
              <ul className="list-disc list-inside space-y-1">
                <li><code>font-family</code>: define a fonte utilizada.</li>
                <li><code>font-size</code>: tamanho do texto.</li>
                <li><code>font-weight</code>: peso/negrito (ex: 400, 700, bold).</li>
                <li><code>text-align</code>: alinhamento (left, center, right, justify).</li>
                <li><code>text-decoration</code>: sublinhado, tachado etc.</li>
                <li><code>line-height</code>: espaçamento entre linhas.</li>
                <li><code>letter-spacing</code>: espaçamento entre letras.</li>
              </ul>
              <CodeBlock
                language="css"
                code={`p {
  font-family: "Segoe UI", Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  text-align: justify;
  letter-spacing: 0.3px;
}

a {
  text-decoration: none;
}`}
              />
              <div className="mt-4 p-4 border rounded-lg">
                <p style={{ fontFamily: "Georgia, serif", fontSize: "18px", lineHeight: 1.6, textAlign: "justify" }}>
                  Este parágrafo demonstra <strong>font-family</strong>,{" "}
                  <em>line-height</em> e <span style={{ textDecoration: "underline" }}>text-decoration</span> aplicados diretamente, para você visualizar o efeito de cada propriedade.
                </p>
              </div>
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Estilizando Tabelas",
          description: (
            <div>
              <p>
                Tabelas HTML costumam precisar de CSS para ficarem legíveis:
                controle de bordas, espaçamento entre células e zebra
                (linhas alternadas).
              </p>
              <CodeBlock
                language="css"
                code={`table {
  width: 100%;
  border-collapse: collapse; /* une as bordas de células vizinhas */
}

th, td {
  border: 1px solid #ced4da;
  padding: 8px 12px;
  text-align: left;
}

th {
  background-color: #598392;
  color: white;
}

tr:nth-child(even) {
  background-color: #f8f9fa; /* efeito zebra */
}

tr:hover {
  background-color: #e9ecef;
}`}
              />
              <table className="w-full border-collapse mt-4 text-sm">
                <thead>
                  <tr>
                    <th className="border p-2 bg-secondary-500 text-white text-left">Aluno</th>
                    <th className="border p-2 bg-secondary-500 text-white text-left">Nota</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-primary-200">
                    <td className="border p-2">João</td>
                    <td className="border p-2">8.5</td>
                  </tr>
                  <tr className="bg-primary-100 hover:bg-primary-200">
                    <td className="border p-2">Ana</td>
                    <td className="border p-2">9.2</td>
                  </tr>
                  <tr className="hover:bg-primary-200">
                    <td className="border p-2">Carlos</td>
                    <td className="border p-2">7.8</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.INFO,
          title: "border-collapse vs border-spacing",
          description: (
            <p>
              Com <code>border-collapse: collapse</code>, as bordas de
              células adjacentes se fundem em uma só linha. O padrão é{" "}
              <code>separate</code>, que mantém um pequeno espaço entre
              células, controlável via <code>border-spacing</code>.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.QUIZ,
          title: "Quiz rápido",
          question:
            "Qual propriedade CSS une as bordas de células vizinhas de uma tabela em uma única linha?",
          options: [
            { option: "border-spacing", isCorrect: false },
            { option: "border-collapse: collapse", isCorrect: true },
            { option: "table-layout: fixed", isCorrect: false },
          ],
        },
      ]}
      bibliography={[
        {
          title: "CSS Text - W3Schools",
          link: "https://www.w3schools.com/css/css_text.asp",
          text: "Todas as propriedades de formatação de texto do CSS.",
        },
        {
          title: "CSS Tables - MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Learn/CSS/Building_blocks/Styling_tables",
          text: "Guia sobre como estilizar tabelas de forma acessível.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "multimedia/css_colors_borders",
      }}
      goFoward={{
        text: "Próximo",
        link: "multimedia/css_position",
      }}
    />
  );
};
