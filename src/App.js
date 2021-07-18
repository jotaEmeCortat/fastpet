import React from 'react';
import { Box } from './components/layout/Box';
import { Grid } from './components/layout/Grid';
import Menu from './components/Menu';
import Title from './components/commons/Text/Title';
import { ReactComponent as Produtos } from './Assets/produtos.svg';
import Paragraphy from './components/commons/Text/Paragraphy';
import Footer from './components/Footer';
import FormRegister from './components/FormRegister';

function App() {
  return (
    <>

      <Box
        display="flex"
        flex="1"
        flexDirection="column"
      >
        <Menu />
        <Grid.Container
          margin={{
            xs: '32px auto 0 auto',
            md: '0px auto 0 auto',
            xl: '0px auto 0 auto',
          }}
        >
          <Grid.Row>
            <Grid.Col
              value={{ xs: 12, md: 6 }}
              offset={{ xs: 0, md: 0 }}
              display="flex"
              alignItems="flex-start"
              justifyContent="center"
              flexDirection="column"
              /* padding="0 32px 0 0" */
            >
              <Title>
                50% off no seu primeiro pedido com o código #gamaAcademy
              </Title>
              <Paragraphy>
                Cadastre-se para receber nossas novidades e outras ofertas por e-mail
              </Paragraphy>

              <FormRegister />

            </Grid.Col>
            <Grid.Col
              value={{ xs: 12, md: 6 }}
              offset={{ xs: 0, md: 0 }}
              display="flex"
              alignItems="flex-end"
              justifyContent="center"
              style={{
                margin: '-80px 0 -64px 0',
              }}
            >
              <Produtos />
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
        <Footer />
      </Box>
    </>
  );
}

export default App;
