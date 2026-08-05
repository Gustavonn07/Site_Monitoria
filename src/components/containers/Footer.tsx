import { Link } from "react-router-dom";

const footerLinks = [
  { title: "Autoração Multimídia", href: "/multimedia/introduction_html" },
  { title: "Programação", href: "/programming/introduction_p5" },
];

export const Footer = () => {
  return (
    <>
      <footer className="bg-secondary-800 text-primary-200">
        <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-2">
          <div className="mx-auto">
            <h3 className="text-primary-100 font-semibold text-lg mb-2">
              Monitoria
            </h3>
            <p className="text-sm text-primary-300">
              Material de apoio para as disciplinas de Autoração Multimídia e
              Programação, produzido pela monitoria.
            </p>
          </div>

          <div className="mx-auto">
            <h4 className="text-primary-100 font-semibold mb-3 text-sm uppercase tracking-wide">
              Conteúdos
            </h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-primary-100 transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-700 py-4 text-center text-xs text-primary-400">
          2024 - 2026 Monitoria | Gustavo Nepomuceno.
        </div>
      </footer>
    </>
  );
};