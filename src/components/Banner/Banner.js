import React, { useRef, useEffect } from "react";
// import { Link } from 'react-router-dom';
import { TweenMax, Power3 } from 'gsap';

import './Banner.css';

const Banner = ({ children, title, subtitle }) => {
    let bannerItem = useRef(null);
    let bannerTitleItem = useRef(null);
    let bannerBarItem = useRef(null);
    let bannerPItem = useRef(null);
    let bannerButtonItem = useRef(null);

    useEffect(() => {
        TweenMax.to(
            bannerItem,
            {
                opacity: 1,
                duration: 0.8,
                y: -20,
                ease: Power3.easeOut
            }
        )

        TweenMax.to(
            bannerTitleItem,
            {
                opacity: 1,
                duration: 0.8,
                y: -20,
                ease: Power3.easeOut,
                delay: 1
            }
        )

        TweenMax.to(
            bannerBarItem,
            {
                opacity: 1,
                duration: 0.8,
                y: -20,
                ease: Power3.easeOut,
                delay: 1.4
            }
        )

        TweenMax.to(
            bannerPItem,
            {
                opacity: 1,
                duration: 0.8,
                y: -20,
                ease: Power3.easeOut,
                delay: 1.4
            }
        )

        TweenMax.to(
            bannerButtonItem,
            {
                opacity: 1,
                duration: 0.8,
                ease: Power3.easeOut,
                delay: 1.4
            }
        )

    }, [])

    const bannerReference = (element) => { bannerItem = element; }
    const bannerH1Reference = (element) => { bannerTitleItem = element; }
    const bannerBarReference = (element) => { bannerBarItem = element; }
    const bannerPReference = (element) => { bannerPItem = element; }
    const bannerButtonReference = (element) => { bannerButtonItem = element; }

    return (
        <div ref={bannerReference} className="banner">
            <h1 ref={bannerH1Reference}>{title}</h1>
            <div ref={bannerBarReference} />
            <p ref={bannerPReference}>{subtitle}</p>
            <span ref={bannerButtonReference}>{children}</span>
        </div>
    );
};

export default Banner;
