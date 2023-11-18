import Image from "next/image";
import Link from "next/link";
import appLogoSVG from "../logo/app-logo2.svg";
import googleLogoSVG from "../logo/google-svg.svg";

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
            <p className="login-card-title">Forgot your password?</p>
            <p className="login-card-paragraph">
              Enter the email address that you used at sign-up. We will send you
              a link to set a new password.
            </p>
            <div className="login-form-container">
              <div className="field-input">
                <p>Email</p>
                <input
                  type="email"
                  name=""
                  id="email-input"
                  className="input-box"
                />
              </div>
              <button className="send-link-button">Send link</button>
              <Link href="../" id="go-back-link">
                Back
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
