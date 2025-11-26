// Hooks
import { useTranslation } from "react-i18next";

// Icons
import { FaBriefcase, FaCode, FaNetworkWired, FaHotel } from "react-icons/fa";

// Components
import DepartmentCard from "./DepartmentCard";

function OurDepartments() {
  const { t } = useTranslation();

  return (
    <section className="our-departments">
      <div className="container">
        <h2 className="section-heading">{t("section_headings.our_departments")}</h2>
        <div className="grid-4">
          <DepartmentCard icon={<FaCode className="icon" size={32} />} title={t("departments.cs")} />
          <DepartmentCard icon={<FaNetworkWired className="icon" size={32} />} title={t("departments.is")} />
          <DepartmentCard icon={<FaBriefcase className="icon" size={32} />} title={t("departments.bm")} />
          <DepartmentCard icon={<FaHotel className="icon" size={32} />} title={t("departments.th")} />
        </div>
      </div>
    </section>
  );
}

export default OurDepartments;