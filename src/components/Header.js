import styled from 'styled-components';
import Link from 'next/link';

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const NavLink = styled(Link)`
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
        <NavLink href="/">HOME</NavLink>
        <NavLink href="/welcome">WELCOME
        </NavLink>
        <NavLink href="/archives">
          ARCHIVES
        </NavLink>
        <NavLink href="/inquiries">
          INQUIRIES
        </NavLink>
        <NavLink href="/contact">
          CONTACT
        </NavLink>
      </div>
    </NavContainer>
  )
}
