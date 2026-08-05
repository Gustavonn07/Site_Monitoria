import { PageItemsType } from "../../@types";
import { PageBuilder } from "../../components/containers/PageBuilder";
import { CodeBlock } from "../../components/common";

export const ProgrammingOOPFundamentals = () => {
  return (
    <PageBuilder
      head={{
        title: "Fundamentos de Programação Orientada a Objetos",
        description:
          "Conheça os quatro pilares da POO — abstração, encapsulamento, herança e polimorfismo — e por que esse paradigma é tão usado.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "O que é POO?",
          description: (
            <p>
              Programação Orientada a Objetos (POO) é um paradigma que
              organiza o código em torno de <strong>objetos</strong>, que
              combinam <strong>dados</strong> (atributos/propriedades) e{" "}
              <strong>comportamentos</strong> (métodos), representando
              entidades do mundo real de forma mais próxima de como
              pensamos sobre elas.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Classes e Objetos",
          description: (
            <div>
              <p>
                Uma <strong>classe</strong> é um molde que define quais
                atributos e métodos seus objetos terão. Um{" "}
                <strong>objeto</strong> é uma instância concreta criada a
                partir dessa classe.
              </p>
              <CodeBlock
                language="javascript"
                code={`class Carro {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    this.ligado = false;
  }

  ligar() {
    this.ligado = true;
    console.log(\`\${this.modelo} ligado!\`);
  }
}

const meuCarro = new Carro("Fiat", "Uno"); // objeto (instância)
meuCarro.ligar(); // "Uno ligado!"`}
              />
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Os 4 Pilares da POO",
          description: (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">1. Abstração</h4>
                <p>
                  Representar apenas os detalhes relevantes de um objeto
                  para o contexto do sistema, escondendo a complexidade
                  interna.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">2. Encapsulamento</h4>
                <p>
                  Agrupar dados e métodos relacionados dentro do objeto,
                  controlando o acesso externo a detalhes internos.
                </p>
                <CodeBlock
                  language="javascript"
                  code={`class ContaBancaria {
  #saldo = 0; // campo privado (só acessível dentro da classe)

  depositar(valor) {
    this.#saldo += valor;
  }

  get saldo() {
    return this.#saldo;
  }
}

const conta = new ContaBancaria();
conta.depositar(100);
console.log(conta.saldo); // 100
console.log(conta.#saldo); // Erro: campo privado`}
                />
              </div>
              <div>
                <h4 className="font-semibold">3. Herança</h4>
                <p>
                  Permite que uma classe reutilize atributos e métodos de
                  outra, criando relações de especialização.
                </p>
                <CodeBlock
                  language="javascript"
                  code={`class Animal {
  constructor(nome) {
    this.nome = nome;
  }
  emitirSom() {
    console.log(\`\${this.nome} faz um som.\`);
  }
}

class Cachorro extends Animal {
  emitirSom() {
    console.log(\`\${this.nome} late: Au au!\`);
  }
}

const rex = new Cachorro("Rex");
rex.emitirSom(); // "Rex late: Au au!"`}
                />
              </div>
              <div>
                <h4 className="font-semibold">4. Polimorfismo</h4>
                <p>
                  Objetos de classes diferentes podem responder de formas
                  diferentes à mesma chamada de método, como no exemplo
                  acima: cada classe tem sua própria versão de{" "}
                  <code>emitirSom()</code>.
                </p>
              </div>
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.INFO,
          title: "Por que usar POO?",
          description: (
            <p>
              POO favorece o <strong>reuso de código</strong>, facilita a
              organização de sistemas grandes através da modularização, e
              se aproxima da forma como modelamos entidades e
              relacionamentos do mundo real — sendo a base de praticamente
              todas as linguagens de programação modernas.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.QUIZ,
          title: "Quiz rápido",
          question:
            "Qual pilar da POO permite que uma classe filha reutilize e especialize o comportamento de uma classe pai?",
          options: [
            { option: "Encapsulamento", isCorrect: false },
            { option: "Herança", isCorrect: true },
            { option: "Abstração", isCorrect: false },
          ],
        },
      ]}
      bibliography={[
        {
          title: "Object-oriented programming - MDN",
          link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming",
          text: "Introdução aos conceitos de POO aplicados a JavaScript.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "programming/strings",
      }}
      goFoward={{
        text: "Próximo",
        link: "programming/oop_modeling",
      }}
    />
  );
};
