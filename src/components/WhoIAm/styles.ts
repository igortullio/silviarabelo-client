import styled from 'styled-components';
import media from 'styled-media-query';

export const Image = styled.img`
  display: block;
  max-width: 100%;
  max-height: 30rem;
  margin: 0 auto;

  ${media.greaterThan('medium')`
    max-width: min(35rem, 100%);
    max-height: 100%;
  `}
`;
