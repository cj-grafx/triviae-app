import Image from "next/image";
import appLogoSVG2 from "../app/logo/app-logo2.svg";
import googleLogoSVG from "../app/logo/google-svg.svg";
import Link from "next/link";
import "./styles/home-page-styles.css";
import PageHeader from "./components/PageHeader";
import FirstSection from "./components/FirstSection";
import AccessCodeSection from "./components/AccessCodeSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import TreeSection from "./components/TreeSection";
import FourthSection from "./components/FourthSection";
import PageFooter from "./components/PageFooter";

export default function Home() {
  return (
    <>
      <PageHeader />
      <FirstSection />
      <AccessCodeSection />
      <SecondSection />
      <ThirdSection />
      <TreeSection />
      <FourthSection />
      <PageFooter />
    </>
  );
}

// const header = document.querySelector(".header");
// const firstSection = document.querySelector(".section-1");

// const firstSectionOptions = {};

// const firstSectionObserver = new IntersectionObserver(function (
//   entries,
//   firstSectionObserver
// ) {
//   entries,
//     forEach((entry) => {
//       console.log(entry.target);
//     });
// },
// firstSectionOptions);

// firstSectionObserver.observe(firstSection);
