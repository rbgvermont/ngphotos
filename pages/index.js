
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

<QuoteBlock>
<JimmyPic><Image
  src="/img/jimmy-carter-wikipedia.jpeg"
  alt="Jimmy Carter"
  width={180}
  height={241}
  layout="fixed"
  /></JimmyPic>
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
<JimmyPic><Image
  src="/img/Jehan_Sadat_1995.jpeg"
  alt="Madam Jehan Sadat"
  width={180}
  height={241}
  layout="fixed"
  /></JimmyPic>
</QuoteBlock>


{/*
      <p>Norman Gershman loved people. He was always in pursuit of what he called EYE CONTACT, a moment of deep connection between two people. His camera, often a favorite Leica, was permanently attached to his body, ever at the ready. Around the world and in his own neighborhood whether photographing his family and friends or strangers, he considered encountering another soul a privilege, a gift the person gave to him that he, in turn, offered to others so that they, too, could connect.</p>
      <p>Since his peaceful passing in 2019 we have assembled a world class team so that, as per his wishes, his work continues to be shared. From his groundbreaking Besa work, now in permanent collections around the to upcoming shows that are currently being curated. Stay tuned!</p>
      <p>Photography was his gift to us and to the world. We are honored to share his legacy with you.</p>
      <p>Thank you for visiting.</p>
      <p>Leslie, Eric and Roger, May, 2022</p>

  /*/}
    </ImageWrapper>
    </Layout>
  )
}
