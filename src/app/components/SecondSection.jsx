"use client";
import Image from "next/image";
import circle1 from "../icons/circle-1.svg";
import circle2 from "../icons/circle-2.svg";
import circle3 from "../icons/circle-3.svg";
import circle4 from "../icons/circle-4.svg";
import circle5 from "../icons/circle-5.svg";

export default function SecondSection() {
  return (
    <>
      <section className="section-2">
        <div className="section-2-main">
          <div className="section-2-heading-container">
            <p className="section-2-sub-heading">
              Simplify the process of testing skills and knowledge
            </p>
            <p className="section-2-heading">
              One platform for all your assessment requirements
            </p>
          </div>
          <div className="section-2-card-container">
            <div className="section-2-card card-1">
              <Image className="section-2-card-icon" src={circle1}></Image>
              <p className="section-2-card-heading">Quizzes</p>
              <p className="section-2-card-sub-heading">
                Make learning lively and effective for your remote students or
                connected classrooms
              </p>
            </div>
            <div className="section-2-card card-2">
              <Image className="section-2-card-icon" src={circle2}></Image>
              <p className="section-2-card-heading">Exams</p>
              <p className="section-2-card-sub-heading">
                Assess skills and knowledge within a focused, professional
                setting, free from distractions
              </p>
            </div>
            <div className="section-2-card card-3">
              <Image className="section-2-card-icon" src={circle3}></Image>
              <p className="section-2-card-heading">Homework</p>
              <p className="section-2-card-sub-heading">
                Provide engaging and interactive after-school tasks that are
                friendly in nature
              </p>
            </div>
            <div className="section-2-card card-4">
              <Image className="section-2-card-icon" src={circle4}></Image>
              <p className="section-2-card-heading">Competition</p>
              <p className="section-2-card-sub-heading">
                Inspire learners, foster challenges, and promote discussions to
                witness incredible outcomes
              </p>
            </div>
            <div className="section-2-card card-5">
              <Image className="section-2-card-icon" src={circle5}></Image>
              <p className="section-2-card-heading">Formative Assessment</p>
              <p className="section-2-card-sub-heading">
                Adopt a new educational method emphasizing positive motivation,
                supportive feedback, and equal opportunities for all
                participants
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
