import Link from 'next/link';
import Image from 'next/image';

import  Layout from '../src/components/Layout';
import styled from 'styled-components';

const PhotoRow = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
margin-bottom: 100px;
`

const PhotoCol = styled.div`
display: flex;
flex-direction: column;
`

export default function archive() {
  return (

    <Layout title="normangershman.com - the archive">
        <h1>THE ARCHIVE</h1>

      <PhotoRow>
        <PhotoCol>
        <Image src="/img/landscapes/landscape1b.jpg" alt="Landscapes"
          width={160} height={120}/>
          <Link href="/archive/landscapes" passHref>
            LANDSCAPES
          </Link>
        </PhotoCol>

        <PhotoCol>
        <Image src="/img/naturalworld/nature1b.jpg" alt="Natural World"
          width={160} height={120}/>
          <Link href="/archive/naturalworld" passHref>
            NATURAL WORLD
          </Link>
        </PhotoCol>

        <PhotoCol>
        <Image src="/img/ladiesofthepalace/icon.jpg" alt="Landscapes"
          width={160} height={140}/>
          <Link href="/archive/ladiesofthepalace" passHref>
            LADIES OF THE PALACE
          </Link>
        </PhotoCol>

        <PhotoCol>
        <Image src="/img/sovietportrait/ASP_02-earlyeveningmoscow.jpg" alt="Landscapes"
          width={160} height={140}/>
          <Link href="/archive/asovietportrait" passHref>
            A SOVIET PORTRAIT
          </Link>
        </PhotoCol>

      </PhotoRow>


      <PhotoRow>
        <PhotoCol>
        <Image src="/img/theycallitlove/family1b.jpg" alt="They Call it Love"
          width={160} height={120}/>
          <Link href="/archive/theycallitlove" passHref>
            THEY CALL IT LOVE
          </Link>
        </PhotoCol>

        <PhotoCol>
        <Image src="/img/colorfantastic/color1b.jpg" alt="Color Fantastic"
          width={160} height={120}/>
          <Link href="/archive/colorfantastic" passHref>
            COLOR FANTASTIC
          </Link>
        </PhotoCol>

        <PhotoCol>
        <Image src="/img/besa/BESA1b.jpg" alt="BESA"
          width={120} height={180}/>
           <Link href="/archive/besa" passHref>
            BESA (LIMITED AVAILABILITY)
          </Link>
        </PhotoCol>



      </PhotoRow>

    </Layout>
  )
}
