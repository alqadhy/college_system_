// Hooks
import { useTranslation } from 'react-i18next';
import useChangeLang from "../hooks/useChangeLang";

// SelectBox Component
import SelectBox from './SelectBox';

function TopBar() {
  const { t, i18n } = useTranslation();
  const changeLang = useChangeLang();

  return (
    <div className="top-bar">
      <div className="container">
        <div className="left">
          <p>{t("top_bar.welcome_msg")}</p>
          <a className='hover-link phone-link' href="tel:+201234567890" title={t("top_bar.call_us")}>
            +20 1234567890
          </a>
        </div>

        <div className="right">
          <div className="lang-box">
            <span>{t("top_bar.lang_label")}</span>

            <SelectBox selectElement={
              <select name="lang" onChange={e => changeLang(e.target.value)} value={i18n.language}>
                <option value="en">EN</option>
                <option value="ar">AR</option>
              </select>
            } />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;