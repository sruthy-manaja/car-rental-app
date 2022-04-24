import React from 'react'
import CreateRequest from '../../containers/CreateRequest'
import {  useSelector } from 'react-redux';
import ChooseCar from '../../containers/ChooseCar';
import CarPage from '../../containers/carContainer/CarPage';
import BookingConformation from '../../containers/BookingConformation';

function Dashboard() {
    const progress = useSelector(state => state.progress);
  return (
    <div>
        {
            progress === 1 && <CreateRequest/>
        }
        {
            progress === 2 && <ChooseCar/>
        }
        {
            progress === 3 && <CarPage/>
        }
        {
            progress === 4 && <BookingConformation/>
        }
    </div>
  )
}

export default Dashboard