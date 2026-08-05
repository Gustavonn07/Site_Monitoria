import { PageItemsType } from "../../@types";
import { PageBuilder } from "../../components/containers/PageBuilder";
import { CodeBlock } from "../../components/common";

export const ProgrammingOOPJavaScript = () => {
  return (
    <PageBuilder
      head={{
        title: "POO em JavaScript",
        description:
          "Veja como o JavaScript implementa Programação Orientada a Objetos: classes, this, protótipos e as notações ES6+.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "this: o Contexto do Objeto",
          description: (
            <div>
              <p>
                Dentro de um método, <code>this</code> se refere ao objeto
                que chamou o método. É como o objeto "se identifica" para
                acessar seus próprios dados.
              </p>
              <CodeBlock
                language="javascript"
                code={`class Pessoa {
  constructor(nome) {
    this.nome = nome; // "this" é o objeto sendo criado
  }

  apresentar() {
    console.log(\`Olá, eu sou \${this.nome}\`);
  }
}

const p1 = new Pessoa("Carlos");
p1.apresentar(); // "Olá, eu sou Carlos" -> this === p1`}
              />
              <p className="mt-3">
                Cuidado: em <em>arrow functions</em>, <code>this</code> não
                é o objeto, mas sim herdado do escopo onde a função foi
                definida — por isso arrow functions não são recomendadas
                como métodos de classe quando se precisa de{" "}
                <code>this</code> dinâmico.
              </p>
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Protótipos: A Base por Trás das Classes",
          description: (
            <div>
              <p>
                JavaScript não tem classes "de verdade" como Java ou C# —
                sua herança é baseada em <strong>protótipos</strong>. A
                sintaxe <code>class</code> (ES6) é apenas uma forma mais
                legível de escrever o que, por baixo dos panos, continua
                sendo protótipos.
              </p>
              <CodeBlock
                language="javascript"
                code={`// Forma antiga (função construtora + protótipo)
function Animal(nome) {
  this.nome = nome;
}

Animal.prototype.emitirSom = function () {
  console.log(\`\${this.nome} faz um som.\`);
};

const gato = new Animal("Gato");
gato.emitirSom();

// A classe ES6 faz exatamente isso por baixo dos panos:
class AnimalES6 {
  constructor(nome) {
    this.nome = nome;
  }
  emitirSom() {
    console.log(\`\${this.nome} faz um som.\`);
  }
}`}
              />
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Herança com extends e super",
          description: (
            <CodeBlock
              language="javascript"
              code={`class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }

  descricao() {
    return \`\${this.nome} ganha R$ \${this.salario}\`;
  }
}

class Gerente extends Funcionario {
  constructor(nome, salario, equipe) {
    super(nome, salario); // chama o constructor da classe pai
    this.equipe = equipe;
  }

  descricao() {
    return \`\${super.descricao()} e lidera \${this.equipe.length} pessoas\`;
  }
}

const g = new Gerente("Marina", 8000, ["Ana", "Bruno"]);
console.log(g.descricao());
// "Marina ganha R$ 8000 e lidera 2 pessoas"`}
            />
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Getters, Setters e Campos Estáticos",
          description: (
            <CodeBlock
              language="javascript"
              code={`class Produto {
  static totalCriados = 0; // pertence à classe, não à instância

  constructor(nome, preco) {
    this.nome = nome;
    this._preco = preco;
    Produto.totalCriados++;
  }

  get precoComDesconto() {
    return this._preco * 0.9;
  }

  set preco(novoPreco) {
    if (novoPreco < 0) throw new Error("Preço inválido");
    this._preco = novoPreco;
  }
}

const p = new Produto("Caderno", 20);
console.log(p.precoComDesconto); // 18
console.log(Produto.totalCriados); // 1`}
            />
          ),
          sectionProps: { hasSeparatorSection: false },
        },
        {
          type: PageItemsType.INFO,
          title: "Funções Construtoras vs Classes",
          description: (
            <p>
              Antes do ES6, objetos eram criados apenas com{" "}
              <strong>funções construtoras</strong> (como <code>function
              Animal(){"{"}...{"}"}</code>). A sintaxe <code>class</code> é
              chamada de "açúcar sintático": mais legível, mas gera
              exatamente a mesma estrutura de protótipos por trás.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.QUIZ,
          title: "Quiz rápido",
          question:
            "Qual palavra-chave é usada dentro do constructor de uma classe filha para chamar o constructor da classe pai?",
          options: [
            { option: "this()", isCorrect: false },
            { option: "super()", isCorrect: true },
            { option: "extends()", isCorrect: false },
          ],
        },
      ]}
      bibliography={[
        {
          title: "Classes - MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes",
          text: "Referência completa sobre classes em JavaScript.",
        },
        {
          title: "Herança e a cadeia de protótipos - MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",
          text: "Entenda o funcionamento interno da herança em JS.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "programming/oop_modeling",
      }}
      goFoward={{
        text: "Próximo",
        link: "",
      }}
    />
  );
};
