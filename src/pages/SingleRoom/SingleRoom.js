import React, { useState, useEffect, useLayoutEffect } from "react";
import "./SingleRoom.css";
import { Link, useParams } from "react-router-dom";
import defaultBcg from "../../images/room-11.jpeg";
import Banner from "../../components/Banner/Banner";
import StyledHero from "../../components/Hero/StyledHero";
import { useSelector } from "react-redux";

const SingleRoom = () => {
  const slugParams = useParams();
  const roomInfo = useSelector((state) => state.RoomSlice?.roomInfo);
  const [activeTab, setActiveTab] = useState(0);
  const [singleRoom, setSingleRoom] = useState({
    name: "",
    description: "",
    capacity: 0,
    size: 0,
    price: 0,
    extras: [],
    breakfast: false,
    pets: false,
    images: [],
  });

  const getRoom = (slug) => {
    console.log("roomInfo.rooms = ", roomInfo.rooms);
    let tempRooms = [...roomInfo.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  const handleClickActiveTab = (currentTab) => {
    setActiveTab(currentTab);
  };

  useEffect(() => {
    const slug = getRoom(slugParams.slug);
    console.log("slug = ", slug);

    if (slug) {
      console.log("singleRoom = ", singleRoom);

      setSingleRoom({
        name: slug.name,
        description: slug.description,
        capacity: slug.capacity,
        size: slug.size,
        price: slug.price,
        extras: slug.extras,
        breakfast: slug.breakfast,
        pets: slug.pets,
        images: slug.images,
      });
    }
  }, []);

  const [...defaultImages] = singleRoom.images;

  return (
    <>
      {singleRoom.name !== "" ? (
        <>
          <StyledHero img={singleRoom.images[0] || defaultBcg}>
            <Banner title={`${singleRoom.name} room`}>
              <Link to="/rooms" className="btn-primary">
                Back to rooms
              </Link>
            </Banner>
          </StyledHero>

          <div className="single-room-image-container">
            {defaultImages.map((item, index) => (
              <div className="single-room-image-card" key={index}>
                <img src={item} alt={singleRoom.name} />
              </div>
            ))}
          </div>

          <div className="single-room-info-container">
            <section id="single-room-info-wrapper">
              <div className="single-room-info-content">
                <div className="single-room-tabs">
                  <button
                    className={
                      activeTab === 0
                        ? "single-room-tablinks active"
                        : "single-room-tablinks"
                    }
                    onClick={() => handleClickActiveTab(0)}
                    data-tab="0"
                    data-title="Details"
                  >
                    <p data-title="Details">Details</p>
                  </button>
                  <button
                    className={
                      activeTab === 1
                        ? "single-room-tablinks active"
                        : "single-room-tablinks"
                    }
                    onClick={() => handleClickActiveTab(1)}
                    data-tab="1"
                    data-title="Info"
                  >
                    <p data-title="Info">Room Info.</p>
                  </button>
                  <button
                    className={
                      activeTab === 2
                        ? "single-room-tablinks active"
                        : "single-room-tablinks"
                    }
                    onClick={() => handleClickActiveTab(2)}
                    data-tab="2"
                    data-title="Extras"
                  >
                    <p data-title="Extras">Extras</p>
                  </button>
                </div>

                <div className="single-room-tabcontent-wrapper">
                  <div
                    id="single-room-tabcontent-details"
                    className={
                      activeTab === 0
                        ? "single-room-tabcontent active"
                        : "single-room-tabcontent"
                    }
                  >
                    <h3>Details</h3>
                    <p>{singleRoom.description}</p>
                  </div>

                  <div
                    id="single-room-tabcontent-info"
                    className={
                      activeTab === 1
                        ? "single-room-tabcontent active"
                        : "single-room-tabcontent"
                    }
                  >
                    <h3>Info</h3>
                    <p>Price : ${singleRoom.price}</p>
                    <p>Size : {singleRoom.size} SQFT</p>
                    <p>
                      Max capacity :
                      {singleRoom.capacity > 1
                        ? ` ${singleRoom.capacity} people`
                        : ` ${singleRoom.capacity} person`}
                    </p>
                    <p>
                      {singleRoom.pets ? "Pets allowed" : "No pets allowed"}
                    </p>
                    <p>{singleRoom.breakfast && "Free breakfast included"}</p>
                  </div>

                  <div
                    id="single-room-tabcontent-extras"
                    className={
                      activeTab === 2
                        ? "single-room-tabcontent active"
                        : "single-room-tabcontent"
                    }
                  >
                    <h3>Extras</h3>
                    <span>
                      {singleRoom.extras.map((item, index) => (
                        <p key={index}>{item}</p>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      ) : (
        <div className="error">
          <h3> No such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      )}
    </>
  );
};

export default SingleRoom;
