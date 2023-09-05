import React, { useEffect } from 'react'
import { useState } from 'react';
import "./dashboard.css"
import axios from 'axios';

const Dashboard = () => {
    const [formData, setFormData] = useState({
        roomName: '',
        price: '',
        availability: 0
      });
      const [rooms,setRooms]=useState([]);
      


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };


      const handleSubmit= async(e)=>{
        e.preventDefault();
        console.log(formData)
        try {
            const response=await axios.post("http://localhost:8000/add",formData);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
      }
      
      const getAllRooms=async()=>{
        try {
            const response=await axios.get(`http://localhost:8000/rooms`);
            console.log(response);
            setRooms(response.data);
        } catch (error) {
            console.log(error);
        }
      }

      useEffect(()=>{
        getAllRooms();
      },[])

      const handleDelete=async(id)=>{

        try{
            const response=await axios.delete(`http://localhost:8000/api/rooms/${id}`);
            setRooms(rooms.filter(room => room._id !== id));
            console.log(response);
        }catch(error){
            console.log(error);
        }

      }


  return (
    <>
  {/* for header part */}
  <header>
    <div className="logosec">
      <div className="logo">DASHBOARD</div>
      <img
        src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
        className="icn menuicn"
        id="menuicn"
        alt="menu-icon"
      />
    </div>
    <div className="searchbar">
      <input type="text" placeholder="Search" />
      <div className="searchbtn">
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
          className="icn srchicn"
          alt="search-icon"
        />
      </div>
    </div>
    <div className="message">
      <div className="circle" />
      <img
        src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png"
        className="icn"
        alt=""
      />
      <div className="dp">
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
          className="dpicn"
          alt="dp"
        />
      </div>
    </div>
  </header>
  <div className="main-container">
    <div className="navcontainer">
      <nav className="nav">
        <div className="nav-upper-options">
          <div className="nav-option option1">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
              className="nav-img"
              alt="dashboard"
            />
            <h3> Dashboard</h3>
          </div>
          <div className="option2 nav-option">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
              className="nav-img"
              alt="articles"
            />
            <h3> Articles</h3>
          </div>
          <div className="nav-option option3">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
              className="nav-img"
              alt="report"
            />
            <h3> Report</h3>
          </div>
          <div className="nav-option option4">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png"
              className="nav-img"
              alt="institution"
            />
            <h3> Institution</h3>
          </div>
          <div className="nav-option option5">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
              className="nav-img"
              alt="blog"
            />
            <h3> Profile</h3>
          </div>
          <div className="nav-option option6">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/4.png"
              className="nav-img"
              alt="settings"
            />
            <h3> Settings</h3>
          </div>
          <div className="nav-option logout">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
              className="nav-img"
              alt="logout"
            />
            <h3>Logout</h3>
          </div>
        </div>
      </nav>
    </div>
    <div className="main">
      <div className="searchbar2">
        <input type="text" name="" id="" placeholder="Search" />
        <div className="searchbtn">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
            className="icn srchicn"
            alt="search-button"
          />
        </div>
      </div>
      <div className="box-container">
        <div className="box box1">
          <div className="text">
            <h2 className="topic-heading">60.5k</h2>
            <h2 className="topic">Rooms Views</h2>
          </div>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(31).png"
            alt="Views"
          />
        </div>
        <div className="box box2">
          <div className="text">
            <h2 className="topic-heading">150</h2>
            <h2 className="topic">Likes</h2>
          </div>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185030/14.png"
            alt="likes"
          />
        </div>
        <div className="box box3">
          <div className="text">
            <h2 className="topic-heading">320</h2>
            <h2 className="topic">Comments</h2>
          </div>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png"
            alt="comments"
          />
        </div>
        <div className="box box4">
          <div className="text">
            <h2 className="topic-heading">{rooms.length}</h2>
            <h2 className="topic">Total Rooms</h2>
          </div>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png"
            alt="published"
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
  <input
    type="text"
    name="roomName"
    value={formData.roomName}
    onChange={handleInputChange}
    placeholder="Room Name"
  />
  <input
    type="Number"
    name="price"
    value={formData.price}
    onChange={handleInputChange}
    placeholder="Price"
  />
  <div className='avail'>

    <label htmlFor="availability">Availability</label>
    <input
    type="number"
    name="availability"
    value={formData.availability}
    onChange={handleInputChange}
    placeholder="Price"
  />
  </div>

  <button className='formBtn' type="submit">Add Room</button>
</form>


      <div className="report-container">
        <div className="report-header">
          <h1 className="recent-Articles">Recent Articles</h1>
          <button className="view">View All</button>
        </div>
        <div className="report-body">
          <div className="report-topic-heading">
            <h3 className="t-op">Rooms</h3>
            <h3 className="t-op">Price</h3>
            <h3 className="t-op">Availability</h3>
            <h3 className='t-op'>Room Delete</h3>
          </div>
          <div className="items">
          {rooms.map((room)=>{
            return(
                <div className="item1">
                    <h3 className="t-op-nextlvl">Room No. {room.roomName}</h3>
                    <h3 className="t-op-nextlvl">₹ {room.price}</h3>
                    {room.availability>5?
                    <h3 className="t-op-nextlvl label-tag">{room.availability}</h3>:
                    <h3 className="t-op-nextlvl label-ta">{room.availability}</h3>
                    }
                    <button onClick={()=>handleDelete(room._id)} >Delete</button>
                </div>
            )
          })}

          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Dashboard