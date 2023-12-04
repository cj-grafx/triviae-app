"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import appLogoSVG2 from "../logo/app-logo2.svg";
import facebookLogo from "../icons/facebook.svg";
import linkedinLogo from "../icons/linkedin.svg";

export default function PageFooter() {
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
    <>
      <footer className="footer-container">
        <div className="footer">
          <div className="footer-top">
            <Image
              alt="triviaequiz logo"
              className="triviae-quiz-logo"
              src={appLogoSVG2}
            ></Image>
            <div className="socials-container">
              <Link href="#">
                <Image
                  className="socials-icon"
                  alt="Linkedin logo"
                  src={linkedinLogo}
                ></Image>
              </Link>
              <Link href="#">
                <Image
                  className="socials-icon"
                  alt="Facebook logo"
                  src={facebookLogo}
                ></Image>
              </Link>
            </div>
          </div>
          <div className="footer-bottom">
            <span className="copyright-paragraph footer-text">
              Copyright &#169; Triviaequiz 2023
            </span>{" "}
            {windowWidth <= 780 && <br />}
            <Link href="#" className="privacy-policy-link footer-text">
              Privacy Policy
            </Link>{" "}
            {windowWidth <= 780 && <br />}
            <span className="bullet footer-text">&#8226;</span>{" "}
            <Link href="#" className="terms-and-conditions-link footer-text">
              Terms and condition
            </Link>{" "}
            {windowWidth <= 780 && <br />}
            <span className="copyright-paragraph-2 footer-text">
              Copyright &#169; Triviaequiz 2023
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
