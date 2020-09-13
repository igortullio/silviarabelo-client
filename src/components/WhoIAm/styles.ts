import styled from 'styled-components';
import media from 'styled-media-query';

export const Image = styled.img`
  display: block;
  max-width: min(35rem, 100%);
  margin: 0 auto;

  ${media.lessThan('medium')`
    max-width: 100%;
  `}
`;
