import React, {useState} from 'react'
import SearchCar from './carContainer/SearchCar'
import {Container, Row, Col} from "react-bootstrap"
import data from '../data/data'
import CarResults from './carContainer/CarResults';
import {ChooseWrapper} from "./Container.styles"

function ChooseCar() {
    const [result, setResult] = useState({
        data: data,
        location: '',
        searchParameters: [],
        vehicleTypeSearchParameters: [],
        sortKey: 'totalCharges'
    });
   
   

  return (
    <ChooseWrapper>  
        <Container>
            <Row>
                <Col lg={4} md={4} sm={12} xs={12} className="mobile_order_two">
                    <div className='search_request_inner'>
                    <SearchCar/>
                    </div>
                </Col>
                <Col lg={8} md={8} sm={12} xs={12} className="mobile_order_one">
                    <CarResults data = {data[0].VehAvailRSCore.VehVendorAvails}  />
                </Col>
            </Row>
        </Container>
    </ChooseWrapper>
  )
}

export default ChooseCar