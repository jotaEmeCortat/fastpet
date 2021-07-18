import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  transition: ${({ theme }) => theme.transition};
  background-color: #FDBF12;
  color:#070C0E;
  border-radius: 8px;
  border: 0;
  outline: 0;
  cursor: pointer;
  padding: 0px 36px;
  opacity: 1;
  font-size: 20px;
  font-weight: bold;
  margin-left: 24px;

  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default function Button({ children }) {
  return (
    <ButtonWrapper>
      {children}
    </ButtonWrapper>
  );
}
