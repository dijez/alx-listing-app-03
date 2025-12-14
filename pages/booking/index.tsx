import BookingForm from '@/components/booking/BookingForm'
import OrderSummary from '@/components/booking/OrderSummary'
import CancellationPolicy from '@/components/booking/CancellationPolicy'
import React from 'react'

const BookingPage = () => {
  const bookingDetails={
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  }
  
    return (
    <div>
        <div>
            <BookingForm />
            <OrderSummary bookingDetails={bookingDetails} />
            <CancellationPolicy />
        </div>
    </div>
  )
}

export default BookingPage