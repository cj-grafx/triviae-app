import Link from "next/link";
import Image from "next/image";
import appLogoSVG from "../logo/app-logo.svg";
import appLogoSVG2 from "../logo/app-logo2.svg";
// import ./

export default function PageHeader() {
  return (
    <>
      <div className="header-container">
        <header className="header">
          <a href="#" className="company-logo">
            <Image
              className="logo-1"
              alt="triviae-app-logo"
              src={appLogoSVG}
            ></Image>
            <Image
              className="logo-2"
              alt="triviae-app-logo"
              src={appLogoSVG2}
            ></Image>
          </a>
          <label class="hamburger-menu">
            <input type="checkbox" />
          </label>
          <nav className="navbar">
            <ul className="nav-links">
              <li className="nav-link drop-down-effect">
                <a className="main-link" href="#">
                  Product
                </a>
                <ul className="drop-down">
                  <li>Skills and Knowledge Assessment</li>
                  <li>Feedback and Grades </li>
                  <li>Customization Security</li>
                </ul>
              </li>
              <li className="nav-link drop-down-effect">
                <a className="main-link" href="#">
                  Who it's for
                </a>
                <ul className="drop-down">
                  <li>Teachers</li>
                  <li>Schools</li>
                  <li>Universities and Colleges</li>
                  <li>Training Companies &#38; Departments</li>
                </ul>
              </li>
              <li className="nav-link drop-down-effect">
                <a className="main-link" href="#">
                  Use cases
                </a>
                <ul className="drop-down">
                  <li>Quizzes</li>
                  <li>Exams</li>
                  <li>Homework</li>
                  <li>Training</li>
                </ul>
              </li>
              <li className="nav-link">
                <a href="#">Pricing</a>
              </li>
            </ul>
          </nav>
          <div className="login-and-sign-up-container">
            <a href="#" className="login-button">
              Login
            </a>
            <a href="#" className="sign-up-button">
              Sign up
            </a>
          </div>
        </header>
      </div>
      z
    </>
  );
}
