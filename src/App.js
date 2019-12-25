import React from "react";
import "./App.css";
import styled from "styled-components";
import eventsData from "./data";

// import icons
import {
  MdDashboard,
  MdEvent,
  MdSettings,
  MdKeyboardArrowDown,
  MdFormatListBulleted,
  MdEdit
} from "react-icons/md";
import { FaStar, FaUsers, FaBell, FaRegCalendar } from "react-icons/fa";
import { TiNews } from "react-icons/ti";
import { GiScrewdriver } from "react-icons/gi";
import { GoSignIn } from "react-icons/go";
import { FiPlus, FiSearch, FiGrid } from "react-icons/fi";

class App extends React.Component {
  componentDidMount() {
    console.log("componentDidMount", this._getEventsData());
  }

  // get events Data
  _getEventsData = () => {
    let data = eventsData;

    // check if browser supports local storage
    if (typeof Storage !== "undefined") {
      localStorage.setItem("data", JSON.stringify(eventsData));

      data = JSON.parse(localStorage.getItem("data"));
    }

    return data;
  };

  render() {
    return (
      <>
        <Header>
          <Wrapper>
            <CommunityHeading className="community">
              community<CommunityHeading>manager</CommunityHeading>
            </CommunityHeading>
            <Navigation>
              <NavListContainer>
                <NavListItem>
                  <MdDashboard />
                  <NavItem href="#Fixme">dashboard</NavItem>
                </NavListItem>
                <NavListItem>
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
          </Wrapper>
        </Header>
        <Main>
          <NewEventPanel className="NewEventPanel">
            <Wrapper>
              <AddEvent className="AddEvent">
                <NewEventTitle className="NewEventTitle">
                  new event
                </NewEventTitle>
                <FiPlus />
              </AddEvent>
              <MainEventsMenu className="MainEventsMenu">
                <EventsTitle className="EventsTitle">events</EventsTitle>
                <EventsMenu className="EventsMenu">
                  <EventsMenuList>
                    <EventsNumber className="EventsNumber">87</EventsNumber>
                    <EventDesc className="EventDesc">events</EventDesc>
                  </EventsMenuList>
                  <EventsMenuList>
                    <EventsNumber className="EventsNumber">40</EventsNumber>
                    <EventDesc className="EventDesc">Upcoming events</EventDesc>
                  </EventsMenuList>
                  <EventsMenuList>
                    <EventsNumber className="EventsNumber">6</EventsNumber>
                    <EventDesc className="EventDesc">
                      Cancelled events
                    </EventDesc>
                  </EventsMenuList>
                </EventsMenu>
              </MainEventsMenu>
            </Wrapper>
          </NewEventPanel>
        </Main>
      </>
    );
  }
}

const Wrapper = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

const CommunityHeading = styled.span``;

const Navigation = styled.nav``;

const NavListContainer = styled.ul``;

const NavListItem = styled.li``;

const NavItem = styled.a``;

const NewEventPanel = styled.div``;

const AddEvent = styled.div``;

const NewEventTitle = styled.span``;

const MainEventsMenu = styled.div``;

const EventsTitle = styled.span``;

const EventsMenu = styled.ul``;

const EventsMenuList = styled.li``;

const EventsNumber = styled.span``;

const EventDesc = styled.span``;

export default App;
