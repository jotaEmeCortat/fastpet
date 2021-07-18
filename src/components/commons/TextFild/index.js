import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  margin-bottom: 17px;
`;

const Input = styled.input`
  width: 100%;
  border: 2px solid #070C0E;
  padding: 24px 36px ;
  outline: 0;
  border-radius: 8px;
  font-size: 20px;
`;

export default function TextField({
  type,
  placeholder,
  name,
  value,
  onChange,
  ...props
}) {
  return (
    <InputWrapper>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
    </InputWrapper>
  );
}
