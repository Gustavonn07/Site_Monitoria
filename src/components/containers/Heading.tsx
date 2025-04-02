export interface HeadingProps {
  title?: string;
}

export const Heading = ({ title }: HeadingProps) => {
  return (
    <header className="w-full text-primary-800 mb-10">
      <h1 className="text-3xl ml-6 font-semibold">{title}</h1>
    </header>
  );
};
