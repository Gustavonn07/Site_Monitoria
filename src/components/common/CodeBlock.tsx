import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { cn } from "../../utils";

export type CodeBlockLanguage =
  | "html"
  | "css"
  | "javascript"
  | "jsx"
  | "bash"
  | "text";

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string;
  language?: CodeBlockLanguage;
  title?: string;
}

const languageMeta: Record<
  CodeBlockLanguage,
  { label: string; badgeClassName: string; icon: string }
> = {
  html: {
    label: "HTML",
    badgeClassName: "bg-orange-500/20 text-orange-300",
    icon: "simple-icons:html5",
  },
  css: {
    label: "CSS",
    badgeClassName: "bg-blue-500/20 text-blue-300",
    icon: "simple-icons:css3",
  },
  javascript: {
    label: "JavaScript",
    badgeClassName: "bg-yellow-500/20 text-yellow-300",
    icon: "simple-icons:javascript",
  },
  jsx: {
    label: "JSX",
    badgeClassName: "bg-cyan-500/20 text-cyan-300",
    icon: "simple-icons:react",
  },
  bash: {
    label: "Terminal",
    badgeClassName: "bg-primary-500/20 text-primary-200",
    icon: "mdi:console",
  },
  text: {
    label: "Texto",
    badgeClassName: "bg-primary-500/20 text-primary-200",
    icon: "mdi:text-box-outline",
  },
};

export const CodeBlock = ({
  code,
  language = "text",
  title,
  className,
}: CodeBlockProps) => {
  const [copied, setCopied] = React.useState(false);
  const meta = languageMeta[language];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className={cn(
        "my-5 rounded-lg overflow-hidden border border-secondary-700 shadow-sm",
        className
      )}
    >
      <div className="flex items-center justify-between bg-secondary-800 px-3 py-1.5">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold",
              meta.badgeClassName
            )}
          >
            <Icon icon={meta.icon} className="w-3.5 h-3.5" />
            {meta.label}
          </span>
          {title && (
            <span className="text-primary-300 text-xs">{title}</span>
          )}
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs text-primary-200 hover:text-primary-100 transition-colors cursor-pointer"
        >
          <Icon
            icon={copied ? "mdi:check" : "mdi:content-copy"}
            className={cn("w-4 h-4", { "text-success": copied })}
          />
          {copied ? "Copiado!" : "Copiar"}
        </button>
      </div>
      <pre className="bg-secondary-900 text-primary-100 p-4 text-sm overflow-auto">
        <code className="font-mono whitespace-pre">{code.trim()}</code>
      </pre>
    </div>
  );
};
