// Components
import Logo from "./Logo";
import Nav from "./Nav";
import MainBtn from "./MainBtn";
import BurgerIcon from "./BurgerIcon";

// Hooks
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from "react";

// Utils
import { addClass, removeClass } from "../utils/utils";

function Header() {
  const { t } = useTranslation();
  const headerRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const headerHeight = 90;

      if (window.scrollY >= headerRef.current.offsetTop + headerHeight)
        addClass("active", headerRef.current);

      if (window.scrollY < headerRef.current.offsetTop)
        removeClass("active", headerRef.current);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={headerRef}>
      <div className="container">
        <Logo />
        <Nav />
        <div className="buttons-container">
          <MainBtn path="/login" content={t("links.login")} />
          <BurgerIcon />
        </div>
      </div>
    </header>
  );
}

export default Header;