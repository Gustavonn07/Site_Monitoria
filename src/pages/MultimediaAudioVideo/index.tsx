import { PageBuilder } from "../../components/containers/PageBuilder";
import { CodeBlock } from "../../components/common";
import { PageItemsType } from "../../@types";

export const MultimediaAudioVideo = () => {
  return (
    <PageBuilder
      head={{
        title: "Áudio e Vídeo em HTML5",
        description:
          "Aprenda a incorporar e controlar áudio e vídeo nativamente com as tags <audio> e <video> do HTML5.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "Antes do HTML5",
          description: (
            <p>
              Antigamente, reproduzir mídia na Web exigia plugins como
              Flash. O HTML5 trouxe as tags <code>&lt;audio&gt;</code> e{" "}
              <code>&lt;video&gt;</code>, que funcionam nativamente no
              navegador, sem dependências externas.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "A Tag <audio>",
          description: (
            <div>
              <CodeBlock
                language="html"
                code={`<audio controls>
  <source src="musica.mp3" type="audio/mpeg" />
  <source src="musica.ogg" type="audio/ogg" />
  Seu navegador não suporta o elemento de áudio.
</audio>`}
              />
              <p className="mt-3">
                Principais atributos: <code>controls</code> (exibe os
                controles padrão), <code>autoplay</code>,{" "}
                <code>loop</code> e <code>muted</code>.
              </p>
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "A Tag <video>",
          description: (
            <div>
              <CodeBlock
                language="html"
                code={`<video width="480" controls poster="capa.jpg">
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  Seu navegador não suporta o elemento de vídeo.
</video>`}
              />
              <p className="mt-3">
                O atributo <code>poster</code> define uma imagem exibida
                antes do vídeo começar a tocar, e múltiplas tags{" "}
                <code>&lt;source&gt;</code> permitem oferecer formatos
                alternativos para garantir compatibilidade entre
                navegadores.
              </p>
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Controlando Mídia com JavaScript",
          description: (
            <CodeBlock
              language="javascript"
              code={`const video = document.querySelector("video");

document.getElementById("btnPlay").addEventListener("click", () => {
  video.play();
});

document.getElementById("btnPause").addEventListener("click", () => {
  video.pause();
});

video.addEventListener("ended", () => {
  console.log("Vídeo terminou!");
});

video.volume = 0.5; // volume de 0 a 1
video.currentTime = 30; // pula para o segundo 30`}
            />
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.INFO,
          title: "Acessibilidade e Boas Práticas",
          description: (
            <p>
              Evite usar <code>autoplay</code> com som, pois é uma má
              experiência para o usuário (muitos navegadores já bloqueiam
              isso por padrão). Para vídeos, considere adicionar legendas
              com a tag <code>&lt;track&gt;</code>, melhorando a
              acessibilidade.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.QUIZ,
          title: "Quiz rápido",
          question:
            "Qual atributo da tag <video> define uma imagem exibida antes do vídeo iniciar?",
          options: [
            { option: "cover", isCorrect: false },
            { option: "poster", isCorrect: true },
            { option: "preview", isCorrect: false },
          ],
        },
      ]}
      bibliography={[
        {
          title: "<video> - MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/video",
          text: "Documentação completa do elemento de vídeo.",
        },
        {
          title: "<audio> - MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/audio",
          text: "Documentação completa do elemento de áudio.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "multimedia/canvas",
      }}
      goFoward={{
        text: "Próximo",
        link: "multimedia/dom_introduction",
      }}
    />
  );
};
