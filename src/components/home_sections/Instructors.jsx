// Hooks
import { useTranslation } from "react-i18next";

// Components
import InstructorCard from "./InstructorCard";

// Imgs
import instructor1Img from '../../assets/imgs/instructor_1.jpg';
import instructor2Img from '../../assets/imgs/instructor_2.jpg';
import instructor3Img from '../../assets/imgs/instructor_3.jpg';
import instructor4Img from '../../assets/imgs/instructor_4.jpg';

function Instructors() {
  const { t } = useTranslation();

  return (
    <section className="instructors">
      <div className="container">
        <h2 className="section-heading">{t("section_headings.top_instructors")}</h2>
        <div className="grid-4">
          <InstructorCard img={instructor1Img} name="Ali Mosa" department={t("departments.cs")} />
          <InstructorCard img={instructor2Img} name="Ayman Samy" department={t("departments.is")} />
          <InstructorCard img={instructor3Img} name="Rami Taha" department={t("departments.bm")} />
          <InstructorCard img={instructor4Img} name="Walid Fady" department={t("departments.cs")} />
        </div>
      </div>
    </section>
  );
}

export default Instructors;