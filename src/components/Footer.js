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

const FooterBlocks = styled.div`
display: flex;
flex-direction: row;
font-size: 14px;
`

const ContactBlock = styled.div`
text-align: left;
width: 475px;

`

const LinkBlock = styled.div`
width: 350px;
display: flex;
flex-direction: column;
text-align: left;
`

const BooksBlock = styled.div`
display: flex;
flex-direction: row;
text-align: left;
padding: 10px;
`

const BooksSpacer = styled.div`
width: 300px;
`

const BookImage = styled.div`
padding: 20px;


`

export const Footer = (props) => {
  return (
    <FooterContainer>
      {/*
      //footer nav links if desired in the future

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
        <Link href="/schedule-event" passHref>
          <StyledLink>SCHEDULE AN EVENT</StyledLink>
        </Link>
      </NavContainer>
    */}

      <FooterBlocks>
    <ContactBlock>
      <h3>Contact:</h3>
      <p>Eric W. Gershman</p>
      <p>Executive Director</p>
      <p>The Norman Gershman Photographic Archives</p>
      <p>149 State Street<br/>Montpelier, VT 05601</p>
      <p></p>
      <p>802-498-4894</p>
    </ContactBlock>

    <div>

      <BooksBlock>
        <BooksSpacer>&nbsp;</BooksSpacer>
      </BooksBlock>
    </div>

    <LinkBlock>
        <h3>Press:</h3>
        <ul>
          <li>
            <Link href="https://www.yadvashem.org/yv/en/exhibitions/besa/norman-gershman.asp" passHref>
            <a target="_blank">Yad Vashem</a>
      </Link></li>

          <li>
            <Link href="https://diplomatonline.com/mag/2010/09/the-photographer-who-documents-heroes/diplomat_sep10034/" passHref>
            <a target="_blank">Diplomat Canada</a>
            </Link>
            </li>

            <li>
              <Link href="https://search.alexanderstreet.com/preview/work/bibliographic_entity%7Cvideo_work%7C3167244" passHref>
              <a target="_blank">Charles Osgood</a>
              </Link>
            </li>
          <li>
            <Link href="https://www.youtube.com/watch?v=YWeRgiprKjM" passHref>
              <a target="_blank">Weekly Zaman</a>
            </Link>
          </li>
          <li>
          <Link href="https://www.thedailybeast.com/jews-are-gods-people-like-us" passHref>
          <a target="_blank">The Daily Beast</a>
          </Link>
          </li>
        </ul>

    </LinkBlock>

      </FooterBlocks>
      <FooterTagline><p>Copyright &copy; 2022 Norman Gershman. All Rights Reserved.</p>&nbsp;|&nbsp;<Link href="https://www.vtapi.co" passHref><a target="_blank">vtapi.co</a></Link></FooterTagline>
    </FooterContainer>
  )
}
