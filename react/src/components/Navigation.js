import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const StyledNav = styled.nav`
  width: 100%;
`;

const NavMenu = styled.ul`
  display: flex;
`;

const NavMenuItem = styled.li`
  padding: 0 2rem;

  &:first-child {
    padding-left: 0;
  }

  & > a {
    color: #333;
    display: block;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 3.456;
    padding: 5px 0;
    text-decoration: none;

    &.active {
      color: #007b5f;
      border-bottom: 4px solid #007b5f;
    }
  }
`;

const Navigation = () => (
  <StyledNav>
    <NavMenu>
      <NavMenuItem>
        <NavLink exact to="/" activeClassName="active">
          Hjem
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/events" activeClassName="active">
          Events
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/about" activeClassName="active">
          Om
        </NavLink>
      </NavMenuItem>
    </NavMenu>
  </StyledNav>
);

export default Navigation;
