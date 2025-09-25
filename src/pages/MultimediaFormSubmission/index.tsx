import { PageItemsType } from "../../@types";
import { PageBuilder } from "../../components/containers/PageBuilder";

export const FormsSubmissionPage = () => {
  return (
    <PageBuilder
      head={{
        title: "Formulários: Envio",
        description:
          "O envio de formulários define como os dados são enviados para o servidor usando os atributos action e method do elemento <form>.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "Atributos principais do <form>",
          description: (
            <ul className="list-disc ml-6">
              <li>
                <code>action</code>: URL para onde os dados serão enviados.
              </li>
              <li>
                <code>method</code>: Método HTTP usado (geralmente <code>GET</code> ou <code>POST</code>).
              </li>
              <li>
                <code>enctype</code>: Tipo de codificação dos dados (usado principalmente com upload de arquivos).
              </li>
            </ul>
          ),
          sectionProps: { hasSeparatorSection: true },
        },

        {
          type: PageItemsType.SECTION,
          title: "Exemplo com método GET",
          description: (
            <>
              <p className="mb-2">
                O método <code>GET</code> envia os dados na URL. Útil para consultas sem informações sensíveis.
              </p>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`<form action="/buscar" method="get">
  <label>Pesquisar:</label>
  <input type="text" name="q">
  <input type="submit" value="Buscar">
</form>`}
              </pre>
            </>
          ),
        },

        {
          type: PageItemsType.SECTION,
          title: "Exemplo com método POST",
          description: (
            <>
              <p className="mb-2">
                O método <code>POST</code> envia os dados no corpo da requisição. Mais seguro para informações sensíveis.
              </p>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`<form action="/cadastrar" method="post">
  <label>Nome:</label>
  <input type="text" name="nome" required>
  
  <label>Email:</label>
  <input type="email" name="email" required>
  
  <input type="submit" value="Cadastrar">
</form>`}
              </pre>
            </>
          ),
        },

        {
          type: PageItemsType.SECTION,
          title: "Envio de arquivo com enctype",
          description: (
            <>
              <p className="mb-2">
                Para enviar arquivos, o formulário precisa do atributo <code>enctype="multipart/form-data"</code>.
              </p>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`<form action="/upload" method="post" enctype="multipart/form-data">
  <label>Selecione um arquivo:</label>
  <input type="file" name="documento">
  
  <input type="submit" value="Enviar arquivo">
</form>`}
              </pre>
            </>
          ),
          sectionProps: { hasSeparatorSection: true },
        },

        {
          type: PageItemsType.QUIZ,
          title: "Quiz rápido",
          question:
            "Qual método do <form> envia os dados no corpo da requisição?",
          options: [
            { option: "GET", isCorrect: false },
            { option: "POST", isCorrect: true },
            { option: "DELETE", isCorrect: false },
          ],
        },
      ]}
      bibliography={[
        {
          title: "Envio de formulários HTML (MDN)",
          link: "https://developer.mozilla.org/pt-BR/docs/Learn/Forms/Sending_and_retrieving_form_data",
          text: "Explicação completa sobre envio de formulários com GET, POST e enctype.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "multimedia/forms_validation",
      }}
      goFoward={{
        text: "Próximo",
        link: "",
      }}
    />
  );
};
