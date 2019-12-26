import React from "react";
import "./App.css";
import styled from "styled-components";
import eventsData from "./data";

// import components
import ModalModule from "./ModalModule";
import HeaderModule from "./HeaderModule";
import NewEventPanelModule from "./NewEventPanelModule";
import ListContainerModule from "./ListContainerModule";

class App extends React.Component {
  state = {
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
            <ListContainerModule {...componentProps} />
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

export default App;
