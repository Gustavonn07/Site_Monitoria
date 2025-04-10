import { PageBuilder } from "../../components/containers/PageBuilder";
import { PageItemsType } from "../../@types";

export const MultimediaForms = () => {
  return (
    <PageBuilder
      head={{
        title: "Formulários em HTML",
        description:
          "Entenda como criar formulários HTML completos com os principais elementos e boas práticas.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "Introdução aos Formulários",
          description: (
            <p>
              Os formulários HTML permitem a entrada de dados por parte dos
              usuários e são fundamentais em qualquer aplicação web. Eles podem
              ser usados para login, cadastros, pesquisas, envio de arquivos,
              entre outros.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Estrutura Básica",
          description: (
            <>
              <p>
                Um formulário é criado com o elemento <code>&lt;form&gt;</code>.
                Ele pode conter vários tipos de campos e deve especificar os
                atributos <code>action</code> (para onde os dados serão
                enviados) e <code>method</code> (o tipo de requisição HTTP).
              </p>
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                {`<form action="/enviar" method="POST">
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome">
  <button type="submit">Enviar</button>
</form>`}
              </pre>
              <form className="border p-4 space-y-2">
                <label htmlFor="nome">Nome:</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  className="border px-2 py-1 block"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-1 rounded"
                >
                  Enviar
                </button>
              </form>
            </>
          ),
          sectionProps: { hasSeparatorSection: false },
        },
        {
          type: PageItemsType.INFO,
          title: "Como label e input funcionam juntos",
          description: (
            <p>
              O elemento <code>&lt;label&gt;</code> está diretamente ligado a um campo de
              entrada (<code>&lt;input&gt;</code>) por meio do atributo{" "}
              <code>for</code>, que deve corresponder ao <code>id</code> do input.
              Essa ligação melhora a acessibilidade, permitindo que leitores de tela
              associem corretamente o texto descritivo ao campo, e também aumenta a
              usabilidade: ao clicar no texto do <code>label</code>, o campo correspondente
              é automaticamente focado.
            </p>
          ),
        },
        {
          type: PageItemsType.SECTION,
          title: "Tipos de Inputs (Texto e Dados)",
          description: (
            <>
              <p>Campos com entrada de dados diretos:</p>
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                {`<input type="text" name="nome">
<input type="email" name="email">
<input type="password" name="senha">
<input type="number" name="idade">`}
              </pre>
              <form className="border p-4 grid grid-cols-1 gap-3">
                <input
                  type="text"
                  placeholder="Texto"
                  className="border px-2 py-1"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border px-2 py-1"
                />
                <input
                  type="password"
                  placeholder="Senha"
                  className="border px-2 py-1"
                />
                <input
                  type="number"
                  placeholder="Idade"
                  className="border px-2 py-1"
                />
              </form>
            </>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Inputs de Seleção",
          description: (
            <>
              <p>
                Os inputs de seleção permitem ao usuário escolher opções em um
                formulário. Existem dois tipos principais:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>
                  <strong>Checkbox</strong>: Permite a seleção de **múltiplas
                  opções** ao mesmo tempo. Ideal para quando o usuário pode
                  escolher mais de um item.
                </li>
                <li>
                  <strong>Radio</strong>: Permite a seleção de **apenas uma
                  opção** dentro de um grupo. É usado quando é necessário
                  escolher apenas uma entre várias alternativas.
                </li>
              </ul>
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                {`<input type="checkbox" name="interesses" value="html"> HTML
<input type="checkbox" name="interesses" value="css"> CSS
        
<input type="radio" name="sexo" value="masc"> Masculino
<input type="radio" name="sexo" value="fem"> Feminino`}
              </pre>
              <form className="border p-4 space-y-4">
                <div>
                  <p className="font-semibold">
                    Quais tecnologias você tem interesse?
                  </p>
                  <label className="block">
                    <input
                      type="checkbox"
                      name="interesses"
                      value="html"
                      className="mr-1"
                    />{" "}
                    HTML
                  </label>
                  <label className="block">
                    <input
                      type="checkbox"
                      name="interesses"
                      value="css"
                      className="mr-1"
                    />{" "}
                    CSS
                  </label>
                </div>
                <div>
                  <p className="font-semibold">Sexo:</p>
                  <label>
                    <input
                      type="radio"
                      name="sexo"
                      value="masc"
                      className="mr-1"
                    />{" "}
                    Masculino
                  </label>
                  <label className="ml-4">
                    <input
                      type="radio"
                      name="sexo"
                      value="fem"
                      className="mr-1"
                    />{" "}
                    Feminino
                  </label>
                </div>
              </form>
            </>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Inputs de Arquivo, Data e Outros",
          description: (
            <>
              <p>Campos especiais:</p>
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
                {`<input type="file" name="arquivo">
<input type="date" name="nascimento">
<input type="color" name="cor">
<input type="range" name="volume">`}
              </pre>
              <form className="border p-4 grid grid-cols-1 gap-3">
                <input type="file" />
                <input type="date" />
                <input type="color" />
                <input type="range" />
              </form>
            </>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Elementos Associados",
          description: (
            <>
              <ul className="list-disc list-inside">
                <li>
                  <strong>&lt;label&gt;</strong>: Define um rótulo para o campo.
                  Use o atributo <code>for</code> ligado ao <code>id</code> do
                  input.
                </li>
                <li>
                  <strong>&lt;textarea&gt;</strong>: Campo de texto de várias
                  linhas.
                </li>
                <li>
                  <strong>&lt;select&gt;</strong> e{" "}
                  <strong>&lt;option&gt;</strong>: Lista suspensa.
                </li>
                <li>
                  <strong>&lt;fieldset&gt;</strong> e{" "}
                  <strong>&lt;legend&gt;</strong>: Agrupamento e legenda de
                  campos.
                </li>
              </ul>
        
              <pre className="bg-gray-100 p-2 rounded-md my-5 text-sm overflow-auto">
        {`<form>
  <label for="mensagem">Mensagem:</label>
  <textarea id="mensagem" name="mensagem"></textarea>

  <label for="estado">Estado:</label>
  <select id="estado" name="estado">
    <option value="sp">SP</option>
    <option value="rj">RJ</option>
  </select>

  <fieldset>
    <legend>Sexo</legend>
    <input type="radio" name="sexo" value="masc"> Masculino
    <input type="radio" name="sexo" value="fem"> Feminino
  </fieldset>
</form>`}
              </pre>
        
              <form className="border p-4 space-y-3">
                <div>
                  <label htmlFor="mensagem">Mensagem:</label>
                  <br />
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    className="border w-full p-2"
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="estado">Estado:</label>
                  <select
                    id="estado"
                    name="estado"
                    className="border px-2 py-1"
                  >
                    <option value="sp">SP</option>
                    <option value="rj">RJ</option>
                  </select>
                </div>
                <fieldset className="border p-2">
                  <legend>Sexo</legend>
                  <label>
                    <input
                      type="radio"
                      name="sexo"
                      value="masc"
                      className="mr-1"
                    />{" "}
                    Masculino
                  </label>
                  <label className="ml-4">
                    <input
                      type="radio"
                      name="sexo"
                      value="fem"
                      className="mr-1"
                    />{" "}
                    Feminino
                  </label>
                </fieldset>
              </form>
            </>
          ),
          sectionProps: { hasSeparatorSection: true },
        },        
        {
          type: PageItemsType.SECTION,
          title: "Atributos Comuns",
          description: (
            <>
              <ul className="list-disc list-inside">
                <li>
                  <code>name</code>: nome do campo (essencial para envio).
                </li>
                <li>
                  <code>required</code>: torna o campo obrigatório.
                </li>
                <li>
                  <code>placeholder</code>: dica dentro do campo.
                </li>
                <li>
                  <code>value</code>: valor inicial.
                </li>
                <li>
                  <code>readonly</code>: somente leitura.
                </li>
                <li>
                  <code>disabled</code>: desabilita o campo.
                </li>
                <li>
                  <code>autocomplete</code>: sugere preenchimentos anteriores.
                </li>
              </ul>
            </>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Boas Práticas",
          description: (
            <p>
              Sempre associe <code>&lt;label&gt;</code> aos campos para melhorar
              a acessibilidade. Agrupe campos relacionados com{" "}
              <code>&lt;fieldset&gt;</code> e use <code>required</code> para
              garantir dados essenciais. Evite depender apenas de validações do
              lado cliente.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
      ]}
      bibliography={[
        {
          title: "Formulários HTML - MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Learn/Forms",
          text: "Guia completo sobre formulários na MDN.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "multimedia/tables",
      }}
      goFoward={{
        text: "Próximo",
        link: "multimedia/semantic_tags",
      }}
    />
  );
};
