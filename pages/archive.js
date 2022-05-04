import Link from 'next/link';
import Image from 'next/image';

import  Layout from '../src/components/Layout';

export default function archive() {
  return (

    <Layout title="normangershman.com - the archive">
        <h1>THE ARCHIVE</h1>

<p>Each collection is a separate body of work by category, interest and aesthetics. Some prints are already available. More will be available monthly or sooner. Please do inquire if a particular one is of interest.</p>



        <Link href="/archive/landscapes" passHref>
          <p>LANDSCAPES</p>
        </Link>

        <Link href="/archive/naturalworld" passHref>
          <p>NATURAL WORLD</p>
        </Link>

        <Link href="/archive/ladiesofthepalace" passHref>
          <p>LADIES OF THE PALACE</p>
        </Link>

        <Link href="/archive/asovietportrait" passHref>
          <p>A SOVIET PORTRAIT</p>
        </Link>

        <Link href="/archive/theycallitlove" passHref>
          <p>THEY CALL IT LOVE</p>
        </Link>

        <Link href="/archive/colorfantastic" passHref>
          <p>COLOR FANTASTIC</p>
        </Link>

        <Link href="/archive/besa" passHref>
          <p>BESA (LIMITED AVAILABILITY)</p>
        </Link>


    </Layout>
  )
}
