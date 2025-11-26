// Hooks
import { useTranslation } from "react-i18next";

// Components
import StepCard from "./StepCard";

// Icons
import { MdLogin, MdDashboard } from "react-icons/md";
import { RiBookOpenFill } from "react-icons/ri";


function HowSystemWorks() {
  const { t } = useTranslation();

  return (
    <section className="how-system-works">
      <div className="container">
        <h2 className="section-heading">{t("section_headings.how_the_system_works")}</h2>
        <div className="steps">
          <StepCard icon={<MdLogin size={18} />} title={t("how_to_use_system_steps.first_step")} />
          <StepCard icon={<MdDashboard size={18} />} title={t("how_to_use_system_steps.second_step")} />
          <StepCard icon={<RiBookOpenFill size={18} />} title={t("how_to_use_system_steps.third_step")} />
        </div>
      </div>
    </section>
  );
}

export default HowSystemWorks;