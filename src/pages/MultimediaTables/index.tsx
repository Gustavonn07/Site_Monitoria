import { PageBuilder } from "../../components/containers/PageBuilder";
import { PageItemsType } from "../../@types";

export const MultimediaTables = () => {
  return (
    <PageBuilder
      head={{
        title: "Tabelas em HTML",
        description:
          "Aprenda a criar e estruturar tabelas com os principais elementos do HTML.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "Importância das Tabelas",
          description: (
            <p>
              As tabelas em HTML são essenciais para exibir dados tabulares,
              como relatórios, calendários, resultados, comparações ou qualquer
              tipo de informação organizada em linhas e colunas. São muito úteis
              em dashboards, páginas administrativas, e em qualquer situação
              onde a organização clara de dados seja necessária.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Estrutura Básica: table, tr, td, th",
          description: (
            <div>
              <p>
                A estrutura básica de uma tabela em HTML é composta pelos
                seguintes elementos:
              </p>
              <ul className="list-disc list-inside my-2">
                <li>
                  <code>&lt;table&gt;</code>: Define a tabela como um todo.
                </li>
                <li>
                  <code>&lt;tr&gt;</code>: Cria uma nova linha (table row).
                </li>
                <li>
                  <code>&lt;td&gt;</code>: Representa uma célula de dado (table
                  data).
                </li>
                <li>
                  <code>&lt;th&gt;</code>: Representa uma célula de cabeçalho
                  (table header).
                </li>
              </ul>
              <strong>Exemplo:</strong>
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                {`<table>
  <tr>
    <th>Nome</th>
    <th>Idade</th>
  </tr>
  <tr>
    <td>João</td>
    <td>25</td>
  </tr>
  <tr>
    <td>Ana</td>
    <td>30</td>
  </tr>
</table>`}
              </pre>
              <table className="border border-gray-400 text-sm">
                <thead>
                  <tr>
                    <th className="border px-2">Nome</th>
                    <th className="border px-2">Idade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-2">João</td>
                    <td className="border px-2">25</td>
                  </tr>
                  <tr>
                    <td className="border px-2">Ana</td>
                    <td className="border px-2">30</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "thead, tbody e tfoot",
          description: (
            <p>
              Para uma organização mais clara e semântica da tabela, usamos os
              elementos
              <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code> e{" "}
              <code>&lt;tfoot&gt;</code>:
              <ul className="list-disc list-inside my-2">
                <li>
                  <code>&lt;thead&gt;</code>: Cabeçalho da tabela (onde
                  geralmente ficam os <code>&lt;th&gt;</code>).
                </li>
                <li>
                  <code>&lt;tbody&gt;</code>: Corpo da tabela, onde ficam os
                  dados principais.
                </li>
                <li>
                  <code>&lt;tfoot&gt;</code>: Rodapé da tabela, útil para totais
                  ou observações.
                </li>
              </ul>
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                {`<table>
  <thead>
    <tr>
      <th>Produto</th>
      <th>Preço</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Caneta</td>
      <td>R$ 2,00</td>
    </tr>
    <tr>
      <td>Caderno</td>
      <td>R$ 15,00</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>R$ 17,00</td>
    </tr>
  </tfoot>
</table>`}
              </pre>
              <table className="border border-gray-400 text-sm">
                <thead>
                  <tr>
                    <th className="border px-2">Produto</th>
                    <th className="border px-2">Preço</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-2">Caneta</td>
                    <td className="border px-2">R$ 2,00</td>
                  </tr>
                  <tr>
                    <td className="border px-2">Caderno</td>
                    <td className="border px-2">R$ 15,00</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td className="border px-2 font-bold">Total</td>
                    <td className="border px-2 font-bold">R$ 17,00</td>
                  </tr>
                </tfoot>
              </table>
            </p>
          ),
          sectionProps: { hasSeparatorSection: false },
        },
        {
          type: PageItemsType.INFO,
          title: "Boas Práticas",
          description: (
            <p>
              Use <code>&lt;th&gt;</code> para os cabeçalhos, seja em colunas ou
              linhas, e mantenha a estrutura da tabela consistente. Evite
              tabelas para layout visual — elas devem ser usadas exclusivamente
              para dados tabulares. Utilize atributos como
              <code>scope</code> para acessibilidade e utilize{" "}
              <code>caption</code> se desejar adicionar um título à tabela.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Colspan: Mesclando Colunas",
          description: (
            <p>
              O atributo <code>colspan</code> permite que uma célula ocupe
              várias colunas.
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                {`<table>
  <tr>
    <th colspan="2">Informações</th>
  </tr>
  <tr>
    <td>Nome</td>
    <td>João</td>
  </tr>
</table>`}
              </pre>
              <table className="border border-gray-400 text-sm">
                <thead>
                  <tr>
                    <th colSpan={2} className="border px-2">
                      Informações
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-2">Nome</td>
                    <td className="border px-2">João</td>
                  </tr>
                </tbody>
              </table>
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Rowspan: Mesclando Linhas",
          description: (
            <p>
              Já o atributo <code>rowspan</code> permite que uma célula ocupe
              várias linhas.
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                {`<table>
  <tr>
    <th>Nome</th>
    <th>Telefone</th>
  </tr>
  <tr>
    <td rowspan="2">João</td>
    <td>1234-5678</td>
  </tr>
  <tr>
    <td>8765-4321</td>
  </tr>
</table>`}
              </pre>
              <table className="border border-gray-400 text-sm">
                <thead>
                  <tr>
                    <th className="border px-2">Nome</th>
                    <th className="border px-2">Telefone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan={2} className="border px-2">
                      João
                    </td>
                    <td className="border px-2">1234-5678</td>
                  </tr>
                  <tr>
                    <td className="border px-2">8765-4321</td>
                  </tr>
                </tbody>
              </table>
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
      ]}
      bibliography={[
        {
          title: "Tabelas - MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/table",
          text: "Documentação oficial com exemplos e explicações detalhadas.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "multimedia/images",
      }}
      goFoward={{
        text: "Próximo",
        link: "multimedia/forms",
      }}
    />
  );
};
