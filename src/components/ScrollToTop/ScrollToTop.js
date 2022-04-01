import React, { useState, useEffect } from "react";
import { useWindowScroll } from "react-use";
import "./ScrollToTop.css";

export default function ScrollToTop() {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  if (!visible) {
    return false;
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="scroll-container">
      <div className="scrollTop" onClick={scrollToTop}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
