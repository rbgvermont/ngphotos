import  Layout from '../src/components/Layout';
import Image from 'next/image';
import styled from 'styled-components';

const SideBySide = styled.div`
width: 100%;
display: flex;
flex-direction: row;
`;

const YadImage = styled.div`
height: 100%;

width: 700px;
margin-left: 10px;
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

          <p>Years later, King Zog, in exile, found out that the Ostereichers, Austrian court jewelers whom he had rescued, were alive but destitute in England. He promptly returned the crown jewels he had commissioned from them, to give this family an opportunity to rebuild their lives. “There was no government conspiracy, no underground railroad, no organized resistance — only individual Albanians acting to save lives,” says Mr. Gershman. “My portraits and their stories are meant to reflect their humanity, their dignity, their religious and moral convictions, and their quiet courage. Gershman further explains this extraordinary code of honor: “If there is a knock on the door, take responsibility because every knock on the door is a blessing from God.”  As a photographer and Jew, this is visceral in me and the reason why I was compelled to tell this story. To view the exhibit, visit https://www.yadvashem.org/ready2print/besa.html
          </p>
          </div>
          <YadImage>
            <Image src="/img/yad-vashem.jpeg" width={462} height={462} alt="Yad Vashem" layout="fixed" />
          </YadImage>
          </SideBySide>


			<h2>Hebrew Union College Traveling Exhibit</h2>
      <p>The Hebrew Union College is a center of innovation for Jewish life to provide knowledge, commitment, vision, and expertise to strengthen and transform the Jewish community and larger world. The estate of Norman Gershman has maintained a decade-long partnership with HUC to coordinate the US exposure of the BESA show. For more information, visit: http://huc.edu/search/site/norman%20gershman</p>

      <p>(US Only): Eric will provide an overview but we need to links to Hebrew Union College, http://huc.edu/research/museums/huc-jir-museum-in-new-york/exhibition-archive/albanian-muslim-rescuers-during-holocaust-photographs-norman-gershman</p>

<h2>International Center for Photography Grant.</h2>
<p>Founded in 1974, the ICP is the world&quot;s leading institution dedicated to photography and visual culture. Norman studied with ICP founder Cornell Capa after discovering his vision for “concerned photography” - socially and politically minded images that can educate and change the world.</p>

<p>Today, the estate of Norman Gershman has established a permanent endowment to provide an annual scholarship for students in ICP&quot;s renowned Imagemakers program. Several of Mr. Gershman&quot;s works have been acquired into the permanent collection of the ICP.</p>

<p>Eric will provide an overview but we need to links to to the International Center for Photography Imagemakers, https://www.icp.org/school/teen-academy</p>
			 <h2>Syracuse University Press</h2>
       <p>Eric will provide an overview but we need to links to Syracuse University Press, https://press.syr.edu/supressbooks/884/besa/</p>

    </Layout>
  )
}
