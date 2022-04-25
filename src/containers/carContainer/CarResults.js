import React, {useState, useEffect} from 'react'
import {CarResultsWrapper} from "./CarContainer.styles"
import {Modal} from "react-bootstrap"
import Car from './Car';
import _ from "lodash";

function CarResults(props) {
  const [filterVal, setFilterVal] = useState(false);
  const [arrayList, setArrayList] = useState([])
  const [selectedItems, setSelectedItems] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
    
    const {data,sortKey,onSort} = props; 

        useEffect(() => {
            data.forEach((car,index) => {  
            
            if(car["Vendor"]["@Name"] === "ALAMO"){  
               car["VehAvails"].map(p => Object.assign(p.Vehicle, {Vendor: "ALAMO"}))
            }
            else if(car["Vendor"]["@Name"] === "AVIS"){ 
               car["VehAvails"].map(p => Object.assign(p.Vehicle, {Vendor: "AVIS"}))
            }
            else if(car["Vendor"]["@Name"] === "HERTZ"){  
               car["VehAvails"].map(p => Object.assign(p.Vehicle, {Vendor: "HERTZ"}))
            }
           
                return setArrayList(oldArray => [...oldArray, car.VehAvails] );
                });
        }, [])
        const carArray = arrayList.flat(); 
        const carNumbers = carArray.length;  


const addToCompareHandler = (item) => {
  setSelectedItems((selectedItems) => [...selectedItems, item]);
}
const removeFromCompare = (item) => {
  const filteredItems = selectedItems.filter(
    (product) => product.carName !== item.carName
  );
  setSelectedItems((selectedItems) => filteredItems);
};

  return (
    <CarResultsWrapper>
         <div className="info">
                    <div className="info_header">
                        <p>{carNumbers} cars are available</p>
                        <button className="compare" onClick={handleShow}>
                    COMPARE
                  </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Compare Car</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <table>
  <tr>
    <th>Car Name</th>
    <th>Price</th>
    <th>No of Passanger</th>
  </tr>

  {selectedItems.map((el, id) => (
               <tr key={id}>
                  <td>{el.carName}</td>
                  <td>{el.totalCharges}</td>
                  <td>{el.passengerQuantity}</td>
                  <td><button onClick={() => removeFromCompare(el)}>Remove</button></td>
              </tr>
              ))}
               </table>
              </Modal.Body>
      </Modal>
                        <div className="sort">
                            <p>Sort by</p>
                            <div>
                                <button onClick={() => setFilterVal(false)}>Price low to high</button>
                                |
                                <button onClick={() => setFilterVal(true)}>Price high to low</button>
                            </div>
                        </div>
                    </div>
                </div>
               
        <div className="results">
            
        <ul className='results_listing'>
                            
                            {!filterVal && 
                            carArray.sort((a, b) => {
                              return a["TotalCharge"]["@RateTotalAmount"].localeCompare(b["TotalCharge"]["@RateTotalAmount"], undefined, { numeric: true });
                            })
                                                        .map((mod,i)=> 
                                                        <li> 
                                                        <Car key={i} 
                                                          carName={mod["Vehicle"]["VehMakeModel"]["@Name"]}
                                                          vendor={mod["Vehicle"]["Vendor"]}
                                                          transmissionType = {mod["Vehicle"]["@TransmissionType"]}
                                                          airConditionInd = {mod["Vehicle"]["@AirConditionInd"]}
                                                          fuelType = {mod["Vehicle"]["@FuelType"]}
                                                          passengerQuantity = {mod["Vehicle"]["@PassengerQuantity"]}
                                                          baggageQuantity = {mod["Vehicle"]["@BaggageQuantity"]}
                                                          doorCount = {mod["Vehicle"]["@DoorCount"]}
                                                          pictureUrl = {mod["Vehicle"]["PictureURL"]}
                                                          totalCharges = {mod["TotalCharge"]["@RateTotalAmount"]}
                                                          addToCompare={addToCompareHandler}
                                                          ></Car>
                                                        </li> )}
                            {filterVal && 
                            carArray.sort((a, b) => {
                              return b["TotalCharge"]["@RateTotalAmount"].localeCompare(a["TotalCharge"]["@RateTotalAmount"], undefined, { numeric: true });
                            })
                                                        .map((mod,i)=> 
                                                        <li> 
                                                        <Car key={i} 
                                                          carName={mod["Vehicle"]["VehMakeModel"]["@Name"]}
                                                          vendor={mod["Vehicle"]["Vendor"]}
                                                          transmissionType = {mod["Vehicle"]["@TransmissionType"]}
                                                          airConditionInd = {mod["Vehicle"]["@AirConditionInd"]}
                                                          fuelType = {mod["Vehicle"]["@FuelType"]}
                                                          passengerQuantity = {mod["Vehicle"]["@PassengerQuantity"]}
                                                          baggageQuantity = {mod["Vehicle"]["@BaggageQuantity"]}
                                                          doorCount = {mod["Vehicle"]["@DoorCount"]}
                                                          pictureUrl = {mod["Vehicle"]["PictureURL"]}
                                                          totalCharges = {mod["TotalCharge"]["@RateTotalAmount"]}
                                                          addToCompare={addToCompareHandler}
                                                          ></Car>
                                                        </li> )
                            }
                          </ul>
                
                
                </div>
              
    </CarResultsWrapper>
  )
}

export default CarResults