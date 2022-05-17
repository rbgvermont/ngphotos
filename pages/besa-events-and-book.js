import styled from 'styled-components';
import  Layout from '../src/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

const ImageWrapper = styled.div`
width: 400px;
float: right;
padding-left: 30px;
`

export default function Besaeventsandbook() {
  return (

    <Layout title="normangershman.com - besa - events and book">
      <h1>BESA Events and Book</h1>

      <p>
      <ImageWrapper>
        <Image src="/img/besa-cover.png" alt="BESA Book" width={1044} height={1028} />
      </ImageWrapper>
        Besa is a code of honor deeply rooted in Albanian culture and incorporated in the faith of Albanian Muslims.  It dictates a moral behavior so absolute that nonadherence brings shame and dishonor on oneself and one&amp;s family.  Simply stated, it demands that one take responsibility for the lives of others in their time of need.  In Albania and Kosovo, Muslims sheltered, at grave risk to themselves and their families, not only the Jews of their cities and villages but also thousands of Jews fleeing the Nazis from other European countries.
        <br/><br/>
        Over a five-year period, photographer Norman H. Gershman sought out, photographed, and collected these powerful and moving stories of heroism in Besa: Muslims Who Saved Jews in World War II.
        <br/><br/>
        This coffee table book reveals a hidden period in history, slowly emerging after the fall of an isolationist communist regime, and shows the compassionate side of ordinary people in saving Jews. They acted within their true Muslim faith.
        <br/><br/>
        To order: visit<br/><br/> <Link href="https://www.amazon.com/Besa-Muslims-Who-Saved-Jews/dp/0815609345"><a target="_blank">https://www.amazon.com/Besa-Muslims-Who-Saved-Jews/dp/0815609345</a></Link>
        </p>

    </Layout>
  )
}
