import * as S from './styles';

export type TextProps = {
  children: React.ReactNode;
};

const Text = ({ children }: TextProps) => <S.Text>{children}</S.Text>;

export default Text;
