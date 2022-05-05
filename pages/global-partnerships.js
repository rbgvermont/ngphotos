import  Layout from '../src/components/Layout';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';

const SideBySide = styled.div`
width: 100%;
display: flex;
flex-direction: row;
`;

const YadImage = styled.div`
margin-left: 20px;
padding-top: 30px;
`;



const HebrewRow = styled.div`
display: flex;
flex-direction: row;
`

const HebrewCopy = styled.div`
margin-left: 20px;
`

const ICPRow = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;

`;


export default function Globalpartnerships() {
  return (

    <Layout title="normangershman.com - global partnerships">
            <h1>Global Partnerships</h1>
          <SideBySide>
          <div>
           <h2>Yad VashemTraveling Exhibit</h2>
           <p>In 2003, Norman Gershman traveled to Albania and Kosova with photographer Stuart Huck from Aspen, Colorado to meet,  and photograph the descendents of Albanian rescuers of Jewish people during WWII.</p>

          <p>In his interviews, he always asked them why they had rescued Jews. Their response was BESA, the code of honor deeply rooted in Albanian culture and incorporated in the faith of Albanian Muslims, who believe that every man is his brother&quot;s keeper. It exemplifies what is possible when humans act at their highest potential.  People fought for the privilege of saving a Jew, not killing one. Albania&quot;s King Zog personally issued more than 400 visas. Among the people he rescued were 13-year-old Fritzi Weitzman and her family of 11, from Vienna. He helped them to re-establish the family&quot;s photography business in Albania, and rescued one of their relatives from a concentration camp.</p>

          <p>Years later, King Zog, in exile, found out that the Ostereichers, Austrian court jewelers whom he had rescued, were alive but destitute in England. He promptly returned the crown jewels he had commissioned from them, to give this family an opportunity to rebuild their lives. “There was no government conspiracy, no underground railroad, no organized resistance — only individual Albanians acting to save lives,” says Mr. Gershman. “My portraits and their stories are meant to reflect their humanity, their dignity, their religious and moral convictions, and their quiet courage. Gershman further explains this extraordinary code of honor: “If there is a knock on the door, take responsibility because every knock on the door is a blessing from God.”  As a photographer and Jew, this is visceral in me and the reason why I was compelled to tell this story. </p>

          <p>To view the exhibit, visit <Link href="https://www.yadvashem.org/ready2print/besa.html">https://www.yadvashem.org/ready2print/besa.html</Link>
          </p>
          </div>
          <YadImage>
            <Image src="/img/yad-vashem.jpeg" width={462} height={462} alt="Yad Vashem" layout="fixed" />
          </YadImage>
          </SideBySide>

      <HebrewRow>
      <div>
      <Image src="/img/hebrew-union.png" width={554} height={314} alt="Hebrew Union College" layout="fixed" />
      </div>
      <div>

      <HebrewCopy>
      <h2>Hebrew Union College Traveling Exhibit</h2>
      <p>The Hebrew Union College is a center of innovation for Jewish life to provide knowledge, commitment, vision, and expertise to strengthen and transform the Jewish community and larger world. The estate of Norman Gershman has maintained a decade-long partnership with HUC to coordinate the US exposure of the BESA show.</p>
      <p>For more information, visit: <Link href="http://huc.edu/search/site/norman%20gershman">http://huc.edu/search/site/norman%20gershman</Link></p>

      </HebrewCopy>
      </div>

      </HebrewRow>






<h2>International Center for Photography Grant.</h2>
<p>Founded in 1974, the ICP is the world&quot;s leading institution dedicated to photography and visual culture. Norman studied with ICP founder Cornell Capa after discovering his vision for “concerned photography” - socially and politically minded images that can educate and change the world.</p>
<ICPRow>
  <Image src="/img/icp1.jpeg" width={320} height={274} alt="International Center for Photography 1" layout="fixed" />
  <Image src="/img/icp2.jpeg" width={320} height={240} alt="International Center for Photography 2" layout="fixed" />
  <Image src="/img/icp3.jpeg" width={206} height={320} alt="International Center for Photography 3" layout="fixed" />
</ICPRow>

<p>Today, the estate of Norman Gershman has established a permanent endowment to provide an annual scholarship for students in ICP&quot;s renowned Imagemakers program. Several of Mr. Gershman&quot;s works have been acquired into the permanent collection of the ICP.</p>

</Layout>
  )
}
