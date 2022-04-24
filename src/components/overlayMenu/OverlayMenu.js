import React from "react"
import { Overlay } from "./OverlayMenu.styles"
import Navigation from "../navigation/Navigation"

const OverlayMenu = ({ menuOpen, callback }) => {

  return (
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
        <h2>Car Rental</h2>
        <Navigation/>
        <div
          className="closeButton"
          onClick={callback}
          role="button"
          tabIndex="0"
          onKeyDown={callback}
        >
          Closex
        </div>
      </div>
    </Overlay>
  )
}

export default OverlayMenu