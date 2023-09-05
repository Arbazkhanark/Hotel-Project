import React from "react"
import "./About.css"
import AboutCard from "./AboutCard"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"

const About = () => {
  return (
    <>
      <HeadTitle />

      <section className='about top'>
        <div className='container'>
          <AboutCard />
        </div>
      </section>

      <section className='features top'>
        <div className='container aboutCard flex_space'>
          <div className='row row1'>
            <h1>
              Why <span>Choose Us</span>?
            </h1>
            <p> Your premier destination for hassle-free hotel booking. Our user-friendly platform offers a diverse range of hotels to suit every budget.Customer satisfaction is our priority, showcased through genuine reviews and ratings, backed by a responsive 24/7 customer support team. </p>
            <p> At Hotel Del Luna, we're more than just a booking platform- we're your trusted travel companion, here to make your journey unforgettable.</p>
           
            <button className='secondary-btn'>
              Explore More <i className='fas fa-long-arrow-alt-right'></i>
            </button>
          </div>
          <div className='row image'>
            <img src='/images/iStock-941779528-2.jpg' alt='' />
            
          </div>
        </div>
      </section>
    </>
  )
}

export default About
