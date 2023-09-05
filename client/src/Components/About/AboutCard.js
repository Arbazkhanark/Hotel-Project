import React from "react"
import "./About.css"

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
          <h4>About Us</h4>
          <h1>
            Welcome to <span>Hotel Del Luna</span> 
          </h1>
          <p>Your gateway to unforgettadle travel experiences and seamless hotel bookings. At Hotel Del Luna, we understand that every journey is a story waiting to be told, and we're here to help you create extraordinary chapters.</p>
         
          <p>Our mission is to make your travel dreams a reality. We're more than just a hotel booking platform -we're your trusted companion on your journey, ensuring you find the perfect sanctuary that matches your desires.</p>
          <button className='secondary-btn'>
            Explore More <i className='fas fa-long-arrow-alt-right'></i>
          </button>
        </div>
        <div className='row image'>
          <img src='/images/Black And White Minimalist House Illustration Rent Villa Logo (2).png' alt=''/>
        </div>
      </div>
    </>
  )
}

export default AboutCard
