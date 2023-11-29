"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function FirstSection() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="section-1">
      <div className="section-1-main">
        <div className="section-1-division-left">
          <p className="section-heading section-1-heading">
            Turn your {windowWidth <= 1284 && <br />}
            <span data-text="tests" className="section-1-heading-span">
              tests
            </span>
            <br />
            &#32;into success stories
          </p>
          <p className="section-1-sub-heading">
            Skills and knowledge assessment software serving businesses and
            educational institutions worldwide.
          </p>
          <a href="#" className="section-1-sign-up-button">
            Sign up for free
          </a>
        </div>
        <div className="section-1-division-right">
          <Image loading="lazy" className="spiral-design"></Image>
          <Image loading="lazy" className="dashboard-screenshot"></Image>
        </div>
      </div>
    </section>
  );
}
