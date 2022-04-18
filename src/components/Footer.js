import Image from 'next/image'
import styled from 'styled-components';

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
`;

const SocialIcon = styled.div`
margin-right: 10px;
`

export const Footer = (props) => {
  return (
    <FooterContainer>
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
      <FooterTagline><p>Copyright &copy; 2021 Norman Gershman. All Rights Reserved.</p></FooterTagline>
    </FooterContainer>
  )
}
