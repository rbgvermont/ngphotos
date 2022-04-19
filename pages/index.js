
import styled from 'styled-components';
import  Layout from '../src/components/Layout';
import Image from 'next/image';

const ImageWrapper = styled.div`
width: 100%;
margin-top: 20px;
padding-left: 20px;
padding-right: 20px;
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
      <p>Norman Gershman loved people. He was always in pursuit of what he called EYE CONTACT, a moment of deep connection between two people. His camera, often a favorite Leica, was permanently attached to his body, ever at the ready. Around the world and in his own neighborhood whether photographing his family and friends or strangers, he considered encountering another soul a privilege, a gift the person gave to him that he, in turn, offered to others so that they, too, could connect.</p>
      <p>Since his peaceful passing in 2019 we have assembled a world class team so that, as per his wishes, his work continues to be shared. From his groundbreaking Besa work, now in permanent collections around the to upcoming shows that are currently being curated. Stay tuned!</p>
      <p>Photography was his gift to us and to the world. We are honored to share his legacy with you.</p>
      <p>Thank you for visiting.</p>
      <p>Leslie, Eric and Roger, May, 2022</p>
    </ImageWrapper>
    </Layout>
  )
}
