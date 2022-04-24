import React from "react"; 
import {CardsWrapper} from "./Cards.styles"

const Cards = props => {
 
    
    return(
        <CardsWrapper> 
        <div className="card">{props.children}</div>
        </CardsWrapper>
    );
}
export default Cards;