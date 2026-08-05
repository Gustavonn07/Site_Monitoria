import { PageBuilder } from "../../components/containers/PageBuilder";
import { CodeBlock } from "../../components/common";
import { PageItemsType } from "../../@types";
import React from "react";

const StorageDemo = () => {
  const [value, setValue] = React.useState("");
  const [saved, setSaved] = React.useState<string[]>([]);

  return (
    <div className="border rounded-lg p-4 bg-primary-100 space-y-3">
      <p className="text-xs text-secondary-700">
        Simulação em memória (sem gravar no navegador de verdade) do
        comportamento de <code>localStorage.setItem</code>.
      </p>
      <div className="flex gap-2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Valor para guardar"
          className="border rounded px-2 py-1 text-sm flex-1"
        />
        <button
          onClick={() => {
            if (!value.trim()) return;
            setSaved((prev) => [...prev, value]);
            setValue("");
          }}
          className="bg-secondary-500 text-white px-3 py-1 rounded text-sm cursor-pointer hover:bg-secondary-700"
        >
          setItem
        </button>
        <button
          onClick={() => setSaved([])}
          className="bg-primary-500 text-white px-3 py-1 rounded text-sm cursor-pointer hover:bg-primary-700"
        >
          clear
        </button>
      </div>
      <div className="text-xs font-mono bg-white border rounded p-2 min-h-10">
        {saved.length === 0
          ? "(vazio)"
          : saved.map((s, i) => <div key={i}>chave{i}: "{s}"</div>)}
      </div>
    </div>
  );
};

export const MultimediaWebStorage = () => {
  return (
    <PageBuilder
      head={{
        title: "Armazenamento Web: localStorage e sessionStorage",
        description:
          "Aprenda a guardar dados diretamente no navegador do usuário, sem precisar de um servidor ou banco de dados.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "O que é Web Storage?",
          description: (
            <p>
              A API de Web Storage permite guardar pares chave-valor
              diretamente no navegador do usuário. Ela possui dois
              mecanismos: <code>localStorage</code>, que persiste{" "}
              <strong>indefinidamente</strong> (até ser apagado), e{" "}
              <code>sessionStorage</code>, que persiste apenas enquanto a{" "}
              <strong>aba do navegador estiver aberta</strong>.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Métodos Principais",
          description: (
            <CodeBlock
              language="javascript"
              code={`// Salvar um valor
localStorage.setItem("nomeUsuario", "Ana");

// Ler um valor
const nome = localStorage.getItem("nomeUsuario");

// Remover um valor específico
localStorage.removeItem("nomeUsuario");

// Remover TUDO
localStorage.clear();

// sessionStorage tem exatamente a mesma API
sessionStorage.setItem("tokenTemporario", "abc123");`}
            />
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Guardando Objetos e Arrays",
          description: (
            <div>
              <p>
                Web Storage só armazena <strong>strings</strong>. Para
                guardar objetos ou arrays, é necessário convertê-los com{" "}
                <code>JSON.stringify</code> e reverter com{" "}
                <code>JSON.parse</code>.
              </p>
              <CodeBlock
                language="javascript"
                code={`const usuario = { nome: "Ana", idade: 22 };

// Salvar
localStorage.setItem("usuario", JSON.stringify(usuario));

// Ler
const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));
console.log(usuarioSalvo.nome); // "Ana"`}
              />
              <p className="mt-3 mb-2 text-sm text-secondary-700">
                Exemplo interativo (simulação):
              </p>
              <StorageDemo />
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "localStorage vs sessionStorage vs Cookies",
          description: (
            <table className="w-full border-collapse text-sm mt-2">
              <thead>
                <tr>
                  <th className="border p-2 bg-secondary-500 text-white text-left">Característica</th>
                  <th className="border p-2 bg-secondary-500 text-white text-left">localStorage</th>
                  <th className="border p-2 bg-secondary-500 text-white text-left">sessionStorage</th>
                  <th className="border p-2 bg-secondary-500 text-white text-left">Cookies</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Persistência</td>
                  <td className="border p-2">Até ser apagado</td>
                  <td className="border p-2">Enquanto a aba estiver aberta</td>
                  <td className="border p-2">Definida por expiração</td>
                </tr>
                <tr className="bg-primary-100">
                  <td className="border p-2">Capacidade</td>
                  <td className="border p-2">~5-10MB</td>
                  <td className="border p-2">~5-10MB</td>
                  <td className="border p-2">~4KB</td>
                </tr>
                <tr>
                  <td className="border p-2">Enviado ao servidor?</td>
                  <td className="border p-2">Não</td>
                  <td className="border p-2">Não</td>
                  <td className="border p-2">Sim, em cada requisição</td>
                </tr>
              </tbody>
            </table>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.INFO,
          title: "Segurança",
          description: (
            <p>
              Nunca armazene dados sensíveis (senhas, tokens de autenticação
              críticos) em <code>localStorage</code>, pois qualquer script
              executado na página tem acesso a ele — o que o torna
              vulnerável a ataques de <strong>XSS</strong>.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.QUIZ,
          title: "Quiz rápido",
          question:
            "Qual mecanismo de armazenamento é apagado automaticamente ao fechar a aba do navegador?",
          options: [
            { option: "localStorage", isCorrect: false },
            { option: "sessionStorage", isCorrect: true },
            { option: "Ambos", isCorrect: false },
          ],
        },
      ]}
      bibliography={[
        {
          title: "Web Storage API - MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Storage_API",
          text: "Documentação oficial da API de armazenamento web.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "multimedia/modules",
      }}
    />
  );
};
