// Hooks
import { useTranslation } from "react-i18next";

// Components
import MainBtn from "../MainBtn";

function CallToAction() {
  const { t } = useTranslation();

  return (
    <section className="call-to-action">
      <div className="container">
        <div className="text">
          <h2>{t("section_headings.call_to_action")}</h2>
          <MainBtn content={t("links.login")} path="/login" isSec={true} />
        </div>
      </div>
    </section>
  );
}

export default CallToAction;