"use client";
import Image from "next/image";
import circle6 from "../icons/circle-6.svg";
import circle7 from "../icons/circle-7.svg";

export default function ThirdSection() {
  return (
    <>
      <section className="section-3">
        <div className="section-3-main">
          <div className="section-3-heading-container">
            <p className="section-heading">
              Testing can be approached more effectively.
            </p>
          </div>
          <div className="section-3-content-container">
            <div className="section-3-content">
              <p className="section-3-content-title">FEEDBACK</p>
              <div className="section-3-problem-solution">
                <p className="problem">
                  <span>Problem</span>
                  Conventional assessments lack prompt and detailed feedback,
                  leading to delays in decision-making and financial losses for
                  organizations.
                  <Image
                    className="section-3-icons"
                    src={circle6}
                    alt="circle"
                  ></Image>
                </p>
                <p className="solution">
                  <span>Solution</span>
                  Our platform provides in-depth insights immediately
                  post-assessment. Both test owners and respondents gain access
                  to accurate, personalized results.
                  <Image
                    className="section-3-icons"
                    src={circle7}
                    alt="circle"
                  ></Image>
                </p>
              </div>
            </div>
            <div className="section-3-content">
              <p className="section-3-content-title">AUTOMATIC GRADING</p>
              <div className="section-3-problem-solution">
                <p className="problem">
                  <span>Problem</span>
                  Is there an efficient method to expedite the grading process
                  for multiple assessments while reducing the potential for
                  human errors and alleviating associated fatigue and stress?
                  <Image
                    className="section-3-icons"
                    src={circle6}
                    alt="circle"
                  ></Image>
                </p>
                <p className="solution">
                  <span>Solution</span>
                  Automated grading streamlines the process by allowing you to
                  set grading criteria and receive rapid, unbiased results.
                  Testportal ensures a swift, stress-free, and unbiased
                  assessment without fatigue or stress, delivering seamless
                  outcomes.
                  <Image
                    className="section-3-icons"
                    src={circle7}
                    alt="circle"
                  ></Image>
                </p>
              </div>
            </div>
            <div className="section-3-content">
              <p className="section-3-content-title">REMOTE TESTS</p>
              <div className="section-3-problem-solution">
                <p className="problem">
                  <span>Problem</span>
                  Students, employees, and candidates frequently work remotely,
                  residing in various locations and time zones, creating
                  challenges for effective communication.
                  <Image
                    className="section-3-icons"
                    src={circle6}
                    alt="circle"
                  ></Image>
                </p>
                <p className="solution">
                  <span>Solution</span>
                  Remote assessments eliminate the constraint of distance.
                  Respondents have the flexibility to complete tests at their
                  convenience and location. As the test owner, you receive
                  notifications when they start and submit their tests, ensuring
                  you stay updated on their progress.
                  <Image
                    className="section-3-icons"
                    src={circle7}
                    alt="circle"
                  ></Image>
                </p>
              </div>
            </div>
            <div className="section-3-content">
              <p className="section-3-content-title">EASY TO ARCHIVE</p>
              <div className="section-3-problem-solution">
                <p className="problem">
                  <span>Problem</span>
                  Paper tests take up lots of space and require additional rooms
                  to archive. They can easily get lost or damaged over time.
                  <Image
                    className="section-3-icons"
                    src={circle6}
                    alt="circle"
                  ></Image>
                </p>
                <p className="solution">
                  <span>Solution</span>
                  All your data and resources are digitized and available at
                  your fingertips. You can access them at any time, from
                  anywhere in the world, and on all devices {"("}computer,
                  tablet, and phone{")"}.
                  <Image
                    className="section-3-icons"
                    src={circle7}
                    alt="circle"
                  ></Image>
                </p>
              </div>
            </div>
            <div className="section-3-content">
              <p className="section-3-content-title">ECO-FRIENDLY</p>
              <div className="section-3-problem-solution">
                <p className="problem">
                  <span>Problem</span>
                  The production of paper consumes trees, significant quantities
                  of water, and involves the use of harmful chemicals.
                  Traditional tests contribute to deforestation and
                  environmental pollution as a result of these processes.
                  <Image
                    className="section-3-icons"
                    src={circle6}
                    alt="circle"
                  ></Image>
                </p>
                <p className="solution">
                  <span>Solution</span>
                  Our online assessments are entirely digital, contributing to
                  the preservation of our planet's beauty. Opting for remote
                  evaluations through Testportal solutions significantly reduces
                  paper usage, ultimately helping to minimize the need for tree
                  cutting.
                  <Image
                    className="section-3-icons"
                    src={circle7}
                    alt="circle"
                  ></Image>
                </p>
              </div>
              <link
                type="image/png"
                sizes="96x96"
                rel="icon"
                href=".../icons8-leaf-96.png"
              ></link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
