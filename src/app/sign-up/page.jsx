import Image from "next/image";
import appLogoSVG from "../logo/app-logo2.svg";
import googleLogoSVG from "../logo/google-svg.svg";
import Link from "next/link";
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
            <p className="login-card-title">Sign up</p>
            <p className="login-card-paragraph">
              Just one more step to create your first test!
            </p>
            <div className="login-form-container">
              <div className="field-input">
                <p>Email address</p>
                <input
                  type="email"
                  placeholder=""
                  id="email-input"
                  className="input-box"
                />
              </div>
              <div className="field-input">
                <p>Password &#40;min. 8 characters&#41;</p>
                <input
                  type="password"
                  placeholder=""
                  id="password-input"
                  className="input-box"
                />
              </div>
              <div className="checkbox-validation-container">
                <input type="checkbox" placeholder="" id="checkbox-input" />
                <div className="checkbox-label-container">
                  <p>
                    By signing up I agree to <a href="#">Terms & Conditions</a>{" "}
                    and <a href="#">Privacy Policy</a>.
                  </p>
                </div>
              </div>
              <button className="sign-up-button">Sign up</button>
              <p className="login-alternative">OR</p>
              <Link href="#" id="google-sign-up-link">
                <span className="google-logo google-sign-up-logo">
                  <Image src={googleLogoSVG} alt="google logo"></Image>
                </span>
                Sign up with Google
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
