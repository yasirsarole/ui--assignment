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
                  <EventsMenuList>
                    <EventsNumber>{this.state.totalEvents}</EventsNumber>
                    <EventDesc>events</EventDesc>
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

const MainContainer = styled.div``;

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

const EventsListContainer = styled.div``;

const ListContainerHeader = styled.div``;

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
