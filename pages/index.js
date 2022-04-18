
import styled from 'styled-components';
import  Layout from '../src/components/Layout';
import Image from 'next/image'

const ImageWrapper = styled.div`
margin-top: 20px;

max-width: 800px;

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
      width="800"
      height="800"


    />
    </ImageWrapper>
    </Layout>
  )
}
