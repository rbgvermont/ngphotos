import Link from 'next/link';
import Image from 'next/image';

import  Layout from '../src/components/Layout';

export default function Archives() {
  return (

    <Layout title="normangershman.com - archives">
        <h1>Archives</h1>

        <p>FACES OF TIME</p>
<p>THEY CALL IT LOVE...</p>
<p>BESA</p>
<p>NATURAL WORLD</p>
<p>A SOVIET PORTRAIT</p>
<p>EYE CONTACT</p>
<p>CITYSCAPES</p>
<p>LANDSCAPES</p>

<Image src='/img/ladiesofthepalace/icon.jpg'
    width="200"
    height="200"
    />
<Link href="/archives/ladiesofthepalace">
  <p>LADIES OF THE PALACE</p>

</Link>
    </Layout>
  )
}
