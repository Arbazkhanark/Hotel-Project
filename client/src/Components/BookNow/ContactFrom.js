import React, { useEffect, useState } from "react";
import "./Contact.css";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";

const ContactFrom = () => {
  const [name, setFname] = useState("");

  const [contact, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [number, setRoom] = useState(0);
  const [message, setMessage] = useState("");
  const [rooms, setRooms] = useState([]);
  const [price, setPrice] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState("");
  const getRooms = async () => {
    try {
      const response = await axios.get("/rooms");
      setRooms(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getRooms();
  }, []);

  const handleRoomChange = async (id) => {
    try {
      const response = await axios.get(`/get/room/${id}`);
      const price = response.data.price;
      console.log(response);
      setSelectedRoom(response.data.roomName);
      console.log(response.data.roomName);
      setPrice(price);
    } catch (err) {
      console.log(err);
    }
  };
  const formSubmit = async (e) => {
    e.preventDefault();
    const newValue = { name, contact, email, checkIn: date, selectedRoom };
    try {
      const response = await axios.post("/book/room", newValue);
      if (response.data.success) {
        alert("Booking Successfull");
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <section className="contact mtop">
        <div className="container flex">
          <div className="main-content">
            <h2>Book Now!!</h2>
            <p>Fill out the form below, we will get back you soon.</p>

            <form onSubmit={formSubmit}>
              <div className="grid1">
                <div className="input">
                  <span>
                    Name <label>*</label>
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setFname(e.target.value)}
                    required
                  />
                </div>

                <div className="input">
                  <span>
                    Contact Number <label>*</label>
                  </span>
                  <input
                    type="number"
                    name="contact"
                    value={contact}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="input">
                  <span>
                    Email <label>*</label>
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <span>
                    Types of Rooms <label>*</label>
                  </span>
                  <select onChange={(e) => handleRoomChange(e.target.value)}>
                    {rooms.map((room) => {
                      return (
                        <option value={room._id} key={room._id}>
                          {room.roomName}
                        </option>
                      );
                    })}
                  </select>
                </div>

                {/* <div class="dropdown" value={email} onChange={(e) => setEmail(e.target.value)} required>                    
                                    
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">All</a></li>
                      <li><a class="dropdown-item" href="#">Dulex</a></li>
                      <li><a class="dropdown-item" href="#">Non-Dulex</a></li>
                    </ul>
                  </div> */}
                {/* </div> */}

                <div className="input">
                  <span>
                    Check In<label>*</label>
                  </span>
                  <input
                    type="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="input">
                  <span>
                    No. of Days<label>*</label>
                  </span>
                  <input
                    type="number"
                    name="number"
                    value={number}
                    onChange={(e) => setRoom(e.target.vale)}
                  />
                </div>
              </div>
              <div className="input inputlast">
                <span>
                  Write Your Message <label>*</label>
                </span>
                <textarea
                  cols="30"
                  rows="10"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <p>Room Price:{price}</p>
              <button className="primary-btn">Submit Now</button>
            </form>
          </div>

          <div className="side-content">
            <h3>Visit our location</h3>
            <p>Kanatal, Uttarkhand, India~</p>
            <br />

            <h3>Get in Touch</h3>
            <span>hoteldelluna@gmail.com</span>
            <br />
            <span>+91 89681-36093</span>
            <br />

            <div className="icon">
              <h3>Follow Us</h3>

              <div className="flex_space">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactFrom;
