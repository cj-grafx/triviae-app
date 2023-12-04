import Image from "next/image";
import checkIcon from "../icons/check-solid.svg";

export default function FourthSection() {
  return (
    <>
      <section className="section-4">
        <div className="section-4-main">
          <div className="section-4-content">
            <p className="section-4-heading">
              Prepare <span className="section-4-heading-span">your first</span>{" "}
              online test, quiz or exam
            </p>
            <p className="section-4-sub-heading">
              Discover the full range of features in Triviaequiz's assessment
              software to streamline your online evaluations {"–"} all
              complimentary. Enjoy and make the most of it!
            </p>
            <a href="#" className="section-1-sign-up-button section-4-button">
              Sign up free
            </a>
            <div className="tag-container">
              <span className="tag-icon-container">
                <Image alt="check icon" src={checkIcon}></Image>
              </span>
              <p className="tag">Free registration</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
