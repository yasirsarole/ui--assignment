import React from "react";
import "./App.css";
import styled from "styled-components";
import eventsData from "./data";
import DatePicker from "react-date-picker";

// import icons
import {
  MdDashboard,
  MdEvent,
  MdSettings,
  MdKeyboardArrowDown,
  MdFormatListBulleted,
  MdEdit,
  MdClose
} from "react-icons/md";
import { FaStar, FaUsers, FaBell, FaRegCalendar } from "react-icons/fa";
import { TiNews } from "react-icons/ti";
import { GiScrewdriver, GiHamburgerMenu } from "react-icons/gi";
import { GoSignIn } from "react-icons/go";
import { IoMdMan } from "react-icons/io";
import { FiPlus, FiSearch, FiGrid, FiMinus } from "react-icons/fi";

// import components
import ModalModule from "./ModalModule";
import HeaderModule from "./HeaderModule";
import NewEventPanelModule from "./NewEventPanelModule";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalEvents: 0,
      upcomingEvents: 0,
      outDatedEvents: 0,
      hamburgerActive: true,
      listData: [],
      all: false,
      upcoming: false,
      outdated: false,
      showModalForm: false,
      date: new window.Date(),
      modalFormError: false,
      errorMessage: "Event name, location and capacity are mandatory.",
      eventDetail: {
        eventName: "",
        eventLocation: "",
        eventCapacity: "",
        eventAttendees: 0
      },
      eventsListData: JSON.parse(localStorage.getItem("data"))
        ? JSON.parse(localStorage.getItem("data"))
        : eventsData,
      addEvent: false,
      editEvent: false,
      currentEventID: ""
    };
  }

  componentDidMount() {
    // check if browser supports local storage
    if (typeof Storage !== "undefined")
      localStorage.setItem("data", JSON.stringify(eventsData));

    // get events data count
    this._geteventsDataCount();

    //get list data
    this._filterEvents("all");

    // hamburgerActive when window width is greater than 1024
    this._updateHamburgerState();
    window.addEventListener("resize", this._updateHamburgerState);
  }

  // hamburgerActive when window width is greater than 1024
  _updateHamburgerState = () => {
    if (window.innerWidth > 1024) {
      this.setState({
        hamburgerActive: true
      });
    } else {
      this.setState({
        hamburgerActive: false
      });
    }
  };

  // get events Data
  _getEventsData = () => {
    let data = this.state.eventsListData;

    // check if browser supports local storage
    if (typeof Storage !== "undefined")
      localStorage.setItem("data", JSON.stringify(data));

    return data;
  };

  // get count for total, upcoming and outdated events
  _geteventsDataCount = () => {
    const currentData = this._getEventsData();

    const currentEventCount =
      currentData && Array.isArray(currentData.current)
        ? currentData.current.length
        : 0;
    const UpcomingCount =
      currentData && Array.isArray(currentData.upcoming)
        ? currentData.upcoming.length
        : 0;
    const OutdatedCount =
      currentData && Array.isArray(currentData.outdated)
        ? currentData.outdated.length
        : 0;

    this.setState({
      totalEvents: currentEventCount + UpcomingCount + OutdatedCount,
      upcomingEvents: UpcomingCount,
      outDatedEvents: OutdatedCount
    });
  };

  // helper function for hamburger open close
  _hamburgerToggle = () => {
    this.setState({
      hamburgerActive: !this.state.hamburgerActive
    });
  };

  // filter upcoming and outdated events
  _filterEvents = eventType => {
    const currentData = this._getEventsData();

    this.setState({
      all: false,
      upcoming: false,
      outdated: false
    });

    let listData = [];

    if (currentData) {
      if (eventType === "all") {
        listData = [
          ...listData,
          ...currentData.current,
          ...currentData.upcoming,
          ...currentData.outdated
        ];
      } else {
        listData = [...listData, ...currentData[eventType]];
      }
    }

    this.setState({
      listData,
      [eventType]: true
    });
  };

  // add new event
  _addNewEvent = () => {
    this.setState({
      showModalForm: true,
      addEvent: true,
      editEvent: false,
      deleteEvent: false
    });
  };

  // on date change
  _onDateChange = date => {
    this.setState({ date });
  };

  // Add/Edit event on modal form submit
  _onModalFormSubmit = e => {
    e.preventDefault();

    const temp = { ...this.state };

    const {
      eventName,
      eventLocation,
      eventCapacity,
      eventAttendees
    } = this.state.eventDetail;

    if (!(!!eventName.length && !!eventLocation.length && !!eventCapacity)) {
      this.setState({
        modalFormError: true
      });
    } else if (eventCapacity < eventAttendees) {
      this.setState({
        modalFormError: true,
        errorMessage: "Attendees cannot be greater than capacity."
      });
    } else {
      if (this.state.addEvent) {
        const body = {
          id: this.state.totalEvents + 1,
          name: eventName,
          location: eventLocation,
          allowedAttendees: eventCapacity,
          totalAttendees: eventAttendees,
          time: "7:00pm - 8:00pm",
          repeats: 12,
          date: this.state.date
        };

        // check selected date is greater than current date
        if (this.state.date > new window.Date()) {
          temp.eventsListData.upcoming = [
            ...temp.eventsListData.upcoming,
            body
          ];
        } else {
          temp.eventsListData.current = [...temp.eventsListData.current, body];
        }

        temp.all = true;
        temp.upcoming = false;
        temp.outdated = false;
      } else if (this.state.editEvent) {
        Object.keys(temp.eventsListData).forEach(listType => {
          temp.eventsListData[listType].forEach((type, index) => {
            if (type.id === this.state.currentEventID) {
              type.name = eventName;
              type.location = eventLocation;
              type.allowedAttendees = eventCapacity;
              type.totalAttendees = eventAttendees;
              type.date = this.state.date;

              // if edited date is greater than current date
              if (this.state.date > new window.Date()) {
                temp.eventsListData[listType].splice(index, 1);

                temp.eventsListData.upcoming = [
                  ...temp.eventsListData.upcoming,
                  type
                ];

                temp.all = false;
                temp.upcoming = true;
              } else {
                temp.eventsListData[listType].splice(index, 1);

                temp.eventsListData.current = [
                  ...temp.eventsListData.current,
                  type
                ];

                temp.all = true;
                temp.upcoming = false;
              }
            }
          });
        });
      }

      temp.modalFormError = false;
      temp.showModalForm = false;
      temp.eventDetail = {
        eventName: "",
        eventLocation: "",
        eventCapacity: "",
        eventAttendees: 0
      };

      this.setState(
        {
          ...temp
        },
        () => {
          // call this function to update event counts
          this._geteventsDataCount();

          // filter list data when event is added
          this._filterEvents("all");
        }
      );
    }
  };

  // handle values when input is changed
  _handleInputChange = (inputType, value) => {
    this.setState({
      eventDetail: {
        ...this.state.eventDetail,
        [inputType]: value
      }
    });
  };

  // helper function for editing event
  _onEditEvent = eventID => {
    const temp = { ...this.state };

    let name, allowedAttendees, totalAttendees, location, date;

    Object.keys(this.state.eventsListData).forEach(listType => {
      this.state.eventsListData[listType].forEach(type => {
        if (type.id === eventID) {
          name = type.name;
          allowedAttendees = type.allowedAttendees;
          totalAttendees = type.totalAttendees;
          location = type.location;
          date = type.date;
        }
      });
    });

    temp.showModalForm = true;
    temp.editEvent = true;
    temp.addEvent = false;
    temp.deleteEvent = false;
    temp.eventDetail = {
      eventName: name,
      eventLocation: location,
      eventCapacity: allowedAttendees,
      eventAttendees: totalAttendees
    };
    temp.date = new window.Date(date);
    temp.currentEventID = eventID;

    this.setState({
      ...temp
    });
  };

  _onDeleteEvent = eventID => {
    if (window.confirm("Are you sure?")) {
      const temp = { ...this.state };

      Object.keys(this.state.eventsListData).forEach(listType => {
        this.state.eventsListData[listType].forEach((type, index) => {
          if (type.id === eventID) {
            temp.eventsListData[listType].splice(index, 1);
          }
        });
      });

      this.setState({ ...temp }, () => {
        // call this function to update event counts
        this._geteventsDataCount();

        // filter list data when event is added
        this._filterEvents("all");
      });
    }
  };

  // get events list based on filter
  _listContainerTable = () => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

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
          {this.state.listData.map((data, index) => {
            const dateObj = new window.Date(data.date);

            const actualDate = `${dateObj.getDate()}th ${
              months[dateObj.getMonth()]
            }, ${dateObj.getFullYear()}`;

            return (
              <ListEvent key={index}>
                <EventId>{index + 1}</EventId>
                <EventName>{data.name}</EventName>
                <EventDate>
                  <EventDateContainer>{actualDate}</EventDateContainer>
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
                  <EditIconContainer
                    onClick={() => this._onEditEvent(data.id)}
                    title="Edit Event"
                  >
                    <MdEdit />
                  </EditIconContainer>
                  <DeleteIconContainer
                    onClick={() => this._onDeleteEvent(data.id)}
                    title="Delete Event"
                  >
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

  // helper function to reset event values when modal is closed
  _onModalContainerClick = () => {
    this.setState({
      showModalForm: false,
      eventDetail: {
        eventName: "",
        eventLocation: "",
        eventCapacity: "",
        eventAttendees: 0
      }
    });
  };

  render() {
    const $this = this;
    const componentProps = {
      ...$this,
      ...$this.state,
      ...$this.props
    };

    return (
      <MainContainer>
        {this.state.showModalForm && <ModalModule {...componentProps} />}
        <Wrapper>
          <HeaderModule {...componentProps} />
          <Main>
            <NewEventPanelModule {...componentProps} />
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
                  <SearchForm onSubmit={e => e.preventDefault()}>
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

  @media (max-width: 1024px) {
    overflow-y: auto;
  }
`;

const Wrapper = styled.div`
  width: 96%;
  max-width: 1286px;
  margin: 0 auto;
  display: flex;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const Main = styled.main`
  flex-basis: 86.5%;
  display: inline-flex;

  @media (max-width: 1024px) {
    display: block;
  }
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

  @media (max-width: 768px) {
    display: block;
    padding-left: 0;
  }
`;

const SearchIconContainer = styled.div`
  cursor: pointer;

  svg {
    color: rgb(119, 130, 158);
  }

  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`;

const ProfileInfo = styled.div`
  display: inline-flex;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
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

  @media (max-width: 768px) {
    display: block;
    padding: 14px 0 0 0;
  }
`;

const SearchFormContainer = styled.div`
  display: inline-flex;
  align-items: center;

  svg {
    color: rgb(119, 130, 158);
  }

  @media (max-width: 768px) {
    display: flex;
    margin-bottom: 10px;
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

  @media (max-width: 768px) {
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
  }
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

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const TableHeader = styled.div`
  padding: 12px 20px;
  display: flex;
  align-items: center;
  color: rgb(142, 154, 162);
  font-size: 11px;
  text-transform: capitalize;
  font-weight: bold;

  @media (max-width: 768px) {
    display: none;
  }

  span {
    @media (max-width: 768px) {
      display: block;
      margin-bottom: 10px;
    }
  }
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

  @media (max-width: 768px) {
    display: flex !important;
    align-items: center;
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

  @media (max-width: 1024px) {
    height: auto;
    width: auto;
  }
`;

const ListEvent = styled.li`
  background: #fff;
  padding: 15px 15px 15px 20px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: block;
    padding: 10px;
  }

  & > span {
    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 10px;
    }
  }
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

  @media (max-width: 768px) {
    display: block !important;
  }
`;

const EventDateContainer = styled.span`
  display: block;
  margin-bottom: 7px;

  @media (max-width: 768px) {
    margin-bottom: 3px;
  }
`;

const EventTimeContainer = styled.span`
  display: block;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
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

  @media (max-width: 768px) {
    margin-left: 25px;
  }
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

  @media (max-width: 768px) {
    margin-right: 25px;
  }
`;

const EditIconContainer = styled.div`
  color: rgb(118, 103, 243);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  margin-right: 11%;

  @media (max-width: 768px) {
    margin-right: 25px;
  }
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
