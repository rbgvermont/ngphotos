
import styled from 'styled-components';
import  Layout from '../src/components/Layout';
import Image from 'next/image';

const ImageWrapper = styled.div`
width: 100%;
margin-top: 20px;
padding-left: 20px;
padding-right: 20px;
`;

const QuoteBlock = styled.div`
display: flex;
flex-direction: row;
margin-top: 30px;
font-size: 18px;
letter-spacing: 3px;
font-style: italic;
`

const JimmyPic = styled.div`
margin-right: 40px;
`
const MadamPic = styled.div`
margin-left: 40px;
`

const QuoteWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: left;
justify-content: center;
`;

const RightQuoteWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: left;
justify-content: center;
`;

const WelcomeText = styled.div`
width: 100%;
font-size: 20px;
text-align: center;
`

export default function Home() {
  return (
    <Layout title="normangershman.com - home">
      <ImageWrapper>
        <Image
          src="/img/ABOUT.webp"
          alt="Norman Gershman"
          sizes="100%"
          layout="responsive"
          objectFit="cover"
          width="900"
          height="700"
        />
      <WelcomeText>
        <p>Welcome from the Gershman Family</p>
      </WelcomeText>
        <Image
          src="/img/norman_homepage.png"
          alt="Norman Gershman"
          sizes="100%"
          layout="responsive"
          objectFit="cover"
          width="900"
          height="700"
        />


      <QuoteBlock>
          <QuoteWrapper>
            <p>&quot;I hope that these photos and their stories become widely known. They offer hope for a future in which Muslims and Jews can overcome their conflicts and focus on their common humanity.&quot;</p>
          <p>—President Jimmy Carter</p>
          </QuoteWrapper>
      </QuoteBlock>

      <QuoteBlock>

          <QuoteWrapper>
          <p>&quot;Through the eyes of Norman H. Gershman, we can see that beyond our individual identities and desires, there is a common core of self, an essential humanity whose nature is peace, whose expression is thought, and whose action is unconditional love.&quot;</p>
          <p>—Madam Jehan Sadat</p>
          </QuoteWrapper>

      </QuoteBlock>

      </ImageWrapper>
    </Layout>
  )
}
