// Icons
import { FaBars } from "react-icons/fa";

// Hooks
import { useMobileMenu } from "../contexts/MobileMenuContext";

function BurgerIcon() {
  const { openMenu } = useMobileMenu();

  return (
    <button className="burger-icon" onClick={openMenu}>
      <FaBars size={17} className="icon" />
    </button>
  );
}

export default BurgerIcon;