import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`;

const SocialContainer = styled.div`

`;

export const Footer = (props) => {
  return (
    <FooterContainer>
      <SocialContainer>LINK LINK LINK</SocialContainer>
    </FooterContainer>
  )
}
