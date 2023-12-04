import Image from "next/image";
import appLogoSVG2 from "../logo/app-logo2.svg";
import facebookLogo from "../icons/facebook.svg";
import linkedinLogo from "../icons/linkedin.svg";

export default function PageFooter() {
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
              <Image
                className="socials-icon"
                alt="linkedin logo"
                src={linkedinLogo}
              ></Image>
              <Image
                className="socials-icon"
                alt="facebook logo"
                src={facebookLogo}
              ></Image>
            </div>
          </div>
          <div className="footer-bottom"></div>
        </div>
      </footer>
    </>
  );
}
