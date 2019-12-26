import React from "react";
import styled from "styled-components";

// import icons
import { MdDashboard, MdEvent, MdSettings, MdClose } from "react-icons/md";
import { FaStar, FaUsers } from "react-icons/fa";
import { TiNews } from "react-icons/ti";
import { GiScrewdriver, GiHamburgerMenu } from "react-icons/gi";
import { GoSignIn } from "react-icons/go";

const HeaderModule = ({ hamburgerActive, _hamburgerToggle }) => {
  return (
    <Header>
      <Hamburger>
        {!hamburgerActive && (
          <InActiveContainer onClick={() => _hamburgerToggle()}>
            <GiHamburgerMenu />
          </InActiveContainer>
        )}
        {hamburgerActive && (
          <ActiveContainer onClick={() => _hamburgerToggle()}>
            <MdClose />
          </ActiveContainer>
        )}
      </Hamburger>
      {hamburgerActive && (
        <CommunityHeaderContainer>
          <CommunityHeading>
            community<CommunityHeading>manager</CommunityHeading>
          </CommunityHeading>
          <Navigation>
            <NavListContainer>
              <NavListItem>
                <MdDashboard />
                <NavItem href="#Fixme">dashboard</NavItem>
              </NavListItem>
              <NavListItem className="active">
                <MdEvent />
                <NavItem href="#Fixme">events</NavItem>
              </NavListItem>
              <NavListItem>
                <FaStar />
                <NavItem href="#Fixme">facilities</NavItem>
              </NavListItem>
              <NavListItem>
                <TiNews />
                <NavItem href="#Fixme">news</NavItem>
              </NavListItem>
              <NavListItem>
                <GiScrewdriver />
                <NavItem href="#Fixme">maintenance</NavItem>
              </NavListItem>
              <NavListItem>
                <GoSignIn />
                <NavItem href="#Fixme">sign ins</NavItem>
              </NavListItem>
              <NavListItem>
                <FaUsers />
                <NavItem href="#Fixme">users</NavItem>
              </NavListItem>
              <NavListItem>
                <MdSettings />
                <NavItem href="#Fixme">settings</NavItem>
              </NavListItem>
            </NavListContainer>
          </Navigation>
        </CommunityHeaderContainer>
      )}
    </Header>
  );
};

const Header = styled.header`
  padding-top: 21px;
  flex-basis: 13.3%;

  @media (max-width: 1024px) {
    text-align: center;
    position: relative;
  }
`;

const CommunityHeaderContainer = styled.div`
  @media (max-width: 1024px) {
    position: absolute;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 5;
    padding-bottom: 15px;
  }
`;

const CommunityHeading = styled.span`
  color: rgb(119, 130, 158);
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10px;
  display: inline-block;
  margin-bottom: 55px;

  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }

  span {
    color: rgb(117, 102, 243);
    margin-bottom: 0;
  }
`;

const Navigation = styled.nav`
  height: calc(100vh - 86px);
  position: relative;

  @media (max-width: 1024px) {
    height: auto;
  }
`;

const NavListContainer = styled.ul`
  @media (max-width: 1024px) {
    display: inline-block;
  }
`;

const NavListItem = styled.li`
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  position: relative;

  &:last-of-type {
    margin-bottom: 0;
    position: absolute;
    bottom: 24px;

    @media (max-width: 1024px) {
      position: unset;
    }
  }

  &:hover,
  &.active {
    a,
    svg {
      color: rgb(117, 102, 243);
      font-weight: bold;
    }

    &::before {
      content: "";
      width: 3px;
      height: 3px;
      background-color: rgb(117, 102, 243);
      border-radius: 50%;
      position: absolute;
      z-index: 5;
      left: -8px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  svg {
    color: rgb(119, 130, 158);
  }
`;

const NavItem = styled.a`
  margin-left: 15px;
  color: rgb(119, 130, 158);
  text-transform: capitalize;
  font-size: 12px;
  text-decoration: none;
`;

const Hamburger = styled.div`
  display: none;
  margin-bottom: 10px;
  color: rgb(117, 102, 243);
  font-size: 30px;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const InActiveContainer = styled.div`
  cursor: pointer;
`;

const ActiveContainer = styled.div`
  cursor: pointer;
`;

export default HeaderModule;
