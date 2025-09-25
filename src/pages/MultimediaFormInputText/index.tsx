import { PageItemsType } from "../../@types";
import { PageBuilder } from "../../components/containers/PageBuilder";

export const FormsInputPage = () => {
  return (
    <PageBuilder
      head={{
        title: "Formulários: O elemento <input>",
        description:
          "O elemento <input> é um dos mais versáteis do HTML5, permitindo coletar diferentes tipos de dados do usuário.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "Estrutura básica",
          description: (
            <>
              <p className="mb-2">
                Um campo <code>&lt;input&gt;</code> geralmente é usado junto de
                um <code>&lt;label&gt;</code>, que indica ao usuário o que deve
                ser preenchido.
              </p>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`<form>
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome">
</form>`}
              </pre>
            </>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Atributos comuns",
          description: (
            <>
              <p className="mb-2">
                Alguns atributos podem ser aplicados em vários tipos de{" "}
                <code>input</code> para modificar seu comportamento:
              </p>
              <ul className="list-disc ml-6">
                <li><code>type</code>: define o tipo de entrada</li>
                <li><code>id</code>: identifica o campo</li>
                <li><code>name</code>: nome usado no envio</li>
                <li><code>placeholder</code>: dica dentro do campo</li>
                <li><code>required</code>: torna obrigatório</li>
                <li><code>disabled</code>: desativa o campo</li>
                <li><code>readonly</code>: leitura apenas</li>
                <li><code>maxlength</code>: limite de caracteres</li>
              </ul>
            </>
          ),
          sectionProps: { hasSeparatorSection: true },
        },

        // --- TIPOS DE INPUTS ---
        {
          type: PageItemsType.SECTION,
          title: "Input de Texto",
          description: (
            <>
              <p className="mb-2">
                O tipo <code>text</code> é usado para inserir dados de texto
                livre, como nomes ou endereços.
              </p>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`<label>Nome:</label>
<input type="text" name="nome" placeholder="Digite seu nome">`}
              </pre>
            </>
          ),
        },
        {
          type: PageItemsType.SECTION,
          title: "Input de Senha",
          description: (
            <>
              <p className="mb-2">
                O tipo <code>password</code> oculta os caracteres digitados,
                ideal para senhas e dados confidenciais.
              </p>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`<label>Senha:</label>
<input type="password" name="senha" required>`}
              </pre>
            </>
          ),
        },
        {
          type: PageItemsType.SECTION,
          title: "Input de Email",
          description: (
            <>
              <p className="mb-2">
                O tipo <code>email</code> valida automaticamente o formato de um
                endereço de email.
              </p>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`<label>Email:</label>
<input type="email" name="email" placeholder="exemplo@email.com">`}
              </pre>
            </>
          ),
        },
        {
          type: PageItemsType.SECTION,
          title: "Input Numérico",
          description: (
            <>
              <p className="mb-2">
                O tipo <code>number</code> permite apenas números e pode ter
                valores mínimos e máximos definidos.
              </p>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`<label>Idade:</label>
<input type="number" name="idade" min="1" max="120">`}
              </pre>
            </>
          ),
        },
        {
          type: PageItemsType.SECTION,
          title: "Input de Data",
          description: (
            <>
              <p className="mb-2">
                O tipo <code>date</code> exibe um seletor de calendário para
                facilitar a escolha de datas.
              </p>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`<label>Data de Nascimento:</label>
<input type="date" name="nascimento">`}
              </pre>
            </>
          ),
        },
        {
          type: PageItemsType.SECTION,
          title: "Checkbox",
          description: (
            <>
              <p className="mb-2">
                O tipo <code>checkbox</code> permite marcar ou desmarcar opções
                independentes.
              </p>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`<label>
  <input type="checkbox" name="newsletter">
  Desejo receber novidades
</label>`}
              </pre>
            </>
          ),
        },
        {
          type: PageItemsType.SECTION,
          title: "Radio Buttons",
          description: (
            <>
              <p className="mb-2">
                O tipo <code>radio</code> permite selecionar apenas uma opção
                entre várias, agrupadas pelo mesmo atributo{" "}
                <code>name</code>.
              </p>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`<label>
  <input type="radio" name="sexo" value="M"> Masculino
</label>
<label>
  <input type="radio" name="sexo" value="F"> Feminino
</label>`}
              </pre>
            </>
          ),
        },
        {
          type: PageItemsType.SECTION,
          title: "Input de Cor",
          description: (
            <>
              <p className="mb-2">
                O tipo <code>color</code> abre um seletor de cores para o
                usuário escolher.
              </p>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`<label>Escolha uma cor:</label>
<input type="color" name="cor">`}
              </pre>
            </>
          ),
        },
        {
          type: PageItemsType.SECTION,
          title: "Upload de Arquivo",
          description: (
            <>
              <p className="mb-2">
                O tipo <code>file</code> permite selecionar arquivos do sistema
                do usuário.
              </p>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`<label>Selecione um arquivo:</label>
<input type="file" name="documento">`}
              </pre>
            </>
          ),
        },
        {
          type: PageItemsType.SECTION,
          title: "Controle de Faixa (Range)",
          description: (
            <>
              <p className="mb-2">
                O tipo <code>range</code> cria um controle deslizante que varia
                entre valores definidos.
              </p>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`<label>Nível de satisfação:</label>
<input type="range" name="satisfacao" min="0" max="10">`}
              </pre>
            </>
          ),
        },
        {
          type: PageItemsType.SECTION,
          title: "Input Oculto (Hidden)",
          description: (
            <>
              <p className="mb-2">
                O tipo <code>hidden</code> armazena informações que não são
                visíveis para o usuário, mas são enviadas junto ao formulário.
              </p>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`<input type="hidden" name="id_usuario" value="12345">`}
              </pre>
            </>
          ),
        },
        {
          type: PageItemsType.SECTION,
          title: "Botões (Submit, Reset, Button)",
          description: (
            <>
              <p className="mb-2">
                Inputs do tipo <code>submit</code>, <code>reset</code> e{" "}
                <code>button</code> criam botões com diferentes funções: enviar
                formulário, limpar campos ou executar uma ação.
              </p>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`<input type="submit" value="Enviar">
<input type="reset" value="Limpar">
<input type="button" value="Clique aqui">`}
              </pre>
            </>
          ),
          sectionProps: { hasSeparatorSection: true },
        },

        // QUIZ
        {
          type: PageItemsType.QUIZ,
          title: "Quiz rápido",
          question: "Qual atributo define o tipo de entrada de um <input>?",
          options: [
            { option: "name", isCorrect: false },
            { option: "type", isCorrect: true },
            { option: "value", isCorrect: false },
          ],
        },
      ]}
      bibliography={[
        {
          title: "Documentação do <input> na MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/input",
          text: "Explicação completa sobre todos os tipos e atributos do input.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "",
      }}
      goFoward={{
        text: "Próximo",
        link: "multimedia/forms_select_option",
      }}
    />
  );
};
