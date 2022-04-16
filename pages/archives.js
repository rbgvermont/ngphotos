import Head from 'next/head'


// Layout
import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';

export default function Archives() {
  return (

    <div>
      <Head>
        <title>ngphoto-cna</title>
      </Head>
      <main>
      <Header>
      </Header>
      <h1>Archives</h1>
      <Footer></Footer>
      </main>
    </div>
  )
}
