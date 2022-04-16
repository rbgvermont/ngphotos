import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';

import styles from '../styles/Home.module.css'

// Layout
import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 880px;
  margin: 0px auto;
`;

export default function Home() {
  return (

    <div>
      <Head>
        <title>ngphoto-cna</title>
      </Head>
      <main>
      <Container>
      <Header/>
      <h1>Homepage index content</h1>
      <Footer/>
      </Container>
      </main>
    </div>
  )
}
