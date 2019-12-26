import React from "react";
import styled from "styled-components";

// import icons
import { MdKeyboardArrowDown, MdFormatListBulleted } from "react-icons/md";
import { FaBell, FaRegCalendar } from "react-icons/fa";
import { FiPlus, FiSearch, FiGrid } from "react-icons/fi";

// import component
import TableContainerModule from "./TableContainerModule";

const ListContainerModule = props => {
  return (
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
            <SubHeaderIconsContainerSingle className="active" title="List View">
              <MdFormatListBulleted />
            </SubHeaderIconsContainerSingle>
            <SubHeaderIconsContainerSingle title="Grid View">
              <FiGrid />
            </SubHeaderIconsContainerSingle>
          </SubHeaderIconsContainer>
        </ListSideMenuContainer>
      </ListContainerSubHeader>
      <ListContainerTable>
        <TableContainerModule {...props} />
      </ListContainerTable>
    </EventsListContainer>
  );
};

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

const ListContainerTable = styled.div``;

export default ListContainerModule;
