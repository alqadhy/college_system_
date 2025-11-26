// Hooks
import { useTranslation } from "react-i18next";

// Components
import Logo from "./Logo";
import SocialMediaIcons from "./SocialMediaIcons";

// Icons
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";


function Footer() {
  const { t } = useTranslation();
  const socialMediaWebsites = [
    { name: "facebook", link: "https://www.facebook.com", icon: <FaFacebookF size={16} />, theme_color: "#3b5998" },
    { name: "x", link: "https://www.x.com", icon: <FaXTwitter size={16} />, theme_color: "#000000" },
    { name: "instagram", link: "https://www.instagram.com", icon: <FaInstagram size={16} />, theme_color: "#F56040" },
    { name: "linkedin", link: "https://www.linkedin.com", icon: <FaLinkedinIn size={16} />, theme_color: "#0a66c2" },
  ];

  return (
    <footer>
      <div className="top">
        <div className="container">
          <div className="col">
            <Logo />
            <p>{t("hero.paragraph")}</p>
          </div>

          <div className="col">
            <h3 className="heading">{t("footer_headings.links")}</h3>
            <ul className="list">
              <li><a className="hover-link" href="/">{t("links.home")}</a></li>
              <li><a className="hover-link" href="/about">{t("links.about")}</a></li>
              <li><a className="hover-link" href="/contact_us">{t("links.contact_us")}</a></li>
              <li><a className="hover-link" href="/faqs">{t("links.faqs")}</a></li>
            </ul>
          </div>

          <div className="col">
            <h3 className="heading">{t("footer_headings.contact_info")}</h3>
            <ul className="list">
              <li>
                <FaPhoneAlt size={16} />
                <a href="tel:+201234567890" className="phone-link hover-link">+20 1234567890</a>
              </li>
              <li>
                <FaEnvelope size={16} />
                <a href="mailto:test@gmail.com" className="hover-link">test@gmail.com</a>
              </li>
              <li>
                <FaLocationDot size={16} />
                <p>Country, City, Location, random st.</p>
              </li>
            </ul>
          </div>

          <div className="col">
            <h3 className="heading">{t("footer_headings.social_media")}</h3>
            <SocialMediaIcons websites={socialMediaWebsites} />
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="container">
          Copyrights &copy; {new Date().getFullYear()} | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;