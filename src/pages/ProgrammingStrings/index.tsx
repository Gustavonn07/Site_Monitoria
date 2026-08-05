import { PageItemsType } from "../../@types";
import { PageBuilder } from "../../components/containers/PageBuilder";
import { CodeBlock } from "../../components/common";

export const ProgrammingStrings = () => {
  return (
    <PageBuilder
      head={{
        title: "Strings em JavaScript",
        description:
          "Aprenda a criar, combinar e manipular textos (strings), um dos tipos de dado mais usados em qualquer programa.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "Criando Strings",
          description: (
            <CodeBlock
              language="javascript"
              code={`const nome = "Ana";
const sobrenome = 'Silva';

// Template literals (crase), permitem interpolação e múltiplas linhas
const saudacao = \`Olá, \${nome} \${sobrenome}!\`;
console.log(saudacao); // "Olá, Ana Silva!"

const texto = \`Linha 1
Linha 2\`;`}
            />
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Propriedades e Acesso",
          description: (
            <CodeBlock
              language="javascript"
              code={`const palavra = "JavaScript";

console.log(palavra.length);     // 10
console.log(palavra[0]);         // "J"
console.log(palavra.charAt(4));  // "S"`}
            />
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Métodos de Busca e Transformação",
          description: (
            <CodeBlock
              language="javascript"
              code={`const frase = "  Aprendendo JavaScript  ";

frase.toUpperCase();      // "  APRENDENDO JAVASCRIPT  "
frase.toLowerCase();      // "  aprendendo javascript  "
frase.trim();             // "Aprendendo JavaScript" (remove espaços das pontas)
frase.includes("Script"); // true
frase.indexOf("Java");    // posição onde "Java" começa
frase.replace("Aprendendo", "Estudando"); // troca a primeira ocorrência`}
            />
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Fatiando Strings: slice e split",
          description: (
            <CodeBlock
              language="javascript"
              code={`const texto = "JavaScript é incrível";

texto.slice(0, 10);   // "JavaScript"
texto.slice(-9);      // "incrível" (a partir do final)

const palavras = texto.split(" ");
console.log(palavras); // ["JavaScript", "é", "incrível"]

const csv = "João,25,Fortaleza";
const [nome, idade, cidade] = csv.split(",");`}
            />
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Concatenando Strings",
          description: (
            <CodeBlock
              language="javascript"
              code={`const a = "Bom";
const b = "dia";

// Operador +
const c1 = a + " " + b;

// Método concat
const c2 = a.concat(" ", b);

// Template literal (forma mais usada atualmente)
const c3 = \`\${a} \${b}\`;`}
            />
          ),
          sectionProps: { hasSeparatorSection: false },
        },
        {
          type: PageItemsType.INFO,
          title: "Strings são Imutáveis",
          description: (
            <p>
              Nenhum método de string altera a string original — todos
              retornam uma <strong>nova</strong> string. Por exemplo,{" "}
              <code>texto.toUpperCase()</code> não muda <code>texto</code>,
              apenas retorna uma nova versão em maiúsculas.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.QUIZ,
          title: "Quiz rápido",
          question:
            "O que o template literal permite fazer que aspas simples/duplas não permitem diretamente?",
          options: [
            { option: "Interpolar variáveis com ${}", isCorrect: true },
            { option: "Guardar números", isCorrect: false },
            { option: "Usar o método .length", isCorrect: false },
          ],
        },
      ]}
      bibliography={[
        {
          title: "String - MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String",
          text: "Referência completa de métodos de string em JavaScript.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "programming/array_methods",
      }}
      goFoward={{
        text: "Próximo",
        link: "programming/oop_fundamentals",
      }}
    />
  );
};
