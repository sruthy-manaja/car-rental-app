import React, {useState, useEffect} from "react"
import { HamburgerButton } from "./Hamburger.styles"



const Hamburger = ({ handleOverlayMenu }) => { 
  const [barVisibility, setBarVisibility] = useState(false);
  const [scrollPosition, setSrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    position >= 120 ? setBarVisibility(true) : setBarVisibility(false);
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

return(
  
  <HamburgerButton onClick={handleOverlayMenu}>
    <div className={barVisibility ? "showBar" : "hideBar"}><div className="fabars">≡</div></div>
  </HamburgerButton>
)
}

export default Hamburger