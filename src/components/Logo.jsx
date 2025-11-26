// Hooks
import { useTranslation } from 'react-i18next';

import logoImg from '../assets/imgs/logo.png';

function Logo() {
  const { t } = useTranslation();

  return (
    <a href="/" className="logo" title={t("inistituation_name")}>
      <img src={logoImg} alt={t("inistituation_name")} />
      {t("inistituation_name")}
    </a>
  );
}

export default Logo;