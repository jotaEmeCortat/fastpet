import React from 'react';
import styled, { css } from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export const TextBase = styled.h1`
  text-align: center;
  color:#070C0E;
  font-Size: 32px;
  font-weight:700;
  line-height: 1.25;
  ${breakpointsMedia({
    md: css`
      font-size: 46px;
      text-align: left
    `,
  })}  
  ${propToStyle('margin')}
  ${propToStyle('padding')}
  ${propToStyle('color')}
`;

export default function Title({ children }) {
  return (
    <TextBase>
      {children}
    </TextBase>
  );
}
