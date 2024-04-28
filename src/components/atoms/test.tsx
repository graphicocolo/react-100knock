type Props = {
  title: string;
  description: string;
};

export const Card = ({ title, description }: Props): JSX.Element => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};