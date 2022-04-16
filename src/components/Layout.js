
import styled from 'styled-components';

// Layout
import { Header } from './Header.js';
import { Footer } from './Footer.js';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 880px;
  margin: 0px auto;
`;

export default function Layout( { children }) {

  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}