import Image from "next/image";
import appLogoSVG from "../logo/app-logo2.svg";
import googleLogoSVG from "../logo/google-svg.svg";

export default function Home() {
  return (
    <>
      <header className="header">
        <a href="#">
          <Image src={appLogoSVG} alt="app logo" id="app-logo"></Image>
        </a>
      </header>
      <div className="login-card-container">
        <form>
          <div className="login-card">
            <p className="login-card-title">Sign in</p>
            <div className="login-form-container">
              <div className="field-input">
                <p>Enter your email</p>
                <input
                  type="email"
                  name=""
                  id="email-input"
                  className="input-box"
                />
              </div>
              <div className="field-input">
                <p>Enter password</p>
                <input
                  type="password"
                  name=""
                  id="password-input"
                  className="input-box"
                />
              </div>
              <button className="sign-in-button">Sign in</button>
              <p className="login-alternative">OR</p>
              <a href="#" id="google-login-link">
                <span className="google-logo">
                  <Image src={googleLogoSVG} alt="google logo"></Image>
                </span>
                Continue with Google
              </a>
              <hr className="divider" />
              <a href="#" id="sign-up-link">
                Sign up
              </a>
              <a href="#" id="forgot-password-link">
                Forgot your password?
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
