import React from 'react'
import { Carousel } from 'react-bootstrap'


function Photos({resPhotos}) {
  return (
    <div>
         <Carousel>
      <Carousel.Item>
        <img
          className=" w-50 " height="150px"
          src={resPhotos[0]}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" w-50" height="150px"
          src={resPhotos[1]}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-50" height="150px"
          src={resPhotos[2]}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-50" height="150px"
          src={resPhotos[3]}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Photos