import * as S from './styles';

export type HeadingProps = {
  children: string;
  size?: 'small' | 'medium';
};

const Heading = ({ children, size = 'medium' }: HeadingProps) => <S.Wrapper size={size}>{children}</S.Wrapper>;

export default Heading;
