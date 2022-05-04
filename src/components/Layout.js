import Head from 'next/head';
import styled from 'styled-components';

// Layout
import { Header } from './Header.js';
import { Header3 } from './Header3.js';
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
        <Header3/>
        {props.children}
        <Footer/>
      </Container>
    </>
  )
}