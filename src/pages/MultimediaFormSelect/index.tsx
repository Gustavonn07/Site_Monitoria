import { PageItemsType } from "../../@types";
import { PageBuilder } from "../../components/containers/PageBuilder";

export const FormsSelectOptionPage = () => {
  return (
    <PageBuilder
      head={{
        title: "Formulários: Select e Option",
        description:
          "O elemento <select> permite criar menus suspensos, enquanto <option> define as opções disponíveis dentro desse menu.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "Estrutura básica",
          description: (
            <>
              <p className="mb-2">
                O <code>&lt;select&gt;</code> é usado para criar listas suspensas. Cada
                opção da lista é definida pelo <code>&lt;option&gt;</code>.
              </p>

              {/* Código */}
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`<form>
  <label for="cidade">Cidade:</label>
  <select id="cidade" name="cidade">
    <option value="sp">São Paulo</option>
    <option value="rj">Rio de Janeiro</option>
    <option value="bh">Belo Horizonte</option>
  </select>
</form>`}
              </pre>

              {/* Exemplo renderizado */}
              <div className="mt-4 p-4 border rounded-md">
                <form>
                  <label htmlFor="cidade" className="mr-2">
                    Cidade:
                  </label>
                  <select
                    id="cidade"
                    name="cidade"
                    className="border px-2 py-1 rounded"
                  >
                    <option value="sp">São Paulo</option>
                    <option value="rj">Rio de Janeiro</option>
                    <option value="bh">Belo Horizonte</option>
                  </select>
                </form>
              </div>
            </>
          ),
          sectionProps: { hasSeparatorSection: true },
        },

        {
          type: PageItemsType.SECTION,
          title: "Atributos principais do <select>",
          description: (
            <ul className="list-disc ml-6">
              <li>
                <code>name</code>: Nome usado no envio do formulário.
              </li>
              <li>
                <code>id</code>: Identificador único para associar a <code>&lt;label&gt;</code>.
              </li>
              <li>
                <code>multiple</code>: Permite selecionar várias opções.
              </li>
              <li>
                <code>size</code>: Define quantas opções ficam visíveis sem abrir a lista.
              </li>
              <li>
                <code>disabled</code>: Desabilita o campo.
              </li>
              <li>
                <code>required</code>: Torna obrigatório escolher uma opção.
              </li>
            </ul>
          ),
          sectionProps: { hasSeparatorSection: true },
        },

        {
          type: PageItemsType.SECTION,
          title: "Atributos principais do <option>",
          description: (
            <ul className="list-disc ml-6">
              <li>
                <code>value</code>: Valor enviado ao servidor quando selecionado.
              </li>
              <li>
                <code>selected</code>: Define a opção pré-selecionada.
              </li>
              <li>
                <code>disabled</code>: Desabilita a opção, impedindo a seleção.
              </li>
              <li>
                Conteúdo entre as tags <code>&lt;option&gt;</code> é o texto exibido.
              </li>
            </ul>
          ),
        },

        {
          type: PageItemsType.SECTION,
          title: "Exemplo com opção pré-selecionada",
          description: (
            <>
              {/* Código */}
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`<label for="curso">Curso:</label>
<select id="curso" name="curso">
  <option value="html">HTML</option>
  <option value="css" selected>CSS</option>
  <option value="js">JavaScript</option>
</select>`}
              </pre>

              {/* Exemplo renderizado */}
              <div className="mt-4 p-4 border rounded-md">
                <label htmlFor="curso" className="mr-2">
                  Curso:
                </label>
                <select
                  id="curso"
                  name="curso"
                  className="border px-2 py-1 rounded"
                  defaultValue="css"
                >
                  <option value="html">HTML</option>
                  <option value="css">CSS</option>
                  <option value="js">JavaScript</option>
                </select>
              </div>
            </>
          ),
        },

        {
          type: PageItemsType.SECTION,
          title: "Exemplo com múltipla seleção",
          description: (
            <>
              <p className="mb-2">
                O atributo <code>multiple</code> permite escolher várias opções ao mesmo tempo.
              </p>

              {/* Código */}
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`<label for="linguagens">Escolha linguagens:</label>
<select id="linguagens" name="linguagens" multiple size="4">
  <option value="js">JavaScript</option>
  <option value="py">Python</option>
  <option value="java">Java</option>
  <option value="csharp">C#</option>
</select>`}
              </pre>

              {/* Exemplo renderizado */}
              <div className="mt-4 p-4 border rounded-md">
                <label htmlFor="linguagens" className="block mb-1">
                  Escolha linguagens:
                </label>
                <select
                  id="linguagens"
                  name="linguagens"
                  multiple
                  size={4}
                  className="border px-2 py-1 rounded w-48"
                >
                  <option value="js">JavaScript</option>
                  <option value="py">Python</option>
                  <option value="java">Java</option>
                  <option value="csharp">C#</option>
                </select>
              </div>
            </>
          ),
        },

        {
          type: PageItemsType.SECTION,
          title: "Agrupando opções com <optgroup>",
          description: (
            <>
              <p className="mb-2">
                O elemento <code>&lt;optgroup&gt;</code> permite organizar opções em grupos.
              </p>

              {/* Código */}
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`<label for="carros">Carro:</label>
<select id="carros" name="carros">
  <optgroup label="Esportivos">
    <option value="ferrari">Ferrari</option>
    <option value="porsche">Porsche</option>
  </optgroup>
  <optgroup label="SUVs">
    <option value="jeep">Jeep</option>
    <option value="volvo">Volvo</option>
  </optgroup>
</select>`}
              </pre>

              {/* Exemplo renderizado */}
              <div className="mt-4 p-4 border rounded-md">
                <label htmlFor="carros" className="mr-2 block mb-1">
                  Carro:
                </label>
                <select id="carros" name="carros" className="border px-2 py-1 rounded">
                  <optgroup label="Esportivos">
                    <option value="ferrari">Ferrari</option>
                    <option value="porsche">Porsche</option>
                  </optgroup>
                  <optgroup label="SUVs">
                    <option value="jeep">Jeep</option>
                    <option value="volvo">Volvo</option>
                  </optgroup>
                </select>
              </div>
            </>
          ),
          sectionProps: { hasSeparatorSection: true },
        },

        {
          type: PageItemsType.QUIZ,
          title: "Quiz rápido",
          question:
            "Qual atributo deve ser usado para permitir múltiplas seleções em um <select>?",
          options: [
            { option: "selected", isCorrect: false },
            { option: "multiple", isCorrect: true },
            { option: "size", isCorrect: false },
          ],
        },
      ]}
      bibliography={[
        {
          title: "Documentação do <select> na MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/select",
          text: "Explicação completa sobre o uso de select, option e optgroup.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "multimedia/forms_input",
      }}
      goFoward={{
        text: "Próximo",
        link: "multimedia/forms_textarea",
      }}
    />
  );
};
