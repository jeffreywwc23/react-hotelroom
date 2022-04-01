import React, { useState, createContext, useEffect } from "react";
import items from "../data/data";

const RoomContext = createContext();

const RoomProvider = ({ props }) => {
  const [roomInfo, setRoomInfo] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    //
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  });

  useEffect(() => {
    let rooms = formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));

    setRoomInfo({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }, []);

  const formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };

  // const getRoom = (slug) => {
  //   let tempRooms = [...roomInfo.rooms];
  //   console.log("tempRooms = ", tempRooms);
  //   const room = tempRooms.find((room) => room.slug === slug);
  //   console.log("room = ", room);
  //   return room;
  // };

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setRoomInfo(
      {
        [name]: value,
      },
      filterRooms
    );
  };

  const filterRooms = () => {
    let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } =
      roomInfo;

    let tempRooms = [...rooms];

    // transform values
    capacity = parseInt(capacity);
    price = parseInt(price);

    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }

    tempRooms = tempRooms.filter((room) => room.price <= price);

    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );

    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }

    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    setRoomInfo({
      sortedRooms: tempRooms,
    });
  };

  return (
    <RoomContext.Provider
      value={{
        ...roomInfo,
        // getRoom: getRoom,
        handleChange: handleChange,
      }}
    >
      {props}
    </RoomContext.Provider>
  );
};

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export default RoomProvider;
