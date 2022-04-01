import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SlideData from "../../components/ImageSlider/SliderData";
import items from "../../data/data";

import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";
import FeaturedRooms from "../../components/FeaturedRooms/FeaturedRooms";
import Footer from "../../components/Footer/Footer";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Blog from "../../components/Blog/Blog";

import { useDispatch, useSelector } from "react-redux";
import { setRoomInfo } from "../../redux/reducers/reducer";

const Home = () => {
  const dispatch = useDispatch();
  const roomInfo = useSelector((state) => state.RoomSlice?.roomInfo);

  useEffect(() => {
    let rooms = formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));

    dispatch(
      setRoomInfo({
        ...roomInfo,
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize,
      })
    );
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

  return (
    <>
      <Hero>
        <Banner
          title="Hotelroom.com"
          subtitle="YOUR ROOMS BOOKING ASSISTANT IN YOUR JOURNEY"
        >
          <Link to="/rooms" className="banner-btn">
            Look for rooms?
          </Link>
        </Banner>
      </Hero>
      <ImageGallery />
      <ImageSlider heading="Example Slider" slides={SlideData} />
      <FeaturedRooms rooms={roomInfo.featuredRooms} />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
