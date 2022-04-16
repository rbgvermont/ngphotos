
import styled from 'styled-components';
import  Layout from '../src/components/Layout';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 880px;
  margin: 0px auto;
`;

export default function Home() {
  return (
    <Layout>
        <h1>test</h1>
    </Layout>
  )
}
