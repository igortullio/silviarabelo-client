import { Tile } from 'carbon-components-react/lib/components/Tile';

export type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <Tile>{children}</Tile>;
};

export default Card;
