// Icons
import { FaUserGraduate } from "react-icons/fa";
import { MdMenuBook, MdDevices } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";

// Components
import FeatureBox from "./FeatureBox";

// Hooks
import { useTranslation } from 'react-i18next';

function Features() {
  const { t } = useTranslation();

  return (
    <section className="features hidden-section">
      <div className="container">
        <div className="grid-4">
          <FeatureBox icon={<FaUserGraduate size={20} />} title={t("features.feature1.title")} desc={t("features.feature1.desc")} learnMoreText={t("hero.button_txt")} />
          <FeatureBox icon={<MdMenuBook size={20} />} title={t("features.feature2.title")} desc={t("features.feature2.desc")} learnMoreText={t("hero.button_txt")} />
          <FeatureBox icon={<MdDevices size={20} />} title={t("features.feature3.title")} desc={t("features.feature3.desc")} learnMoreText={t("hero.button_txt")} />
          <FeatureBox icon={<AiFillSafetyCertificate size={20} />} title={t("features.feature4.title")} desc={t("features.feature4.desc")} learnMoreText={t("hero.button_txt")} />
        </div>
      </div>
    </section>
  );
}

export default Features;