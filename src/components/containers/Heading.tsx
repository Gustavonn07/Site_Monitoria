export interface HeadingProps {
  title?: string;
  description?: string
}

export const Heading = ({ title, description }: HeadingProps) => {
  return (
    <header className="w-full text-primary-800 mb-10 mt-8">
      <h1 className="text-4xl font-semibold mb-2">{title}</h1>
      <p className="text-lg">{description}</p>
    </header>
  );
};
