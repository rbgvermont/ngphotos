import styled from 'styled-components';
import Link from 'next/link';

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledLink = styled.a`
  color: red;
  padding: 20px;

  &:hover {
    color: blue;
    cursor: pointer;
  }
`;

const NavHeader = styled.div`
display: flex;
width: 100%:
align-items: center;
font-size: 37px;
font-family: "Lato", Sans-Serif;
text-align: center;
`;

export const Header = (props) => {
  return (
    <NavContainer>
      <NavHeader>
        <h1>Norman Gershman Photographic Archive</h1>
      </NavHeader>
      <div>
        <Link href="/" passHref>
          <StyledLink>HOME</StyledLink>
        </Link>
        <Link href="/welcome" passHref>
          <StyledLink>WELCOME</StyledLink>
        </Link>
        <Link href="/archives" passHref>
          <StyledLink>ARCHIVES</StyledLink>
        </Link>
        <Link href="/inquiries" passHref>
          <StyledLink>INQUIRIES</StyledLink>
        </Link>
        <Link href="/contact" passHref>
          <StyledLink>CONTACT</StyledLink>
        </Link>
      </div>
    </NavContainer>
  )
}
