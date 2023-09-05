import React, { useState } from "react"
import Dcards from "./Dcards"
import "../gallery/Gallery.css"
import "./Destinations.css"
import Sdata from "./Sdata"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const AllItem = () => {
  const [items, setIems] = useState(Sdata)
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1
  //   }
  // };
  return (
    <>
      {/* <Carousel responsive={responsive}>
        <section className='gallery desi mtop'>
          <div className='container'>
            <div className='content grid'>

              {items.map((item) => {
                return <Dcards key={item.id} item={item} />
              })}
            </div>
          </div>
        </section>
      
      <section className='gallery desi mtop'>
          <div className='container'>
            <div className='content grid'>

              {items.map((item) => {
                return <Dcards key={item.id} item={item} />
              })}
            </div>
          </div>
        </section>
      <div>  </div>
      <div>  </div>
    </Carousel > */}
    <section className='gallery desi mtop'>
        <div className='container'>
          <div className='content grid'>
            
            {items.map((item) => {
              return <Dcards key={item.id} item={item} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default AllItem

/*
import React, { useState } from "react"
import Dcards from "./Dcards"
import "../gallery/Gallery.css"
import "./Destinations.css"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import Sdata from "../Destinations/Sdata"

const Destinations = () => {
  const [items, setIems] = useState(Sdata)
  return (
    <>
      <HeadTitle />
      <section className='gallery desi top'>
        <div className='container'>
          <div className='content grid'>
            {items.map((item) => {
              return <Dcards key={item.id} item={item} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Destinations*/
