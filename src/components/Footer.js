import Image from 'next/image'
import styled from 'styled-components';
import Link from 'next/link';

const FooterContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  text-align: right;
  justify-content: flex-end;
`;

const SocialContainer = styled.div`
display: flex;
flex-direction: row;
text-align: right;
justify-content: flex-end;

`;

const FooterTagline = styled.div`
font-size: 10px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: right;
`;

const SocialIcon = styled.div`
margin-right: 10px;
`

const StyledLink = styled.a`

  color: #FFEE59;
  padding: 20px;

  &:hover {
    cursor: pointer;
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 20px;
  font-size: 12px;
`;

export const Footer = (props) => {
  return (
    <FooterContainer>
      <NavContainer>
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
      </NavContainer>

      <SocialContainer>
      <SocialIcon>
        <Image
          src="/img/layout/facebook.webp"
          alt="Facebook"
          layout="fixed"
          width="35"
          height="35"
        />
      </SocialIcon>
      <SocialIcon>
        <Image
          src="/img/layout/instagram.webp"
          alt="Instagram"
          layout="fixed"
          width="35"
          height="35"
        />
      </SocialIcon>
      <SocialIcon>
        <Image
          src="/img/layout/Youtube.webp"
          alt="Instagram"
          layout="fixed"
          width="35"
          height="35"
        />
      </SocialIcon>
      <SocialIcon>
        <Image
          src="/img/layout/Pintrest.webp"
          alt="Pintrest"
          layout="fixed"
          width="35"
          height="35"
        />
      </SocialIcon>
      <SocialIcon>
        <Image
          src="/img/layout/email.webp"
          alt="Email"
          layout="fixed"
          width="35"
          height="35"
        />
      </SocialIcon>

      </SocialContainer>
      <FooterTagline><p>Copyright &copy; 2021 Norman Gershman. All Rights Reserved.</p>&nbsp;|&nbsp;<Link href="https://www.vtapi.co">vtapi.co</Link></FooterTagline>
    </FooterContainer>
  )
}
