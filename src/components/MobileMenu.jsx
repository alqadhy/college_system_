// Hooks
import { useTranslation } from 'react-i18next';
import { useMobileMenu } from "../contexts/MobileMenuContext";
import useChangeLang from '../hooks/useChangeLang';

// Components
import CloseBtn from './CloseBtn';
import SelectBox from './SelectBox';

// Icons
import { FaAngleRight } from 'react-icons/fa';

function MobileMenu() {
  const { t, i18n } = useTranslation();
  const { isMenuOpen, closeMenu } = useMobileMenu();
  const changeLang = useChangeLang();


  return (
    <div className={`mobile-menu ${isMenuOpen ? "opened" : ''}`}>
      <div className="header">
        <h3>{t("menu_heading")}</h3>
        <CloseBtn onClickFunction={closeMenu} />
      </div>

      <div className="links">
        <a href="/" className='active'><FaAngleRight className='icon' size={17} /> {t("links.home")}</a>
        <a href="/about"><FaAngleRight className='icon' size={17} /> {t("links.about")}</a>
        <a href="/contact_us"><FaAngleRight className='icon' size={17} /> {t("links.contact_us")}</a>
        <a href="/faqs"><FaAngleRight className='icon' size={17} /> {t("links.faqs")}</a>
      </div>

      <div className="footer">
        <div className='row'>
          <span>{t("top_bar.call_us")}:</span>
          <a className='phone-link hover-link' href="tel:+201234567890" title={t("top_bar.call_us")}>
            +20 1234567890
          </a>
        </div>

        <div className='row'>
          <span>{t("top_bar.lang_label")}</span>
          <SelectBox selectElement={
            <select name="lang" onChange={e => changeLang(e.target.value)} value={i18n.language}>
              <option value="en">EN</option>
              <option value="ar">AR</option>
            </select>
          } />
        </div>
      </div>
    </div >
  );
}

export default MobileMenu;