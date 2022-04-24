import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import setProgress from '../../actions/setProgress'
import setCar from '../../actions/setCar'
import {SingleCarWrapper} from './CarContainer.styles'
import {Container, Row, Col} from "react-bootstrap"
import { ReactComponent as Snowflake } from "../../assets/images/Icons/snowflake.svg"
import { ReactComponent as Bag } from "../../assets/images/Icons/bag.svg"
import { ReactComponent as Door } from "../../assets/images/Icons/door.svg"
import { ReactComponent as Fuel } from "../../assets/images/Icons/fuel.svg"
import { ReactComponent as Person } from "../../assets/images/Icons/person.svg"
import { ReactComponent as Plane } from "../../assets/images/Icons/plane.svg"

function CarPage() {
    const progress = useSelector(state => state.progress);
    const carStore = useSelector(state => state.Car);
    const dispatch = useDispatch();
   
  return (
    <SingleCarWrapper>
         <Container>
           <Row className='single_car_page'>
            <div className='car_box'>
              <div className='car_box_picture'>
                <img src={carStore.pictureUrl} className="featuredimg"></img>
                <div className='vendorimg'>
                <p>{carStore.vendor}</p>
                <span>8.5 rating</span>
                </div>
              </div>
              <div className='car_box_description'>
                <h2>{carStore.carName.split(' ').slice(0, -2).join(' ')}
                <span>OR SIMILAR</span></h2>
                
                <ul className='first_set'>
                  <li><span className="hovertext" data-hover="Airconditioned">
                    {carStore.airConditionInd && <Snowflake/>}              
                    </span></li>
                    <li><span className="hovertext" data-hover="No of passengers">
                    <Person/>{carStore.passengerQuantity}              
                    </span></li>
                    <li><span className="hovertext" data-hover="No of baggage">
                    <Bag/>{carStore.baggageQuantity}              
                    </span></li>
                    <li><span className="hovertext" data-hover="Doors">
                    <Door/>{carStore.doorCount}              
                    </span></li>
                </ul>
                <ul className='second_set'>
                    <li>{carStore.transmissionType}</li>
                    <li><Fuel/>Fuel Type : {carStore.fuelType}</li>
                    <li><Plane/>Pickup location</li>
                    <li>Wifi available</li>
                </ul>
              </div>
              <div className='car_box_price'>
                  <p className='price'>$ {carStore.totalCharges}</p>
                  <button className='email_quote'>
                                Email Quote
                  </button>
              </div>
            </div>
          </Row>
          <Row>
              <div className='nav_btn'>
              <button class="btn_pinkoutline" type="button" onClick={ () => {
                        dispatch(setProgress(2));
                    }}>
                    <span>GO BACK</span>
              </button>

              <button class="btn_pink" type="button" onClick={ () => {
                        dispatch(setProgress(4));
                        dispatch(setCar(carStore));
                    }}>
                            <span>CONFIRM YOUR BOOKING</span>
              </button>
              </div>
            </Row>
         </Container>        
    </SingleCarWrapper>
  )
}

export default CarPage