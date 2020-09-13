import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Text = styled.div`
  ${() => css`
    font-weight: 400;
    letter-spacing: 0.16px;
    font-size: 1rem;

    h4 {
      margin-bottom: 1rem;
      text-align: justify;
      text-justify: inter-word;
      font-size: 1rem;

      ${media.greaterThan('medium')`
        font-size: 1.4rem;
      `}
    }

    ${media.greaterThan('medium')`
      font-size: 1.4rem;
    `}
  `}
`;
