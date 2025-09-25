import { PageItemsType } from "../../@types";
import { PageBuilder } from "../../components/containers/PageBuilder";

export const FormsButtonsPage = () => {
    return (
        <PageBuilder
            head={{
                title: "Formulários: Botões",
                description:
                    "Botões em formulários podem ser usados para enviar, resetar ou acionar funções. Podem ser criados com <input> ou <button>.",
            }}
            itens={[
                {
                    type: PageItemsType.SECTION,
                    title: "Tipos de botões com <input>",
                    description: (
                        <>
                            <p className="mb-2">
                                O elemento <code>&lt;input&gt;</code> também pode ser usado como botão, definindo o atributo <code>type</code>:
                            </p>

                            {/* Código */}
                            <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
                                {`<input type="submit" value="Enviar">
<input type="reset" value="Limpar">
<input type="button" value="Clique aqui">`}
                            </pre>

                            {/* Explicação de cada tipo */}
                            <ul className="list-disc ml-6 mb-4">
                                <li>
                                    <strong>submit</strong>: Envia o formulário para o servidor ou dispara o evento de submit. É o padrão para enviar os dados do formulário.
                                </li>
                                <li>
                                    <strong>reset</strong>: Limpa todos os campos do formulário, voltando aos valores iniciais (default).
                                </li>
                                <li>
                                    <strong>button</strong>: Botão genérico que não faz nada por padrão; precisa de um evento (ex: <code>onclick</code>) para executar alguma ação.
                                </li>
                            </ul>

                            {/* Exemplo renderizado */}
                            <div className="mt-4 flex gap-2">
                                <input
                                    type="submit"
                                    value="Enviar"
                                    className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
                                />
                                <input
                                    type="reset"
                                    value="Limpar"
                                    className="px-4 py-2 bg-gray-300 text-black rounded cursor-pointer"
                                />
                                <input
                                    type="button"
                                    value="Clique aqui"
                                    onClick={() => alert("Botão clicado!")}
                                    className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer"
                                />
                            </div>
                        </>
                    ),
                    sectionProps: { hasSeparatorSection: true },
                },


                {
                    type: PageItemsType.SECTION,
                    title: "Botões com <button>",
                    description: (
                        <>
                            <p className="mb-2">
                                O elemento <code>&lt;button&gt;</code> permite mais flexibilidade, podendo incluir ícones, imagens ou outros elementos dentro.
                            </p>

                            {/* Código */}
                            <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
                                {`<button type="submit">Enviar</button>
<button type="reset">Limpar</button>
<button type="button" onclick="alert('Clicou!')">Clique aqui</button>`}
                            </pre>

                            {/* Exemplo renderizado */}
                            <div className="mt-4 flex gap-2">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded"
                                >
                                    Enviar
                                </button>
                                <button
                                    type="reset"
                                    className="px-4 py-2 bg-gray-300 text-black rounded"
                                >
                                    Limpar
                                </button>
                                <button
                                    type="button"
                                    onClick={() => alert("Clicou!")}
                                    className="px-4 py-2 bg-green-500 text-white rounded"
                                >
                                    Clique aqui
                                </button>
                            </div>
                        </>
                    ),
                    sectionProps: { hasSeparatorSection: false },
                },

                {
                    type: PageItemsType.INFO,
                    title: "Atributos importantes",
                    description: (
                        <ul className="list-disc ml-6">
                            <li><code>type</code>: Define a função do botão (<code>submit</code>, <code>reset</code> ou <code>button</code>).</li>
                            <li><code>disabled</code>: Desativa o botão.</li>
                            <li><code>name</code> e <code>value</code>: usados para envio no formulário.</li>
                            <li><code>onclick</code>: Função a ser executada ao clicar no botão.</li>
                        </ul>
                    ),
                    sectionProps: { hasSeparatorSection: true },
                },

                {
                    type: PageItemsType.QUIZ,
                    title: "Quiz rápido",
                    question: "Qual atributo define a função de um botão?",
                    options: [
                        { option: "name", isCorrect: false },
                        { option: "type", isCorrect: true },
                        { option: "value", isCorrect: false },
                    ],
                },
            ]}
            bibliography={[
                {
                    title: "Documentação de <button> e <input> na MDN",
                    link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/button",
                    text: "Explicação completa sobre o uso de botões em formulários.",
                },
            ]}
            goBack={{
                text: "Voltar",
                link: "multimedia/forms_textarea",
            }}
            goFoward={{
                text: "Próximo",
                link: "multimedia/forms_validation",
            }}
        />
    );
};
