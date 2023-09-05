import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import BlogData from "../BlogData"
import EmptyFile from "../../../Common/Empty/EmptyFile"
import HeadTitle from "../../../Common/HeadTitle/HeadTitle"
import { useParams } from "react-router-dom"
import { MdKingBed } from "react-icons/md"
import { MdBathtub } from "react-icons/md"
import { FaWifi } from "react-icons/fa"
import { MdAirportShuttle } from "react-icons/md"

import { BsArrowRightShort } from "react-icons/bs"
import "./BlogSingle.css"

const BlogSingle = () => {
    const { id } = useParams()
    const [item, setItem] = useState(null)

    useEffect(() => {
        let item = BlogData.find((item) => item.id === parseInt(id))
        if (item) {
            setItem(item)
        }
    }, [id])
    return (
        <>
            <HeadTitle />

            {item ? (
                <section className='single-page top'>
                    <div className='container'>
                        <Link to='/blog' className='primary-btn back'>
                            <i className='fas fa-long-arrow-alt-left'></i> Go Back
                        </Link>

                        {/* --------- main-content--------- */}

                        <article className='content flex_space'>
                            <div className='main-content'>
                                
                                <img src={item.cover} alt='' />

                                <div className='category flex_space'>
                                    <span>{item.date}</span>
                                    <label>{item.catgeory}</label>
                                </div>
                                <div className="mainContent grid">
                            <div className="singleOffer">

                                <div className='Body'>
                                    <div className="price flex">
                                        <h3>
                                            Rs.70,000
                                        </h3>

                                    </div>

                                    <div className="facilities flex">
                                        <div className="singleFacility flex">
                                            <MdKingBed className='icon' />
                                            <small>2-Beds</small>
                                        </div>
                                        <div className="singleFacility flex">
                                            <MdBathtub className='icon' />
                                            <small>1 Bath-tub</small>
                                        </div>
                                        <div className="singleFacility flex">
                                            <FaWifi className='icon' />
                                            <small>Wi-Fi</small>
                                        </div>
                                        <div className="singleFacility flex">
                                            <MdAirportShuttle className='icon' />
                                            <small>Airport Bus</small>
                                        </div>
                                    </div>
                                    

                                    <button className='btn flex'>
                                        View Details
                                        <BsArrowRightShort className='icon' />
                                    </button>
                                </div>
                            </div>


                        </div>
                                <h1> {item.title} </h1>
                                <p>{item.para}</p>
                            </div>
                            {/* --------- side-content--------- */}
<div className='side-content'>
                <div className='category-list'>
                  <h1>Categories</h1>
                  <hr />
                  <ul>
                    {BlogData.map((item) => {
                      return (
                        <li>
                          <i className='far fa-play-circle'></i>
                          {item.catgeory}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>

              {/* --------- side-content--------- */}
                        </article>
                        
                        {/* --------- main-content--------- */}

                        

                    </div>
                </section>
            ) : (
                <EmptyFile />
            )}
        </>
    )
}

export default BlogSingle
