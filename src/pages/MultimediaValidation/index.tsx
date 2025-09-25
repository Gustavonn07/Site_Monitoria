import { PageItemsType } from "../../@types";
import { PageBuilder } from "../../components/containers/PageBuilder";

export const FormsValidationPage = () => {
  return (
    <PageBuilder
      head={{
        title: "Formulários: Validação",
        description:
          "HTML5 oferece validações nativas para campos de formulário, garantindo que os dados inseridos atendam a certos critérios antes de serem enviados.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "Atributos de validação",
          description: (
            <ul className="list-disc ml-6">
              <li>
                <code>required</code>: Campo obrigatório.
              </li>
              <li>
                <code>minlength</code> e <code>maxlength</code>: Define mínimo e máximo de caracteres.
              </li>
              <li>
                <code>pattern</code>: Expressão regular para validação personalizada.
              </li>
              <li>
                <code>min</code> e <code>max</code>: Valores mínimo e máximo para inputs numéricos.
              </li>
              <li>
                <code>type</code>: Alguns tipos já fazem validação automática, como <code>email</code> ou <code>url</code>.
              </li>
            </ul>
          ),
          sectionProps: { hasSeparatorSection: true },
        },

        {
          type: PageItemsType.SECTION,
          title: "Exemplo com required e pattern",
          description: (
            <>
              <p className="mb-2">
                Nesse exemplo, o nome é obrigatório e o email deve seguir o padrão de email.
              </p>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`<form>
  <label>Nome:</label>
  <input type="text" name="nome" required>
  
  <label>Email:</label>
  <input type="email" name="email" pattern=".+@.+\\..+" required>
  
  <input type="submit" value="Enviar">
</form>`}
              </pre>
            </>
          ),
        },

        {
          type: PageItemsType.SECTION,
          title: "Exemplo com minlength e maxlength",
          description: (
            <>
              <p className="mb-2">
                Define limites de caracteres que o usuário pode inserir.
              </p>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`<label>Senha:</label>
<input type="password" name="senha" minlength="6" maxlength="12" required>`}
              </pre>
            </>
          ),
        },

        {
          type: PageItemsType.SECTION,
          title: "Exemplo com min e max",
          description: (
            <>
              <p className="mb-2">
                Limita valores numéricos para idade ou quantidade.
              </p>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`<label>Idade:</label>
<input type="number" name="idade" min="18" max="99" required>`}
              </pre>
            </>
          ),
        },

        {
          type: PageItemsType.SECTION,
          title: "Exemplo com validação de URL",
          description: (
            <>
              <p className="mb-2">
                Input do tipo URL verifica se o valor inserido é um link válido.
              </p>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`<label>Site pessoal:</label>
<input type="url" name="site" placeholder="https://exemplo.com">`}
              </pre>
            </>
          ),
          sectionProps: { hasSeparatorSection: true },
        },

        {
          type: PageItemsType.QUIZ,
          title: "Quiz rápido",
          question: "Qual atributo torna um campo obrigatório?",
          options: [
            { option: "pattern", isCorrect: false },
            { option: "required", isCorrect: true },
            { option: "maxlength", isCorrect: false },
          ],
        },
      ]}
      bibliography={[
        {
          title: "Validação de formulários HTML (MDN)",
          link: "https://developer.mozilla.org/pt-BR/docs/Learn/Forms/Form_validation",
          text: "Guia completo sobre validação de formulários com HTML5.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "multimedia/forms_buttons",
      }}
      goFoward={{
        text: "Próximo",
        link: "multimedia/forms_submission",
      }}
    />
  );
};
