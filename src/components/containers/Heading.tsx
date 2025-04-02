export interface HeadingProps {
  title?: string;
}

export const Heading = ({ title }: HeadingProps) => {
  return (
    <header className="w-full text-primary-800">
      <h1 className="text-3xl ml-6 mt-4 font-medium">{title}</h1>
    </header>
  );
};
