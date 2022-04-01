import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";
import RoomsContainer from "../../components/FeaturedRooms/RoomsContainer";
import { useSelector } from "react-redux";

const Rooms = () => {
  const roomInfo = useSelector((state) => state.RoomSlice?.roomInfo);

  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            Return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer rooms={roomInfo} />
    </>
  );
};

export default Rooms;
