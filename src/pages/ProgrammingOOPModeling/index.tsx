import { PageItemsType } from "../../@types";
import { PageBuilder } from "../../components/containers/PageBuilder";
import { CodeBlock } from "../../components/common";

export const ProgrammingOOPModeling = () => {
  return (
    <PageBuilder
      head={{
        title: "Modelagem de Problemas usando POO",
        description:
          "Aprenda o processo de transformar um problema do mundo real em classes e objetos bem definidos.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "Do Problema à Classe",
          description: (
            <p>
              Modelar com POO é o processo de identificar as{" "}
              <strong>entidades</strong> de um problema (substantivos),
              seus <strong>atributos</strong> (características) e{" "}
              <strong>comportamentos</strong> (ações/verbos), e transformar
              isso em classes.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Passo a Passo",
          description: (
            <ol className="list-decimal list-inside space-y-1">
              <li>
                <strong>Identifique as entidades</strong>: quais "coisas"
                fazem parte do problema? (ex: Aluno, Curso, Matrícula)
              </li>
              <li>
                <strong>Liste os atributos</strong>: quais dados cada
                entidade precisa guardar? (ex: Aluno tem nome, matrícula,
                notas)
              </li>
              <li>
                <strong>Liste os comportamentos</strong>: o que cada
                entidade faz? (ex: Aluno pode se matricular, calcular
                média)
              </li>
              <li>
                <strong>Defina os relacionamentos</strong>: como as
                entidades se conectam? (ex: um Aluno pode ter vários
                Cursos)
              </li>
            </ol>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Exemplo: Sistema de Biblioteca",
          description: (
            <div>
              <p>
                Problema: "Uma biblioteca precisa controlar livros e seus
                empréstimos para os usuários."
              </p>
              <p className="mt-2">
                Entidades identificadas: <code>Livro</code>,{" "}
                <code>Usuario</code>, <code>Emprestimo</code>.
              </p>
              <CodeBlock
                language="javascript"
                code={`class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.disponivel = true;
  }
}

class Usuario {
  constructor(nome) {
    this.nome = nome;
    this.livrosEmprestados = [];
  }

  pegarEmprestado(livro) {
    if (!livro.disponivel) {
      console.log(\`\${livro.titulo} não está disponível.\`);
      return;
    }
    livro.disponivel = false;
    this.livrosEmprestados.push(livro);
    console.log(\`\${this.nome} pegou "\${livro.titulo}" emprestado.\`);
  }

  devolver(livro) {
    livro.disponivel = true;
    this.livrosEmprestados = this.livrosEmprestados.filter(
      (l) => l !== livro
    );
    console.log(\`\${this.nome} devolveu "\${livro.titulo}".\`);
  }
}

const dom_casmurro = new Livro("Dom Casmurro", "Machado de Assis");
const ana = new Usuario("Ana");

ana.pegarEmprestado(dom_casmurro);
ana.devolver(dom_casmurro);`}
              />
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Composição vs Herança",
          description: (
            <p>
              Nem todo relacionamento deve ser modelado com{" "}
              <strong>herança</strong> (extends). Muitas vezes,{" "}
              <strong>composição</strong> — uma classe conter uma instância
              de outra, como <code>Usuario</code> contendo uma lista de{" "}
              <code>Livro</code> — é mais flexível e reflete melhor a
              relação real entre as entidades.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.INFO,
          title: "Dica prática",
          description: (
            <p>
              Ao modelar, escreva a descrição do problema em uma frase e
              sublinhe os substantivos (viram classes/atributos) e os
              verbos (viram métodos). Esse exercício simples ajuda muito a
              organizar o design antes de escrever qualquer código.
            </p>
          ),
        },
      ]}
      bibliography={[
        {
          title: "Object-Oriented Design - MDN",
          link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming",
          text: "Fundamentos sobre design orientado a objetos.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "programming/oop_fundamentals",
      }}
      goFoward={{
        text: "Próximo",
        link: "programming/oop_javascript",
      }}
    />
  );
};
