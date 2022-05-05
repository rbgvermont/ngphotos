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

const BookImage = styled.div`
padding: 20px;


`

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



        <div>
        <h3>Books:</h3>
          <p>Over a five-year period, photographer Norman H. Gershman sought out, photographed, and collected these powerful and moving stories of heroism in Besa: Muslims Who Saved Jews in World War II.</p>
          <p>This coffee table book reveals a hidden period in history, slowly emerging after the fall of an isolationist communist regime, and shows the compassionate side of ordinary people in saving Jews. They acted within their true Muslim faith.</p>
        </div>
        <BookImage>
          <Image src="/img/besa-book.jpeg" alt="BESA Book" width={300} height={301} />
        </BookImage>
      </BooksBlock>
    </div>

    <LinkBlock>
        <h3>Press:</h3>
        <ul>
          <li>
            <Link href="https://www.yadvashem.org/yv/en/exhibitions/besa/norman-gershman.asp" passHref>
        Yad Vashem
      </Link></li>

          <li>
            <Link href="https://diplomatonline.com/mag/2010/09/the-photographer-who-documents-heroes/diplomat_sep10034/" passHref>
        Diplomat Canada
            </Link>
            </li>

            <li>
              <Link href=" https://search.alexanderstreet.com/preview/work/bibliographic_entity%7Cvideo_work%7C3167244" passHref>
                Charles Osgood
              </Link>
            </li>
          <li>
            <Link href="https://www.youtube.com/watch?v=YWeRgiprKjM" passHref>
              Weekly Zaman
            </Link>
          </li>
          <li>
          <Link href="https://www.thedailybeast.com/jews-are-gods-people-like-us" passHref>
            The Daily Beast
          </Link>
          </li>
        </ul>

    </LinkBlock>

      </FooterBlocks>
      <FooterTagline><p>Copyright &copy; 2022 Norman Gershman. All Rights Reserved.</p>&nbsp;|&nbsp;<Link href="https://www.vtapi.co">vtapi.co</Link></FooterTagline>
    </FooterContainer>
  )
}
