import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "./pages/Home/Home";
import Rooms from "./pages/Rooms/Rooms";
import AboutUs from "./pages/AboutUs/AboutUs";
import SingleRoom from "./pages/SingleRoom/SingleRoom";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Error from "./pages/Error/Error";
import Navbar from "./components/Navbar/Navbar";
import NextPageToTop from "./components/NextPageToTop/NextPageToTop";

function App() {
  return (
    <>
      <Navbar />
      <NextPageToTop>
        <TransitionGroup>
          <CSSTransition timeout={450} classNames="fade">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/rooms/" element={<Rooms />} />
              <Route exact path="/rooms/:slug" element={<SingleRoom />} />
              <Route exact path="/about-us" element={<AboutUs />} />
              <Route exact path="/sign-up" element={<SignUp />} />
              <Route exact path="/sign-in" element={<SignIn />} />
              <Route element={<Error />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>

        {/* <Route
            render={({ location }) => (
              <>
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={450}
                    classNames="fade"
                  >
                    <Switch location={location}>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/rooms/" component={Rooms} />
                      <Route exact path="/rooms/:slug" component={SingleRoom} />
                      <Route exact path="/about-us" component={AboutUs} />
                      <Route exact path="/sign-up" component={SignUp} />
                      <Route exact path="/sign-in" component={SignIn} />
                      <Route component={Error} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </>
            )}
          /> */}
      </NextPageToTop>
    </>
  );
}

export default App;
