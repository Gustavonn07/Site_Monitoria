export interface HeadingProps {
  title?: string;
  description?: string
}

export const Heading = ({ title, description }: HeadingProps) => {
  return (
    <header className="w-full text-primary-800 mb-10 mt-5">
      <h1 className="text-4xl font-semibold">{title}</h1>
      <p className="text-lg">{description}</p>
    </header>
  );
};
