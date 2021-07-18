import React from 'react';
import Link from '../commons/Text/Link';
import { MenuWrapper } from './style/MenuWrapper';
import { links } from './links';
import { ReactComponent as Logo } from '../../Assets/logo.svg';
import { ReactComponent as Carrinho } from '../../Assets/carrinho.svg';

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <a href="./">
          <Logo />
        </a>

      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide
        as="ul"
        style={{
          padding: '18px 0 0 0',
        }}
      >
        {links.map((link) => (
          <li key={link.url}>
            <Link
              href={link.url}
              style={{
                cursor: 'pointer',
                padding: '32px 0 0 0',
              }}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Carrinho />
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
