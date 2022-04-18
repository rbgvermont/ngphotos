import styled from 'styled-components';
import Link from 'next/link';

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledLink = styled.a`

  color: #FFEE59;
  padding: 20px;

  &:hover {
    cursor: pointer;
  }
`;

const NavHeader = styled.div`
color: #757575;
font-weight: light;
display: flex;
width: 100%:
align-items: center;
font-size: 20px;
text-align: center;
`;

export const Header = (props) => {
  return (
    <NavContainer>
      <NavHeader>
        <h1>NORNAM GERSHMAN PHOTOGRAPHIC ARCHIVE</h1>
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
