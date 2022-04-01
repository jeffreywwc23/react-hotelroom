import React from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";

const AboutUs = () => {
  const aboutUsContent = useSelector(
    (state) => state.RoomSlice?.aboutUsContent
  );

  return (
    <>
      <Hero hero="aboutUsHero">
        <Banner title="about us">
          <Link to="/" className="btn-primary">
            Return home
          </Link>
        </Banner>
      </Hero>

      <div id="parallax-container">
        {aboutUsContent.map((aboutUs) => {
          return (
            <div className="about-us-section" key={aboutUs.id}>
              <div
                className={`parallax-${aboutUs.parallaxCount}`}
                style={{ backgroundImage: `url(${aboutUs.imageUrl})` }}
              >
                <h2>{aboutUs.parallaxTitle}</h2>
              </div>

              <div className="block">
                <p>
                  <span className="first-character parallax-one-character-color">
                    {aboutUs.text.charAt(0)}
                  </span>
                  {aboutUs.text.slice(1)}
                </p>
                <p className="line-break margin-top-10"></p>
                <p className="margin-top-10">{aboutUs.textBelowLine}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AboutUs;
