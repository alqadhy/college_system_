import { createContext, useState, useContext } from "react";

const MobileMenuContext = createContext();

export function MobileMenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <MobileMenuContext.Provider value={{ isMenuOpen, openMenu, closeMenu }}>
      {children}
    </MobileMenuContext.Provider>
  );
}

export function useMobileMenu() {
  return useContext(MobileMenuContext);
}
