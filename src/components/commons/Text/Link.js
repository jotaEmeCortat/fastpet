import React from 'react';
import styled, { css } from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export const TextBase = styled.a`
  text-align: center;
  color:#070C0E;
  font-Size: 18px;
  font-weight:500;
  line-height: 1.25;
  ${breakpointsMedia({
    md: css`
      font-size: 24px;
      text-align: left
    `,
  })}  
  ${propToStyle('margin')}
  ${propToStyle('padding')}
`;

export default function Paragraphy({ children, href }) {
  return (
    <TextBase href={href}>
      {children}
    </TextBase>
  );
}
