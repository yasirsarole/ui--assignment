import React from "react";
import styled from "styled-components";

// import icons
import {
  MdKeyboardArrowDown,
  MdEdit,
} from "react-icons/md";
import { IoMdMan } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

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

const TableContainerModule = ({ listData, _onEditEvent, _onDeleteEvent }) => {
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
        {listData.map((data, index) => {
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
                  onClick={() => _onEditEvent(data.id)}
                  title="Edit Event"
                >
                  <MdEdit />
                </EditIconContainer>
                <DeleteIconContainer
                  onClick={() => _onDeleteEvent(data.id)}
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

export default TableContainerModule;
