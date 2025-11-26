// Hooks
import { useTranslation } from 'react-i18next';

// Components
import MainBtn from '../MainBtn';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="container">
        <div className="text">
          <h1>{t("hero.heading")}</h1>
          <p>{t("hero.paragraph")}</p>
          <MainBtn content={t("hero.button_txt")} path="/about" />
        </div>
      </div>
    </section>
  );
}

export default Hero;