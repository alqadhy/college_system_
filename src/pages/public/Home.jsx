// Home CSS File
import "../../assets/css/pages/home.css";
import "../../assets/css/animations.css";

// Home Page Sections
import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import MobileMenu from "../../components/MobileMenu";
import Hero from "../../components/home_sections/Hero";
import Features from "../../components/home_sections/Features";
import Stats from "../../components/home_sections/Stats";
import Instructors from "../../components/home_sections/Instructors";
import HowSystemWorks from "../../components/home_sections/HowSystemWorks";
import OurDepartments from "../../components/home_sections/OurDepartments";
import CallToAction from "../../components/home_sections/CallToAction";
import Footer from "../../components/Footer";

// Contexts
import { MobileMenuProvider } from "../../contexts/MobileMenuContext";

function Home() {
  return (
    <>
      <TopBar />
      <MobileMenuProvider>
        <Header />
        <MobileMenu />
      </MobileMenuProvider>
      <Hero />
      <Features />
      <Stats />
      <Instructors />
      <HowSystemWorks />
      <OurDepartments />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Home;