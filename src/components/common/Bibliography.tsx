import { Separator } from "../ui";

interface BibliographyProps {
  title: string;
  link: string;
  text?: string;
  image?: string;
  hasSeparator?: boolean;
}

export const Bibliography = ({
  title,
  link,
  text,
  image,
  hasSeparator = true,
}: BibliographyProps) => {
  return (
    <>
      <article className="flex flex-col gap-4 items-start">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-24 h-24 object-cover rounded-lg shadow-sm"
          />
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-secondary-900 mb-1">
            {title}
          </h3>
          {text && <p className="text-muted-foreground mb-2 text-sm">{text}</p>}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium underline hover:text-primary/80 transition-colors text-sm"
          >
            Acessar recurso
          </a>
        </div>
      </article>
      {hasSeparator && <Separator className="bg-primary-400" />}
    </>
  );
};
