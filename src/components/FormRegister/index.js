import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '../commons/TextFild';
import Button from '../commons/Button';

const Form = styled.form`
display: flex;
`;

export default function FormRegister() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  const [email, setEmail] = useState('');
  const eMail = email;
  window.localStorage.setItem('email', eMail);
  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        type="e-mail"
        placeholder="seu melhor e-mail"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <Button
        type="submit"
      >
        enviar
      </Button>
    </Form>
  );
}
