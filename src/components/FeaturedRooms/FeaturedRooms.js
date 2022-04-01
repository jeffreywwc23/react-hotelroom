import React, { useEffect } from "react";
import "./FeaturedRooms.css";
// import Room from "./Room/Room.js";
import ShowRooms from "./Room/ShowRooms.js";
import { useSelector } from "react-redux";

const FeaturedRooms = ({ rooms }) => {
  // let rooms = useSelector((state) => state.roomInfo);
  // console.log("rooms = ", rooms);

  // rooms = rooms.map((room) => {
  //   return <Room key={room.id} room={room} />;
  // });

  return <ShowRooms rooms={rooms} />;
};

export default FeaturedRooms;
