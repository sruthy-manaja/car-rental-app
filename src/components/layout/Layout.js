import React, { useState } from "react"

 import Header from "../header/Header"
 import Hamburger from "../hamburger/Hamburger"
 import OverlayMenu from "../overlayMenu/OverlayMenu"
 import { GlobalStyles, Primary } from "./Layout.styles"
 import Footer from "../footer/Footer"

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOverlayMenu = () => setMenuOpen(prev => !prev)

  return (
    <>
      <GlobalStyles />
      <Hamburger handleOverlayMenu={handleOverlayMenu} />
      <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
      <Header />
      <Primary>{children}</Primary>
      <Footer />
    </>
  )
}

export default Layout