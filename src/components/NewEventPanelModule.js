import React from "react";
import styled from "styled-components";

// import icons
import { FiPlus } from "react-icons/fi";

const NewEventPanelModule = ({
  _addNewEvent,
  _filterEvents,
  all,
  totalEvents,
  upcoming,
  upcomingEvents,
  outdated,
  outDatedEvents
}) => {
  return (
    <NewEventPanel>
      <AddEvent onClick={() => _addNewEvent()} title="Add New Event">
        <NewEventTitle>new event</NewEventTitle>
        <FiPlus />
      </AddEvent>
      <MainEventsMenu>
        <EventsTitle>events</EventsTitle>
        <EventsMenu>
          <EventsMenuList
            onClick={() => {
              _filterEvents("all");
            }}
            title="Total Events"
            className={all && "active"}
          >
            <EventsNumber>{totalEvents}</EventsNumber>
            <EventDesc>Events</EventDesc>
          </EventsMenuList>
          <EventsMenuList
            onClick={() => {
              _filterEvents("upcoming");
            }}
            title="Upcoming Events"
            className={upcoming && "active"}
          >
            <EventsNumber>{upcomingEvents}</EventsNumber>
            <EventDesc>Upcoming events</EventDesc>
          </EventsMenuList>
          <EventsMenuList
            onClick={() => {
              _filterEvents("outdated");
            }}
            title="Outdated Events"
            className={outdated && "active"}
          >
            <EventsNumber>{outDatedEvents}</EventsNumber>
            <EventDesc>Outdated events</EventDesc>
          </EventsMenuList>
        </EventsMenu>
      </MainEventsMenu>
    </NewEventPanel>
  );
};

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

  @media (max-width: 1024px) {
    padding: 0px 20px 19px;
    justify-content: flex-start;
    display: inline-flex;
    border: none;
    margin-bottom: 0;
  }
`;

const NewEventTitle = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10px;
  display: inline-block;

  @media (max-width: 1024px) {
    margin-right: 15px;
  }
`;

const MainEventsMenu = styled.div``;

const EventsTitle = styled.span`
  display: inline-block;
  margin-bottom: 26px;
  padding: 0 15%;
  text-transform: capitalize;
  font-size: 25px;

  @media (max-width: 1024px) {
    padding: 0 20px;
  }
`;

const EventsMenu = styled.ul``;

const EventsMenuList = styled.li`
  padding: 23px 0 23px 10%;
  margin: 0 2px 0 12px;
  cursor: pointer;

  &.active {
    background: #fff;
  }

  @media (max-width: 1024px) {
    padding: 23px 20px;
    margin: 0 20px;
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

export default NewEventPanelModule;
