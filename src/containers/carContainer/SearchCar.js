import React, {useState, useEffect} from 'react'
import {  useSelector } from 'react-redux';
import {SearchcarWrapper} from './CarContainer.styles'
import {Container, Row, Col} from "react-bootstrap"

function SearchCar(props) {
    const location = useSelector(state => state.location);
    const [pickupDate, setPickupDate] = useState('');
    const [pickupTime, setPickupTime] = useState('');
    const [dropoffDate, setDropoffDate] = useState('');
    const [dropoffTime, setDropoffTime] = useState('');
    const [enteredPlace, setEnteredPlace] = useState(location);
    const [dropLocation, setDropLocation] = useState()
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setDefaultDate();
        setDefaultTime();
    }, [])
    
    function handleLocationChange(event){
        setEnteredPlace(event.target.value);
        props.enteredLocation(event.target.value);
    } 
    function handleDropLocationChange(event){
        setDropLocation(event.target.value);        
    }
    
    const setDefaultDate = () => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 3);
        const date = currentDate.toISOString().substr(0,10);
        setPickupDate(date);
        setDropoffDate(date);
    }
    const setDefaultTime = () => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 3);
        const currentTime = currentDate.toTimeString().split(" ")[0];
        setPickupTime(currentTime);
        setDropoffTime(currentTime);
    }

    function pickupDateChange(event){
        const date = event.target.value;
        setPickupDate(date);
    }
    function pickupTimeChange(event){
        const time = event.target.value;
        setPickupTime(time);
    }
    function dropoffDateChange(event){
        const date = event.target.value;
        setDropoffDate(date);
    }
    function dropoffTimeChange(event){
        const time = event.target.value;
        setDropoffTime(time);
    }
    function handleSelectChange(){
        setChecked(!checked);
    }
  return (
    <SearchcarWrapper>
        <Container>
            <Row>
                <div className='search_area_wrap'>
                <h3>
                    Search Details:
                </h3>
                <div className="row">
                    <Col lg={2} md={2} sm={4} xs={4} className="search_input_wrap">
                    <label>
                        Pick-up location
                        <input 
                    className="input" type="text"
                    placeholder="Type your location"
                    value={enteredPlace}
                    onChange={handleLocationChange}
                  />
                    </label>
                    {
                        checked && 
                        <label>
                        Drop-off location
                        <input 
                    className="input" type="text"
                    placeholder="Type location"
                    value={dropLocation}
                    onChange={handleDropLocationChange}
                  />
                    </label>
                    }
                    </Col>
                    <Col lg={2} md={2} sm={4} xs={4} className="search_input_wrap">
                    <label>
                        Pick-up date
                        <input
                            className="input"
                            type="date"
                            value={pickupDate}
                            onChange={pickupDateChange}
                        />
                    
                    </label>
                    </Col>
                    <Col lg={2} md={2} sm={4} xs={4} className="search_input_wrap">
                        <label>
                            Pick-up time
                        <input
                            className="input"
                            type="time"
                            value={pickupTime}
                            onChange={pickupTimeChange}
                        />
                        </label>
                        </Col>
                        <Col lg={2} md={2} sm={4} xs={4} className="search_input_wrap">
                    <label>
                        Drop-off date
                        <input
                            className="input"
                            type="date"
                            value={dropoffDate}
                            onChange={dropoffDateChange}
                        />
                        
                    </label>
                    </Col>
                    <Col lg={2} md={2} sm={4} xs={4} className="search_input_wrap">
                        <label>
                            Drop-off time
                        <input
                            className="input"
                            type="time"
                            value={dropoffTime}
                            onChange={dropoffTimeChange}
                        />
                        </label>
                        </Col>
                        <Col lg={2} md={2} sm={4} xs={4} className="search_input_wrap">
                    <label>
                        CURRENCY
                        <select>
                            <option value="eur">EUR</option>
                            <option value="usd">USD</option>
                        </select>
                    </label>
                    </Col>
                    <label className="check">
                        <input
                            type="checkbox"
                            checked={checked}
                            onChange={handleSelectChange}
                        />
                        <span>Return at different Location</span>
                </label>
                   
                </div>
                
                </div>
            </Row>
        </Container>
    </SearchcarWrapper>
  )
}

export default SearchCar