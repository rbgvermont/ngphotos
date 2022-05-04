import  Layout from '../src/components/Layout';
import Image from 'next/image'

export default function Press() {
  return (

    <Layout title="normangershman.com - about">
      <h1>About</h1>
      <p>Norman Gershman, 1932-2019, was a humanities photographer who lived and worked in Tribeca, New York City and Aspen Colorado. Following his apprenticeships with the legendary Ansel Adams, Roman Vishniac, and Cornell Capa, Norman&apos;s  Leica camera became permanently attached to his person. Norman&apos;s groundbreaking BESA show was the first photographic exhibit to honor righteous Muslims who saved Jewish lives during WWII. Gershman&apos;s work is now exhibited in the permanent collection of the International Center of Photography, Yad Vashem, Hebrew Union College, The Aspen Institute of Art, and the Brooklyn Museum.
</p>
<Image src="/img/gershman_b.jpeg" alt="Norman Gershman" width="860" height="695" />
    </Layout>
  )
}
