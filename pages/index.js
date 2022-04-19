
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
    </ImageWrapper>
    </Layout>
  )
}
