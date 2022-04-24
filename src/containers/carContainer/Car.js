import React from 'react'
import Cards from '../../components/ui/Cards'
import { useSelector, useDispatch } from "react-redux";
import setProgress from '../../actions/setProgress'
import setCar from '../../actions/setCar'
import {SingleCarWrapper} from './CarContainer.styles'
import Alamo from "../../assets/images/Vendors/alamo.svg"
import Avis from "../../assets/images/Vendors/avis.svg"
import Hertz from "../../assets/images/Vendors/hertz.svg"
import { ReactComponent as Snowflake } from "../../assets/images/Icons/snowflake.svg"
import { ReactComponent as Bag } from "../../assets/images/Icons/bag.svg"
import { ReactComponent as Door } from "../../assets/images/Icons/door.svg"
import { ReactComponent as Fuel } from "../../assets/images/Icons/fuel.svg"
import { ReactComponent as Person } from "../../assets/images/Icons/person.svg"
import { ReactComponent as Plane } from "../../assets/images/Icons/plane.svg"

function Car(props) { 
  const progress = useSelector(state => state.progress);
  const carStore = useSelector(state => state.Car);
  const dispatch = useDispatch();
  const getImage = vendorName => { 
    if (vendorName === "ALAMO") {
      return Alamo;
    }else if(vendorName === "AVIS"){
      return Avis
    }
    else if(vendorName === "HERTZ"){
      return Hertz
    }
  }

  return (
    <SingleCarWrapper>
      <Cards>
          <div className='car_box'>
          <div className='car_box_picture'>
            <img src={props.pictureUrl} className="featuredimg"></img>
            <div className='vendorimg'>
              <img src={getImage(props.vendor)} alt="vendor name" />
              <span>8.5 rating</span>
            </div>
            <button className='compare' onClick={() => props.addToCompare(props)}>
              Add to compare
            </button>
          </div>
          <div className='car_box_description'>
            <h2>{props.carName.split(' ').slice(0, -2).join(' ')}
            <span>OR SIMILAR</span></h2>
            
            <ul className='first_set'>
              <li><span className="hovertext" data-hover="Airconditioned">
                    {props.airConditionInd && <Snowflake/>}              
                  </span></li>
                <li><span className="hovertext" data-hover="No of passengers">
                    <Person/>{props.passengerQuantity}              
                    </span></li>
                <li><span className="hovertext" data-hover="No of baggage">
                    <Bag/>{props.baggageQuantity}              
                    </span></li>
                <li><span className="hovertext" data-hover="Doors">
                    <Door/>{props.doorCount}              
                    </span></li>
            </ul>
            <ul className='second_set'>
                <li>{props.transmissionType}</li>
                <li><Fuel/>Fuel Type : {props.fuelType}</li>
                <li><Plane/>Pickup location</li>
                <li>Wifi available</li>
            </ul>
          </div>
          <div className='car_box_price'>
              <p className='price'>$ {props.totalCharges}</p>
              <button class="btn_pink" type="button" onClick={ () => {
                                  dispatch(setProgress(3));
                                  dispatch(setCar(props));
                              }}>
                            <span>Select</span>
              </button>
              <button className='email_quote'>
                            Email Quote
              </button>
          </div>
          </div>
      </Cards>
    </SingleCarWrapper>
  )
}

export default Car