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
import { IoMdMan } from "react-icons/io";
import { FiPlus, FiSearch, FiGrid, FiMinus } from "react-icons/fi";

class App extends React.Component {
  state = {
    totalEvents: 0,
    upcomingEvents: 0,
    outDatedEvents: 0
  };

  componentDidMount() {
    // get events data count
    this._geteventsDataCount();
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

  // get count for total, upcoming and outdated events
  _geteventsDataCount = () => {
    const currentData = this._getEventsData();
    const currentEventCount = Array.isArray(currentData.current)
      ? currentData.current.length
      : 0;
    const UpcomingCount = Array.isArray(currentData.upcoming)
      ? currentData.upcoming.length
      : 0;
    const OutdatedCount = Array.isArray(currentData.outdated)
      ? currentData.outdated.length
      : 0;

    this.setState({
      totalEvents: currentEventCount + UpcomingCount + OutdatedCount,
      upcomingEvents: UpcomingCount,
      outDatedEvents: OutdatedCount
    });
  };

  // get events list based on filter
  _listContainerTable = () => {
    const currentData = this._getEventsData();

    return (
      <TableContainer>
        <TableHeader>
          <ID>id</ID>
          <Event>
            event <MdKeyboardArrowDown />
          </Event>
          <Date>date</Date>
          <Repeats>repeats</Repeats>
          <Location>location</Location>
          <Attendees>attendees</Attendees>
        </TableHeader>
        <ListEventsContainer>
          {currentData.current.map((data, index) => {
            return (
              <ListEvent key={index}>
                <EventId>{index}</EventId>
                <EventName>{data.name}</EventName>
                <EventDate>
                  <EventDateContainer>{data.date}</EventDateContainer>
                  <EventTimeContainer>{data.time}</EventTimeContainer>
                </EventDate>
                <RepeatsContainer>{data.repeats}</RepeatsContainer>
                <LocationContainer>{data.location}</LocationContainer>
                <AttendeesContainer>
                  <IoMdMan />
                  {`${data.allowedAttendees}/${data.totalAttendees}`}
                  {data.allowedAttendees === data.totalAttendees && (
                    <AttendeesFull>full</AttendeesFull>
                  )}
                </AttendeesContainer>
                <FeedBackEditContainer>
                  <Feedback title="Event Feedback">Feedback</Feedback>
                  <EditIconContainer title="Edit Event">
                    <MdEdit />
                  </EditIconContainer>
                  <DeleteIconContainer title="Delete Event">
                    <FiMinus />
                  </DeleteIconContainer>
                </FeedBackEditContainer>
              </ListEvent>
            );
          })}
        </ListEventsContainer>
      </TableContainer>
    );
  };

  render() {
    return (
      <MainContainer>
        <Wrapper>
          <Header>
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
          </Header>
          <Main>
            <NewEventPanel>
              <AddEvent title="Add New Event">
                <NewEventTitle>new event</NewEventTitle>
                <FiPlus />
              </AddEvent>
              <MainEventsMenu>
                <EventsTitle>events</EventsTitle>
                <EventsMenu>
                  <EventsMenuList title="Total Events" className="active">
                    <EventsNumber>{this.state.totalEvents}</EventsNumber>
                    <EventDesc>Events</EventDesc>
                  </EventsMenuList>
                  <EventsMenuList title="Upcoming Events">
                    <EventsNumber>{this.state.upcomingEvents}</EventsNumber>
                    <EventDesc>Upcoming events</EventDesc>
                  </EventsMenuList>
                  <EventsMenuList title="Outdated Events">
                    <EventsNumber>{this.state.outDatedEvents}</EventsNumber>
                    <EventDesc>Outdated events</EventDesc>
                  </EventsMenuList>
                </EventsMenu>
              </MainEventsMenu>
            </NewEventPanel>
            <EventsListContainer>
              <ListContainerHeader>
                <SearchIconContainer title="Search Event">
                  <FiSearch />
                </SearchIconContainer>
                <ProfileInfo>
                  <UserName title="Profile">
                    hi, janelle ried <MdKeyboardArrowDown />
                  </UserName>
                  <IconsContainer>
                    <BellIconContainer title="Turn Notifications Off">
                      <FaBell />
                    </BellIconContainer>
                    <PlusIconContainer title="Add New Event">
                      <FiPlus />
                    </PlusIconContainer>
                  </IconsContainer>
                </ProfileInfo>
              </ListContainerHeader>
              <ListContainerSubHeader>
                <SearchFormContainer title="Search Events">
                  <FiSearch />
                  <SearchForm>
                    <SearchEvents placeholder="Search events" type="text" />
                  </SearchForm>
                </SearchFormContainer>
                <ListSideMenuContainer>
                  <ShowAll>
                    <Show>
                      show:
                      <All> all</All>
                    </Show>
                    <MdKeyboardArrowDown />
                  </ShowAll>
                  <SubHeaderIconsContainer>
                    <SubHeaderIconsContainerSingle title="Calendar">
                      <FaRegCalendar />
                    </SubHeaderIconsContainerSingle>
                    <SubHeaderIconsContainerSingle
                      className="active"
                      title="List View"
                    >
                      <MdFormatListBulleted />
                    </SubHeaderIconsContainerSingle>
                    <SubHeaderIconsContainerSingle title="Grid View">
                      <FiGrid />
                    </SubHeaderIconsContainerSingle>
                  </SubHeaderIconsContainer>
                </ListSideMenuContainer>
              </ListContainerSubHeader>
              <ListContainerTable>
                {this._listContainerTable()}
              </ListContainerTable>
            </EventsListContainer>
          </Main>
        </Wrapper>
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  height: 100vh;
  overflow-y: hidden;
  font-family: sans-serif;
  letter-spacing: normal;
  font-weight: normal;
  line-height: 1;
`;

const Wrapper = styled.div`
  width: 96%;
  max-width: 1127px;
  margin: 0 auto;
  display: flex;
`;

const Header = styled.header`
  padding-top: 21px;
  flex-basis: 13.3%;
`;

const Main = styled.main`
  flex-basis: 86.5%;
  display: inline-flex;
`;

const CommunityHeading = styled.span`
  color: rgb(119, 130, 158);
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10px;
  display: inline-block;
  margin-bottom: 55px;

  span {
    color: rgb(117, 102, 243);
    margin-bottom: 0;
  }
`;

const Navigation = styled.nav`
  height: calc(100vh - 86px);
  position: relative;
`;

const NavListContainer = styled.ul``;

const NavListItem = styled.li`
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  position: relative;

  &:last-of-type {
    margin-bottom: 0;
    position: absolute;
    bottom: 24px;
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

const NewEventPanel = styled.div`
  padding: 23px 0;
  flex-basis: 17.5%;
  background: rgb(241, 244, 249);
  box-shadow: inset 0px 0px 87px -70px rgba(0, 0, 0, 1);
`;

const AddEvent = styled.div`
  padding: 0px 16% 19px;
  border-bottom: 1px solid lightgray;
  margin-bottom: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgb(140, 153, 184);
  cursor: pointer;
`;

const NewEventTitle = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10px;
  display: inline-block;
`;

const MainEventsMenu = styled.div``;

const EventsTitle = styled.span`
  display: inline-block;
  margin-bottom: 26px;
  padding: 0 15%;
  text-transform: capitalize;
  font-size: 25px;
`;

const EventsMenu = styled.ul``;

const EventsMenuList = styled.li`
  padding: 23px 0 23px 10%;
  margin: 0 2px 0 12px;
  cursor: pointer;

  &.active {
    background: #fff;
  }
`;

const EventsNumber = styled.span`
  font-size: 20px;
  margin-bottom: 14px;
  display: block;
`;

const EventDesc = styled.span`
  font-weight: bold;
  font-size: 11px;
  display: block;
  color: rgb(182, 191, 210);
`;

const EventsListContainer = styled.div`
  flex-basis: 82.4%;
`;

const ListContainerHeader = styled.div`
  padding: 20px 0 16px 3.3%;
  border-bottom: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchIconContainer = styled.div`
  cursor: pointer;

  svg {
    color: rgb(119, 130, 158);
  }
`;

const ProfileInfo = styled.div`
  display: inline-flex;
`;

const UserName = styled.span`
  margin-right: 16px;
  color: rgb(130, 133, 154);
  text-transform: capitalize;
  font-weight: bold;
  font-size: 12px;
  display: inline-block;
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &:before {
    content: "";
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: rgb(243, 244, 248);
    position: absolute;
    z-index: 5;
    left: -30px;
  }

  svg {
    font-size: 15px;
  }
`;

const IconsContainer = styled.div`
  display: inline-flex;
`;

const BellIconContainer = styled.div`
  color: rgb(117, 102, 243);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  margin-right: 21px;
`;

const PlusIconContainer = styled.div`
  cursor: pointer;
  width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  background: rgb(117, 102, 243);
  border-radius: 50%;
  font-size: 12px;
`;

const ListContainerSubHeader = styled.div`
  padding: 24px 0 0 3.3%;
  margin-bottom: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchFormContainer = styled.div`
  display: inline-flex;
  align-items: center;

  svg {
    color: rgb(119, 130, 158);
  }
`;

const SearchForm = styled.form``;

const SearchEvents = styled.input`
  font-weight: bold;
  font-size: 11px;
  display: block;
  color: rgb(184, 192, 212);
  outline: none;
  border: none;
  padding: 5px;

  &::placeholder {
    font-weight: bold;
    font-size: 11px;
    display: block;
    color: rgb(184, 192, 212);
  }
`;

const ListSideMenuContainer = styled.div`
  display: inline-flex;
  align-items: center;
`;

const ShowAll = styled.div`
  margin-right: 9px;
  text-transform: capitalize;
  font-size: 11px;
  font-weight: bold;
  color: rgb(171, 180, 199);
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 15px;
  }
`;

const Show = styled.span``;

const All = styled.span`
  color: rgb(114, 115, 143);
`;

const SubHeaderIconsContainer = styled.div`
  display: inline-flex;
  align-items: center;
  color: rgb(134, 149, 178);
`;

const SubHeaderIconsContainerSingle = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;

  &.active {
    svg {
      color: rgb(117, 102, 243);
    }
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const TableContainer = styled.div`
  padding-left: 3.3%;
`;

const TableHeader = styled.div`
  padding: 12px 20px;
  display: flex;
  align-items: center;
  color: rgb(142, 154, 162);
  font-size: 11px;
  text-transform: capitalize;
  font-weight: bold;
`;

const ID = styled.span`
  text-transform: uppercase;
  flex-basis: 4.5%;
`;

const Event = styled.span`
  display: inline-flex;
  align-items: center;
  flex-basis: 25%;

  svg {
    font-size: 15px;
  }
`;

const Date = styled.span`
  flex-basis: 16.7%;
`;

const Repeats = styled.span`
  flex-basis: 8.6%;
`;

const Location = styled.span`
  flex-basis: 17.1%;
`;

const Attendees = styled.span`
  flex-basis: 15%;
`;

const ListEventsContainer = styled.ul`
  background: rgb(246, 247, 251);
  overflow-y: auto;
  width: calc(100% + 15px);
  height: calc(100vh - 153px);
  position: relative;
  box-shadow: 0px 0px 59px -42px rgba(0, 0, 0, 0.65);
`;

const ListEvent = styled.li`
  background: #fff;
  padding: 15px 15px 15px 20px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;

const EventId = styled.span`
  color: rgb(169, 178, 185);
  font-size: 11px;
  font-weight: bold;
  flex-basis: 4.5%;
`;

const EventName = styled.span`
  color: rgb(95, 98, 101);
  font-weight: bold;
  font-size: 12px;
  flex-basis: 25%;
  line-height: 1.2;
`;

const EventDate = styled.span`
  color: rgb(146, 155, 174);
  font-size: 11px;
  font-weight: bold;
  flex-basis: 16.7%;
`;

const EventDateContainer = styled.span`
  display: block;
  margin-bottom: 7px;
`;

const EventTimeContainer = styled.span`
  display: block;
`;

const RepeatsContainer = styled.span`
  color: rgb(110, 123, 147);
  font-size: 11px;
  font-weight: bold;
  flex-basis: 8.6%;
`;

const LocationContainer = styled.span`
  color: rgb(164, 172, 187);
  font-size: 11px;
  font-weight: bold;
  flex-basis: 17.1%;
`;

const AttendeesContainer = styled.span`
  color: rgb(133, 149, 178);
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  font-weight: bold;
  flex-basis: 15%;

  svg {
    font-size: 15px;
  }
`;

const AttendeesFull = styled.span`
  padding: 4px 8px;
  margin-left: 12%;
  text-transform: uppercase;
  background: rgb(49, 39, 136);
  color: #fff;
  border-radius: 2px;
  font-size: 10px;
`;

const FeedBackEditContainer = styled.span`
  display: inline-flex;
  align-items: center;
  flex-basis: 13.3%;
`;

const Feedback = styled.span`
  font-size: 10px;
  font-weight: bold;
  color: rgb(118, 103, 243);
  cursor: pointer;
  margin-right: 11%;
`;

const EditIconContainer = styled.div`
  color: rgb(118, 103, 243);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  margin-right: 11%;
`;

const DeleteIconContainer = styled.div`
  width: 15px;
  height: 15px;
  display: inline-flex;
  align-items: center;
  background: rgb(116, 101, 243);
  border-radius: 100%;
  color: #fff;
  font-size: 13px;
  justify-content: center;
  cursor: pointer;
`;

const ListContainerTable = styled.div``;

export default App;
