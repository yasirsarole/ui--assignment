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
                  <Feedback>feedback</Feedback>
                  <EditIconContainer>
                    <MdEdit />
                  </EditIconContainer>
                  <DeleteIconContainer>
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
              <AddEvent>
                <NewEventTitle>new event</NewEventTitle>
                <FiPlus />
              </AddEvent>
              <MainEventsMenu>
                <EventsTitle>events</EventsTitle>
                <EventsMenu>
                  <EventsMenuList className="active">
                    <EventsNumber>{this.state.totalEvents}</EventsNumber>
                    <EventDesc>Events</EventDesc>
                  </EventsMenuList>
                  <EventsMenuList>
                    <EventsNumber>{this.state.upcomingEvents}</EventsNumber>
                    <EventDesc>Upcoming events</EventDesc>
                  </EventsMenuList>
                  <EventsMenuList>
                    <EventsNumber>{this.state.outDatedEvents}</EventsNumber>
                    <EventDesc>Outdated events</EventDesc>
                  </EventsMenuList>
                </EventsMenu>
              </MainEventsMenu>
            </NewEventPanel>
            <EventsListContainer>
              <ListContainerHeader>
                <SearchIconContainer>
                  <FiSearch />
                </SearchIconContainer>
                <ProfileInfo>
                  <UserName>
                    hi, Janelle Ried <MdKeyboardArrowDown />
                  </UserName>
                  <IconsContainer>
                    <BellIconContainer>
                      <FaBell />
                    </BellIconContainer>
                    <PlusIconContainer>
                      <FiPlus />
                    </PlusIconContainer>
                  </IconsContainer>
                </ProfileInfo>
              </ListContainerHeader>
              <ListContainerSubHeader>
                <SearchFormContainer>
                  <FiSearch />
                  <SearchForm>
                    <SearchEvents type="text" />
                  </SearchForm>
                </SearchFormContainer>
                <ListSideMenuContainer>
                  <ShowAll>
                    <Show>
                      show:
                      <All>all</All>
                    </Show>
                  </ShowAll>
                  <SubHeaderIconsContainer>
                    <SubHeaderIconsContainerSingle>
                      <FaRegCalendar />
                    </SubHeaderIconsContainerSingle>
                    <SubHeaderIconsContainerSingle>
                      <MdFormatListBulleted />
                    </SubHeaderIconsContainerSingle>
                    <SubHeaderIconsContainerSingle>
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
    color: rgb(50, 65, 101);
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
      color: rgb(50, 65, 101);
      font-weight: bold;
    }

    &::before {
      content: "";
      width: 3px;
      height: 3px;
      background-color: rgb(50, 65, 101);
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
  color: rgb(50, 65, 101);
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
  margin-left: 12px;
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
  font-size: 12px;
  display: block;
  color: rgb(119, 130, 158);
`;

const EventsListContainer = styled.div`
  flex-basis: 82.4%;
`;

const ListContainerHeader = styled.div`
display: flex;
    align-items: center;
    justify-content: space-between;
`;

const SearchIconContainer = styled.div``;

const ProfileInfo = styled.div``;

const UserName = styled.span``;

const IconsContainer = styled.div``;

const BellIconContainer = styled.div``;

const PlusIconContainer = styled.div``;

const ListContainerSubHeader = styled.div``;

const SearchFormContainer = styled.div``;

const SearchForm = styled.form``;

const SearchEvents = styled.input``;

const ListSideMenuContainer = styled.div``;

const ShowAll = styled.div``;

const Show = styled.span``;

const All = styled.span``;

const SubHeaderIconsContainer = styled.div``;

const SubHeaderIconsContainerSingle = styled.div``;

const TableContainer = styled.div``;

const TableHeader = styled.div``;

const ID = styled.span``;

const Event = styled.span``;

const Date = styled.span``;

const Repeats = styled.span``;

const Location = styled.span``;

const Attendees = styled.span``;

const ListEventsContainer = styled.ul``;

const ListEvent = styled.li``;

const EventId = styled.span``;

const EventName = styled.span``;

const EventDate = styled.span``;

const EventDateContainer = styled.span``;

const EventTimeContainer = styled.span``;

const RepeatsContainer = styled.span``;

const LocationContainer = styled.span``;

const AttendeesContainer = styled.span``;

const AttendeesFull = styled.span``;

const FeedBackEditContainer = styled.span``;

const Feedback = styled.span``;

const EditIconContainer = styled.div``;

const DeleteIconContainer = styled.div``;

const ListContainerTable = styled.div``;

export default App;
