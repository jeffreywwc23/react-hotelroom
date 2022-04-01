import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";

const Error = () => {
  return (
    <Hero>
      <Banner title="404" subtitle="page not found">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
