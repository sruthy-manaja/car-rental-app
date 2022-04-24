import React, {useState} from 'react'
import setProgress from '../actions/setProgress'
import setLocation from '../actions/setLocation'
import {  useSelector, useDispatch } from "react-redux";
import SearchCar from "../containers/carContainer/SearchCar"
import {RequestWrapper} from "./Container.styles"
import {Container} from "react-bootstrap"

function CreateRequest() {
    const [enteredPlace, setEnteredPlace] = useState('');

    const progress = useSelector(state => state.progress);
    const locationStore = useSelector(state => state.location);
    const dispatch = useDispatch();
    
    const onLocationHandler = (location) => { 
        setEnteredPlace(location); 
    }
    
  return (
    <RequestWrapper>
        <main className="wrapper">
            <SearchCar enteredLocation={onLocationHandler}/>
            <Container>
           
                    <button className="btn_pink" type="button" onClick={ () => {
                        dispatch(setProgress(2));
                        dispatch(setLocation(enteredPlace));
                    }}>
                         Search
                    </button>
                
            </Container>
        </main>
    </RequestWrapper>
  )
}

export default CreateRequest;