import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <h2>ABOUT US</h2>
            <p>Welcome to Hotel Del Luna, your gateway to exceptional stays and unforgettable experiences. At Hotel Del Luna, we're passionate about connecting travelers with their ideal accommodations, ensuring every journey is marked by comfort, convenience, and memorable moments.</p>
            <br />
            <p>Thank you for choosing Your Hotel Del Luna for your travel needs. Join us in embarking on a journey of comfort, style, and adventure. Your next destination awaits!"</p>
            <div className='icon flex_space'>
              <i className='fab fa-facebook-f'></i>            
              <i className='fab fa-linkedin'></i>
              <i className='fab fa-instagram'></i>              
              <i className='fab fa-youtube'></i>
            </div>
          </div>

          <div className='box'>
            <h2>NAVIGATION</h2>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About us</Link>
              </li>
              <li>
                <Link to='/gallery'>Gallery</Link>
              </li>
              <li>
                <Link to='/destinations'>Destinations</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <Link to='/testimonial'>Testimonial</Link>
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className='box post'>
            <h2>RECENT POSTS</h2>
            <ul>
              <li>
                <p>Experience the magic of sunrise over misty mountains and indulge in gourmet delights - all under one roof at our Mountain Getaway.</p>
                <label className='fa fa-calendar-alt'></label>
                <span>14 Dec 2022</span>
              </li>
              <li>
                <p>Unleash your adventurous spirit with thrilling hikes and cozy nights at our Hotel Del Luna. Your alpine escape awaits!</p>
                <label className='fa fa-calendar-alt'></label>
                <span>11 Feb 2023</span>
              </li>
              <li>
                <p>Unleash your adventurous spirit with thrilling hikes and cozy nights at our Hotel Del Luna. Your alpine escape awaits!</p>
                <label className='fa fa-calendar-alt'></label>
                <span>21 June 2023</span>
              </li>
            </ul>
          </div>

          <div className='box'>
            <h2>NEWSLETTER</h2>
            <p>"Explore. Book. Wander. - Your Ultimate Travel Newsletter!"</p>
            <input type='text' name='' id='' />
            <input type='text' className='primary-btn' value='SUBSCRIBE' />
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>HotelDelLuna© 2023 All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer
