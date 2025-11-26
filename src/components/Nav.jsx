// Hooks
import { useTranslation } from 'react-i18next';

function Nav() {
  const { t } = useTranslation();

  return (
    <nav>
      <a href="/" className='active'>{t("links.home")}</a>
      <a href="/about">{t("links.about")}</a>
      <a href="/contact_us">{t("links.contact_us")}</a>
      <a href="/faqs">{t("links.faqs")}</a>
    </nav>
  );
}

export default Nav;