import React from "react";
import styled from "styled-components";
import DatePicker from "react-date-picker";

// import icons
import {
  MdClose
} from "react-icons/md";

const ModalModule = ({
  _onModalContainerClick,
  _onModalFormSubmit,
  _handleInputChange,
  _onDateChange,
  eventDetail,
  date,
  errorMessage,
  modalFormError
}) => {
  return (
    <ModalContainer onClick={() => _onModalContainerClick()}>
      <AddEventForm
        onClick={e => {
          e.stopPropagation();
        }}
        onSubmit={e => _onModalFormSubmit(e)}
      >
        <EventNameContainer>
          <NameLabel htmlFor="name">event name</NameLabel>
          <NameInput
            onChange={e => _handleInputChange("eventName", e.target.value)}
            id="name"
            type="text"
            value={eventDetail.eventName}
          />
        </EventNameContainer>
        <EventDateModal>
          <DatePicker
            onChange={date => _onDateChange(date)}
            value={date}
            required
            minDate={new window.Date()}
          />
        </EventDateModal>
        <EventLocation>
          <LocationLabel htmlFor="location">location</LocationLabel>
          <LocationInput
            onChange={e => _handleInputChange("eventLocation", e.target.value)}
            id="location"
            type="text"
            value={eventDetail.eventLocation}
          />
        </EventLocation>
        <EventCapacity>
          <EventCapacityLabel htmlFor="capacity">capacity</EventCapacityLabel>
          <EventCapacityInput
            onChange={e =>
              _handleInputChange("eventCapacity", parseInt(e.target.value))
            }
            id="capacity"
            type="number"
            min="0"
            value={!!eventDetail.eventCapacity ? eventDetail.eventCapacity : 0}
          />
        </EventCapacity>
        <EventAttendees>
          <EventAttendeesLabel htmlFor="attendees">
            attendees
          </EventAttendeesLabel>
          <EventAttendeesInput
            onChange={e =>
              _handleInputChange("eventAttendees", parseInt(e.target.value))
            }
            id="attendees"
            type="number"
            min="0"
            value={
              !!eventDetail.eventAttendees ? eventDetail.eventAttendees : 0
            }
          />
        </EventAttendees>
        <SubmitButton type="submit" value="Submit" />
        <CloseIconContainerModal onClick={() => _onModalContainerClick()}>
          <MdClose />
        </CloseIconContainerModal>
        {modalFormError && <ErrorContainer>{errorMessage}</ErrorContainer>}
      </AddEventForm>
    </ModalContainer>
  );
};


const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

const AddEventForm = styled.form`
  position: absolute;
  left: 50%;
  top: 50%;
  background: #fff;
  padding: 22px;
  transform: translate(-50%, -50%);
  border-radius: 2px;

  label,
  input {
    color: rgb(119, 130, 158);
    text-transform: capitalize;
    font-size: 12px;
  }

  input {
    text-transform: initial;
  }

  label {
    margin-right: 11px;
  }
`;

const EventNameContainer = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CloseIconContainerModal = styled.div`
  cursor: pointer;

  svg {
    position: absolute;
    right: -9px;
    top: -9px;
    font-size: 20px;
    background: rgb(117, 102, 243);
    padding: 3px;
    border-radius: 50%;
    color: #fff;
  }
`;

const NameLabel = styled.label``;

const NameInput = styled.input`
  border: 1px solid rgb(119, 130, 158);
`;
const EventDateModal = styled.div`
  margin-bottom: 15px;

  .react-date-picker,
  .react-date-picker__wrapper {
    width: 100%;
  }

  .react-date-picker__calendar {
    width: 300px !important;
    left: -22px !important;
  }

  svg {
    color: rgb(117, 102, 243);
  }
`;

const EventLocation = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LocationLabel = styled.label``;

const LocationInput = styled.input`
  border: 1px solid rgb(119, 130, 158);
`;

const EventCapacity = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const EventCapacityLabel = styled.label``;

const EventCapacityInput = styled.input`
  border: 1px solid rgb(119, 130, 158);
`;

const EventAttendees = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const EventAttendeesLabel = styled.label``;

const EventAttendeesInput = styled.input`
  border: 1px solid rgb(119, 130, 158);
`;

const SubmitButton = styled.input`
  border: none;
  width: 100%;
  padding: 8px;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
`;

const ErrorContainer = styled.span`
  color: #ff0000;
  font-size: 10px;
  margin-top: 5px;
  display: block;
  position: absolute;
  bottom: 5px;
`;

export default ModalModule;