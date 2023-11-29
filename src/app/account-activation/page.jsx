import Image from "next/image";
import Link from "next/link";
import appLogoSVG from "../logo/app-logo2.svg";
import googleLogoSVG from "../logo/google-svg.svg";
import "../styles/form-styles.css";

export default function Home() {
  return (
    <>
      <header className="header">
        <Link href="#">
          <Image src={appLogoSVG} alt="app logo" id="app-logo"></Image>
        </Link>
      </header>
      <div className="login-card-container">
        <form>
          <div className="login-card">
            <p className="login-card-title">Activate your account</p>
            <p className="login-card-paragraph">
              An activation code has been sent to your email <br />
              <b id="user-email">praise37471408@gmail.com</b>
            </p>
            <p className="login-card-paragraph">
              Enter the code below and start using Triviaequiz.
            </p>
            <div className="login-form-container">
              <div className="field-input">
                <input
                  type="text"
                  id="activation-code-input"
                  className="input-box"
                  placeholder="Enter the activation code"
                />
              </div>
              <button className="activate-account-button">
                Activate your account
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
