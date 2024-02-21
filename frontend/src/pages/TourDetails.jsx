import React, { useContext, useEffect } from 'react'
import '../styles/tour-details.css'
import '../assets/data/tours'

import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tours'
import calculateAvgRating from '../Utils/avgRating'
import avatar from '../assets/images/avatar.jpg'
import { useRef, useState } from 'react'
import Booking from '../Components/Booking/Booking'
import Newsletter from './../shared/Newsletter'
import useFetch from './../hooks/useFetch'
import {BASE_URL} from './../Utils/config'
import {AuthContext} from './../context/AuthContext'


const TourDetails = () => {
  const { id } = useParams()
  const reviewMsgReff = useRef('')
  const { tourRating, setTourRating } = useState(null)
  const user = useContext(AuthContext)

 const {data:tour,loading,error}= useFetch(`${BASE_URL}/tours/${id}`);
  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    address,
    distance,
    maxGroupSize
  } = tour;

  const { totalRating, avgRatings } = calculateAvgRating(reviews);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };


  const submitHandler =async e => {
    e.preventDefault();
    const reviewText = reviewMsgReff.current.value;

    
    
    try {
      if(!user || user === undefined || user===null){
        alert ('Please sign in')
      }
      const reviewObj = {
        username:user?.username,
        reviewText,
        rating:tourRating
      }

      const res = await fetch(`${BASE_URL}/review/${id}`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(reviewObj)
      })
      const result = await res.json()
      if(!res.ok){
        return alert(result.message);
      }
      alert(result.message);
     
    } catch (err) {
      alert(error.message )
      
    }

  };

  useEffect(()=>{
    window.scrollTo(0,0)
  },[tour])
  return (
    <>

      <section>
        <Container>
          {
            !loading && <h4 className='text-center pt-5'>Loading....</h4>
          }
          {
            !error && <h4 className='text-center pt-5'>{error}</h4>
          }
         {
           !error && !loading || <Row>
          <Col lg='8'>
            <div className="tour__content">
              <img src={photo} alt='' />
              <div className="tour__info">
                <h2>{title}</h2>
                <div className='d-flex align-items-center gap-5'>
                  <span className='tour-rating d-flex align-items-center gap-1'>
                    <i class="ri-star-line" style={{ color: 'var(--secondary-color)' }}></i>
                    {avgRatings === 0 ? null : avgRatings}
                    {totalRating === 0 ? ('Not Rated') : (<span>({reviews?.length})</span>)}
                  </span>
                  <span><i class="ri-map-pin-2-fill"></i>{address}</span>
                </div>
                <div className="tour__extra-details">
                  <span>
                    <i class="ri-map-pin-2-fill"></i>{city}
                  </span>
                  <span>
                    <i class="ri-money-dollar-circle-line"></i>${price}/ per person
                  </span>
                  <span>
                    <i class="ri-pin-distance-fill"></i>{distance} km
                  </span>
                  <span>
                    <i class="ri-group-line"></i>{maxGroupSize} people
                  </span>
                </div>
                <h5>Description</h5>
                <p>{desc}</p>
              </div>
              <div className="tour__reviews mt-4">
                <h4>
                  Reviews({reviews?.length}reviews)
                </h4>
                <Form onClick={submitHandler}>
                  <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
                    <span onClick={() => setTourRating(1)}>
                      1 <i class="ri-star-line"></i>
                    </span>
                    <span onClick={() => setTourRating(2)}>
                      2 <i class="ri-star-line"></i>
                    </span>
                    <span onClick={() => setTourRating(3)}>
                      3 <i class="ri-star-line"></i>
                    </span>
                    <span onClick={() => setTourRating(4)}>
                      4 <i class="ri-star-line"></i>
                    </span>
                    <span onClick={() => setTourRating(5)}>
                      5 <i class="ri-star-line"></i>
                    </span>

                  </div>
                  <div className="review__input">
                    <input type="text" ref={reviewMsgReff} placeholder='Share your thoughts' required />
                    <button className="bt primary__btn text-white" type='Submit'>
                      Submit
                    </button>
                  </div>
                </Form>
                <ListGroup className='user__reviews'>
                  {
                    reviews?.map(review => (
                      <div className="review__item">
                        <img src={avatar} alt='' />
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>{review.username}</h5>
                              <p>
                                {
                                  new Date(review.createdAt).toLocaleDateString("en-US", options)
                                }
                              </p>
                            </div>
                            <span className='d-flex align-items-center'>
                              {review.rating}
                              <i class="ri-star-line"></i>

                            </span>
                          </div>
                          <h6>{review.reviewText}</h6>
                        </div>
                      </div>
                    ))
                  }

                </ListGroup>
              </div>
            </div>
          </Col>
          <Col lg='4'>
            <Booking tour={tour} avgRatings={avgRatings} />
          </Col>
        </Row>
         }
        </Container>
      </section>
      {/* <Newsletter/> */}

    </>
  )
}

export default TourDetails