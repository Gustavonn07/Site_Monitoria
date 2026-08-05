import { PageBuilder } from "../../components/containers/PageBuilder";
import { CodeBlock } from "../../components/common";
import { PageItemsType } from "../../@types";
import React from "react";

const CanvasDemo = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#598392";
    ctx.fillRect(20, 20, 100, 60);

    ctx.beginPath();
    ctx.arc(220, 50, 35, 0, Math.PI * 2);
    ctx.fillStyle = "#0e3b4f";
    ctx.fill();

    ctx.strokeStyle = "#06253b";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(150, 100);
    ctx.lineTo(280, 100);
    ctx.stroke();

    ctx.font = "16px Arial";
    ctx.fillStyle = "#212529";
    ctx.fillText("Desenhado via Canvas", 20, 110);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={320}
      height={130}
      className="border rounded-md bg-white"
    />
  );
};

export const MultimediaCanvas = () => {
  return (
    <PageBuilder
      head={{
        title: "Desenhando com Canvas (HTML5 + JS)",
        description:
          "Aprenda a usar o elemento <canvas> para desenhar formas, textos e gráficos diretamente com JavaScript.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "O que é o elemento <canvas>?",
          description: (
            <p>
              O <code>&lt;canvas&gt;</code> é um elemento HTML5 que funciona
              como uma "tela em branco" onde é possível desenhar formas,
              textos, imagens e até animações usando JavaScript, através de
              um <strong>contexto de renderização</strong> (o mais comum é o
              contexto 2D).
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Criando e Obtendo o Contexto",
          description: (
            <CodeBlock
              language="html"
              code={`<canvas id="minhaTela" width="320" height="130"></canvas>

<script>
  const canvas = document.getElementById("minhaTela");
  const ctx = canvas.getContext("2d");
</script>`}
            />
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Desenhando Formas",
          description: (
            <div>
              <CodeBlock
                language="javascript"
                code={`// Retângulo preenchido
ctx.fillStyle = "#598392";
ctx.fillRect(20, 20, 100, 60);

// Círculo
ctx.beginPath();
ctx.arc(220, 50, 35, 0, Math.PI * 2);
ctx.fillStyle = "#0e3b4f";
ctx.fill();

// Linha
ctx.strokeStyle = "#06253b";
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(150, 100);
ctx.lineTo(280, 100);
ctx.stroke();

// Texto
ctx.font = "16px Arial";
ctx.fillText("Desenhado via Canvas", 20, 110);`}
              />
              <p className="mt-3 mb-2 text-sm text-secondary-700">
                Resultado (renderizado ao vivo neste exemplo):
              </p>
              <CanvasDemo />
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Animações Simples",
          description: (
            <div>
              <p>
                Para animar, redesenhamos o canvas repetidamente usando{" "}
                <code>requestAnimationFrame</code>, limpando o desenho
                anterior a cada quadro com <code>clearRect</code>.
              </p>
              <CodeBlock
                language="javascript"
                code={`let x = 0;

function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#598392";
  ctx.fillRect(x, 40, 40, 40);
  x = (x + 2) % canvas.width;
  requestAnimationFrame(animar);
}

animar();`}
              />
            </div>
          ),
          sectionProps: { hasSeparatorSection: false },
        },
        {
          type: PageItemsType.INFO,
          title: "Canvas vs SVG",
          description: (
            <p>
              O Canvas desenha <strong>pixel a pixel</strong> (raster) e é
              ótimo para animações intensas e jogos. Já o SVG descreve
              formas como <strong>vetores</strong> no próprio DOM, sendo
              mais indicado para ícones e gráficos que precisam de
              escalabilidade e interatividade via CSS/JS em cada forma.
            </p>
          ),
        },
      ]}
      bibliography={[
        {
          title: "Canvas API - MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/API/Canvas_API",
          text: "Documentação completa da API de Canvas.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "multimedia/css_flexbox",
      }}
      goFoward={{
        text: "Próximo",
        link: "multimedia/audio_video",
      }}
    />
  );
};
