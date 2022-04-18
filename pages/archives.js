import Link from 'next/link';
import Image from 'next/image';

import  Layout from '../src/components/Layout';

export default function Archives() {
  return (

    <Layout title="normangershman.com - archives">
        <h1>ARCHIVE COLLECTION</h1>

<p>Each collection is a separate body of work by category, interest and aesthetics. Some prints are already available. More will be available monthly or sooner. Please do inquire if a particular one is of interest.</p>


        <Link href="/archives/ladiesofthepalace" passHref>
          <p>LADIES OF THE PALACE</p>
        </Link>

        <Link href="/archives/asovietportrait" passHref>
          <p>A SOVIET PORTRAIT</p>
        </Link>

        <Link href="/archives/photography-thoughts" passHref>
          <p>PHOTOGRAPHY AND THOUGHTS</p>
        </Link>

        <hr color="#FFFFFF"/>

        <p>FACES OF TIME</p>
        <p>THEY CALL IT LOVE...</p>
        <p>BESA</p>
        <p>NATURAL WORLD</p>
        <p>EYE CONTACT</p>
        <p>CITYSCAPES</p>
        <p>LANDSCAPES</p>


    </Layout>
  )
}
