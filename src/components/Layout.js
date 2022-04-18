import Head from 'next/head';
import styled from 'styled-components';

// Layout
import { Header } from './Header.js';
import { Footer } from './Footer.js';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 980px;
  margin: 0px auto;
`;

export default function Layout( props ) {

  return (
    <>
    <Head>
      <title>{props.title}</title>
    </Head>
      <Container>
        <Header/>
        {props.children}
        <Footer/>
      </Container>
    </>
  )
}