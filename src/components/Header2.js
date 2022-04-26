import styled from 'styled-components';
import Image from 'next/image'
import Link from 'next/link';

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
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

const LogoWrapper = styled.div`
display: flex;
justify-content: center;
margin-bottom: 40px;
`;

export const Header2 = (props) => {
  return (
    <NavContainer>
      <NavHeader>
      <Link href="/" passHref>
        <h1>NORMAN GERSHMAN PHOTOGRAPHIC ARCHIVE</h1>
      </Link>
      </NavHeader>
      <LogoWrapper>
      <Link href="/" passHref>
        <Image
          src="/img/layout/NG_ICON.webp"
          alt="Facebook"
          layout="fixed"
          width="70"
          height="70"
        />
      </Link>
      </LogoWrapper>
      <div>
        <Link href="/about" passHref>
          <StyledLink>ABOUT</StyledLink>
        </Link>
        <Link href="/archives" passHref>
          <StyledLink>THE ARCHIVE</StyledLink>
        </Link>
        <Link href="/global-partnerships" passHref>
          <StyledLink>GLOBAL PARTNERSHIPS</StyledLink>
        </Link>
        <Link href="/praise" passHref>
          <StyledLink>PRAISE</StyledLink>
        </Link>
        <Link href="/contact" passHref>
          <StyledLink>CONTACT</StyledLink>
        </Link>
        <Link href="/schedule-event" passHref>
          <StyledLink>SCHEDULE AN EVENT</StyledLink>
        </Link>
      </div>

    </NavContainer>
  )
}
