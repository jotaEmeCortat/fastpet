import React from 'react';
import styled, { css } from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export const TextBase = styled.p`
  text-align: center;
  color:#070C0E;
  font-Size: 16px;
  font-weight:400;
  line-height: 1.25;
  padding: 18px 0 18px 0;
  ${breakpointsMedia({
    md: css`
      font-size: 24px;
      text-align: left
    `,
  })}  
  ${propToStyle('margin')}
  ${propToStyle('padding')}
`;

export default function Paragraphy({ children }) {
  return (
    <TextBase>
      {children}
    </TextBase>
  );
}
