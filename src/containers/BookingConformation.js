import React from 'react'
import { useSelector } from "react-redux";
import {ConfirmationWrapper} from './Container.styles'

function BookingConformation() {
    const carStore = useSelector(state => state.Car);

  return (
    <ConfirmationWrapper>
    <div className='booking_confirmation'>
      <p>Thank you. Your Booking is confirmed.</p>
      <h1>{carStore.carName.split(' ').slice(0, -2).join(' ')}</h1>
      <h2>$ {carStore.totalCharges}</h2>
         <img src={carStore.pictureUrl}></img>

        </div>
        </ConfirmationWrapper>
  )
}

export default BookingConformation