import React from "react";
import RoomsFilter from "./RoomsFilter.js";
import RoomsList from "./RoomsList";
import { useSelector } from "react-redux";

function RoomContainer() {
  const roomInfo = useSelector((state) => state.RoomSlice?.roomInfo);

  return (
    <>
      <RoomsFilter rooms={roomInfo} />
      {/* <RoomsList rooms={roomInfo.sortedRooms} /> */}
    </>
  );
}

export default RoomContainer;
