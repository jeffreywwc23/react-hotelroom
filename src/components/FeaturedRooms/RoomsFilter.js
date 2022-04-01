import React, { useState, useEffect } from "react";
import "./RoomsFilter.css";
import Title from "../Title/Title";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { setRoomInfo } from "../../redux/reducers/reducer";
import RoomsList from "./RoomsList";

const RoomFilter = () => {
  const dispatch = useDispatch();
  const roomInfo = useSelector((state) => state.RoomSlice.roomInfo);
  const [types, setTypes] = useState([]);
  const [people, setPeople] = useState("");

  const [roomData, setRoomData] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
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
    console.log("roomInfo = ", roomInfo);
    setRoomData({
      rooms: roomInfo.rooms,
      sortedRooms: roomInfo.sortedRooms,
      featuredRooms: roomInfo.featuredRooms,
      loading: roomInfo.loading,
      type: roomInfo.type,
      capacity: roomInfo.capacity,
      price: roomInfo.price,
      minPrice: roomInfo.minPrice,
      maxPrice: roomInfo.maxPrice,
      minSize: roomInfo.minSize,
      maxSize: roomInfo.maxSize,
      breakfast: roomInfo.breakfast,
      pets: roomInfo.pets,
    });
    let types = getUnique(roomInfo.rooms, "type");
    const typesResult = getTypes(types);

    let people = getUnique(roomInfo.rooms, "capacity");
    const peopleResult = getPeople(people);

    setTypes(typesResult);
    setPeople(peopleResult);
  }, []);

  const {
    register,
    setValue,
    getValues,
    control,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    defaultValues: {},
  });

  const getUnique = (rooms, value) => {
    return [...new Set(rooms?.map((item) => item[value]))];
  };

  const getTypes = (array) => {
    let rephrasedArray = ["all", ...array];
    return rephrasedArray.map((item, index) => (
      <option key={index} value={item}>
        {item}
      </option>
    ));
  };

  const getPeople = (array) => {
    return array.map((item, index) => (
      <option key={index} value={item}>
        {item}
      </option>
    ));
  };

  const getInputType = (typeOfValue, target) => {
    switch (typeOfValue) {
      case "breakfast":
        return target.checked;

      case "pets":
        return target.checked;

      case "price":
        return parseInt(target.value);

      case "minSize":
        return parseInt(target.value);

      case "maxSize":
        return parseInt(target.value);

      case "capacity":
        return parseInt(target.value);

      default:
        return target.value;
    }
  };

  const handleChange = async (event) => {
    const target = event.target;
    console.log("target = ", target.name);
    // const value = target.type === "checkbox" ? target.checked : target.value;
    const value = getInputType(target.name, event.target);
    const name = target.name;

    let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } =
      roomInfo;

    let tempRooms = [...rooms];
    console.log("start tempRooms = ", tempRooms);

    if (name === "type" && type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    if (name === "capacity" && capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }

    if (name === "price") {
      tempRooms = tempRooms.filter((room) => room.price <= price);
    }

    if (name === "minSize" || name === "maxSize") {
      tempRooms = tempRooms.filter(
        (room) => room.size >= minSize && room.size <= maxSize
      );
    }

    if (name === "breakfast" && breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }

    if (name === "pets" && pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    console.log("tempRooms = ", tempRooms);

    setRoomData({
      ...roomInfo,
      sortedRooms: tempRooms,
    });

    dispatch(
      setRoomInfo({
        ...roomInfo,
        [name]: value,
        // sortedRooms: tempRooms,
      })
    );
  };

  return (
    <>
      <section className="filter-container">
        <Title title="search rooms" />
        <form>
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              name="type"
              onChange={(e) => handleChange(e)}
              value={roomInfo.type}
              className="custom-select"
            >
              {types}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="capacity">guests</label>
            <select
              name="capacity"
              onChange={(e) => handleChange(e)}
              value={roomInfo.capacity}
              className="custom-select"
            >
              {people}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="price">price (${roomInfo.price})</label>
            <div className="range">
              <input
                type="range"
                name="price"
                min={roomInfo.minPrice}
                max={roomInfo.maxPrice}
                value={roomInfo.price}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="price">room size</label>
            <div className="size-inputs">
              <input
                type="number"
                name="minSize"
                value={roomInfo.minSize}
                onChange={(e) => handleChange(e)}
                className="size-input"
              />

              <input
                type="number"
                name="maxSize"
                value={roomInfo.maxSize}
                onChange={(e) => handleChange(e)}
                className="size-input"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="checkbox-group">
              <div className="single-extra">
                <label htmlFor="breakfast">breakfast</label>
                <input
                  type="checkbox"
                  name="breakfast"
                  checked={roomInfo.breakfast}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="single-extra">
                <label htmlFor="breakfast">pets</label>
                <input
                  type="checkbox"
                  name="pets"
                  checked={roomInfo.pets}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </div>
        </form>
      </section>

      <RoomsList rooms={roomData.sortedRooms} />
    </>
  );
};

export default RoomFilter;
