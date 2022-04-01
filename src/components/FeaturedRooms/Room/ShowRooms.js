import React from "react";
import Title from "../../Title/Title";
import { Link } from "react-router-dom";
import Room from "./Room";
// import Loading from "../../Loading/Loading";

export default function ShowRooms({ rooms }) {
  return (
    <section className="featured-rooms">
      <Title title="Rooms" className="featured-rooms-title" />

      <div className="featured-rooms-center">
        {rooms?.map((room, index) => {
          return <Room key={index} room={room} />;
        })}
      </div>

      {/* <div className="featured-rooms-button">
        <Link to="/rooms">
          <button className="btn-primary">More</button>
        </Link>
      </div> */}

      <div className="featured-rooms-button">
        <a href="/rooms">
          <button className="btn-primary">More</button>
        </a>
      </div>
    </section>
  );
}
