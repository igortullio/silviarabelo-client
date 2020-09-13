import styled, { css } from 'styled-components';

import { HeadingProps } from '.';

const wrapperModifiers = {
  small: () => css`
    font-size: 1.4rem;
  `,
  medium: () => css`
    font-size: 2.2rem;
  `
};

export const Wrapper = styled.h2<HeadingProps>`
  ${({ size }) => css`
    color: #000000;
    margin-bottom: 0.8rem;

    ${!!size && wrapperModifiers[size]}
  `}
`;
