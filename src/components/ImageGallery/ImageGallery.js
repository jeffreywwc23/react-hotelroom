import React from "react";
import "./ImageGallery.css";
import { useSelector } from "react-redux";

const ImageGallery = () => {
  const imageGalleryContent = useSelector(
    (state) => state.RoomSlice?.imageGalleryContent
  );

  return (
    <div className="image-gallery-container">
      <div className="image-gallery-wrapper">
        {imageGalleryContent?.map((singleImageGallery) => {
          return (
            <div className="image-gallery-box" key={singleImageGallery.id}>
              <div className="image-gallery-image-container">
                <img
                  className="image-gallery-image"
                  src={singleImageGallery.imageUrl}
                  alt={`gallery-${singleImageGallery.id}`}
                />
                <div className="overlay"></div>
                <div className="overlay2"></div>
              </div>
              <div className="text">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <h2>{singleImageGallery.title}</h2>
                <p>{singleImageGallery.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
