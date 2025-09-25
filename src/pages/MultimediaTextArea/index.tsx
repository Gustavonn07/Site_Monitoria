import { PageItemsType } from "../../@types";
import { PageBuilder } from "../../components/containers/PageBuilder";

export const FormsTextareaPage = () => {
  return (
    <PageBuilder
      head={{
        title: "Formulários: Textarea",
        description:
          "O elemento <textarea> permite que o usuário insira texto em múltiplas linhas, sendo ideal para comentários ou mensagens longas.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "Estrutura básica",
          description: (
            <>
              <p className="mb-2">
                O <code>&lt;textarea&gt;</code> cria um campo de texto multilinha. É possível definir linhas visíveis e largura do campo.
              </p>

              {/* Código */}
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`<form>
  <label for="mensagem">Mensagem:</label>
  <textarea id="mensagem" name="mensagem" rows="4" cols="50" placeholder="Digite sua mensagem..."></textarea>
</form>`}
              </pre>

              {/* Exemplo renderizado */}
              <div className="mt-4 p-4 border rounded-md">
                <form>
                  <label htmlFor="mensagem" className="block mb-1">
                    Mensagem:
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    cols={50}
                    placeholder="Digite sua mensagem..."
                    className="border px-2 py-1 rounded w-full"
                  />
                </form>
              </div>
            </>
          ),
          sectionProps: { hasSeparatorSection: true },
        },

        {
          type: PageItemsType.SECTION,
          title: "Atributos importantes",
          description: (
            <ul className="list-disc ml-6">
              <li><code>name</code>: Nome usado no envio do formulário.</li>
              <li><code>id</code>: Associado ao <code>&lt;label&gt;</code>.</li>
              <li><code>rows</code>: Número de linhas visíveis.</li>
              <li><code>cols</code>: Largura aproximada em colunas de caracteres.</li>
              <li><code>placeholder</code>: Texto de dica.</li>
              <li><code>maxlength</code>: Limite de caracteres.</li>
              <li><code>required</code>: Campo obrigatório.</li>
              <li><code>readonly</code>: Somente leitura.</li>
              <li><code>disabled</code>: Campo desativado.</li>
            </ul>
          ),
          sectionProps: { hasSeparatorSection: true },
        },

        {
          type: PageItemsType.SECTION,
          title: "Exemplo com valor inicial",
          description: (
            <>
              {/* Código */}
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`<label for="comentario">Comentário:</label>
<textarea id="comentario" name="comentario" rows="3">Texto inicial aqui...</textarea>`}
              </pre>

              {/* Exemplo renderizado */}
              <div className="mt-4 p-4 border rounded-md">
                <label htmlFor="comentario" className="block mb-1">
                  Comentário:
                </label>
                <textarea
                  id="comentario"
                  name="comentario"
                  rows={3}
                  defaultValue="Texto inicial aqui..."
                  className="border px-2 py-1 rounded w-full"
                />
              </div>
            </>
          ),
        },

        {
          type: PageItemsType.SECTION,
          title: "Exemplo com readonly",
          description: (
            <>
              {/* Código */}
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`<label for="info">Informações:</label>
<textarea id="info" name="info" rows="3" readonly>Este campo não pode ser editado.</textarea>`}
              </pre>

              {/* Exemplo renderizado */}
              <div className="mt-4 p-4 border rounded-md">
                <label htmlFor="info" className="block mb-1">
                  Informações:
                </label>
                <textarea
                  id="info"
                  name="info"
                  rows={3}
                  defaultValue="Este campo não pode ser editado."
                  readOnly
                  className="border px-2 py-1 rounded w-full bg-gray-100"
                />
              </div>
            </>
          ),
          sectionProps: { hasSeparatorSection: true },
        },

        {
          type: PageItemsType.QUIZ,
          title: "Quiz rápido",
          question: "Qual atributo define o número de linhas visíveis em um <textarea>?",
          options: [
            { option: "cols", isCorrect: false },
            { option: "rows", isCorrect: true },
            { option: "placeholder", isCorrect: false },
          ],
        },
      ]}
      bibliography={[
        {
          title: "Documentação do <textarea> na MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/textarea",
          text: "Explicação completa sobre o uso de textarea e seus atributos.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "multimedia/forms_select_option",
      }}
      goFoward={{
        text: "Próximo",
        link: "multimedia/forms_buttons",
      }}
    />
  );
};
