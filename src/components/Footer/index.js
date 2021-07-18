import React from 'react';
import Paragraphy from '../commons/Text/Link';
import { FooterWrapper } from './styles/FooterWrapper';

export default function Footer(props) {
  return (
    <FooterWrapper {...props}>
      <Paragraphy>
        Criado durante o hiring coders
      </Paragraphy>
    </FooterWrapper>
  );
}
