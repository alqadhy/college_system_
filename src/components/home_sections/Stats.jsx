// Hooks
import { useTranslation } from "react-i18next";

// Components
import StatsBox from "./StatsBox";

function Stats() {
  const { t } = useTranslation();

  return (
    <section className="stats">
      <div className="container">
        <h2 className="section-heading">{t("section_headings.stats")}</h2>
        <div className="grid-4">
          <StatsBox isPlus={true} number={40} unit='K' title={t("stats.students")} />
          <StatsBox isPlus={true} number={123} unit="" title={t("stats.instructors")} />
          <StatsBox isPlus={false} number={4} unit="" title={t("stats.departments")} />
          <StatsBox isPlus={true} number={1} unit="K" title={t("stats.events")} />
        </div>
      </div>
    </section>
  );
}

export default Stats;