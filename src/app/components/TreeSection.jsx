import Image from "next/image";
import leafIcon from "../icons/leaf-solid.svg";
import treesImage from "../images/trees-image.webp";

export default function TreeSection() {
  return (
    <>
      <section className="tree-section">
        <p className="section-heading tree-section-heading">
          Let's work together to conserve trees!
          {/* <Image className="leaf-icon" src={leafIcon}></Image> */}
        </p>
        <p className="section-2-sub-heading tree-sub-heading">
          Embrace Triviaquiz{"'"}s online assessments to minimize your
          ecological impact. Your choice not only saves trees and water but also
          ensures a greener future for generations to come.
        </p>

        <Image loading="eager" className="trees-image" src={treesImage}></Image>
      </section>
    </>
  );
}
