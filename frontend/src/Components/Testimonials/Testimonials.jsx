import React from 'react'
import Slider from 'react-slick';
import ava01 from '../../assets/images/nlogo.png'
import ava02 from '../../assets/images/dlogo.png'
import ava03 from '../../assets/images/slogo.png'



const Testimonials = () => {

     const settings = {
          dots: true,
          
          infinite: true,
          autoplay: true,
          speed: 1000,
          swipeToSlide: true,
          autoplaySpeed: 2000,
          slideToShow: 3,

          responsive: [
               {
                    breakpoint: 992,
                    settings: {
                         slideToShow: 2,
                         slideToScroll: 1,
                         infinite: true,
                         dots: true,
                    },
               },
               {
                    breakpoint: 576,
                    settings: {
                         slideToShow: 30,
                         slideToScroll: 1,
                    },
               },
          ]
     }


     return (
          <Slider {...settings}>
               <div className="testimonial">
                    <p>
                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    </p>
                    <div className='d-flex align-items-center gap-2 mt-1'>
                         <img src={ava01} className='w-25 h-15 rounded-2' alt='' />
                         <div>
                              <h6 className='mb-0 mt-3'>Niraj</h6>
                              <p>Customer</p>
                         </div>
                    </div>

               </div>
               <div className="testimonial ">
                    <p>
                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    </p>
                    <div className='d-flex align-items-center gap-4 mt-3'>
                         <img src={ava02} className='w-25 h-25 rounded-2' alt='' />
                         <div>
                              <h6 className='mb-3 mt-3'></h6>
                              <p>Customer</p>
                         </div>
                    </div>

               </div>
               <div className="testimonial ">
                    <p>
                         Lorem ipsum dolor, sit amet consectetur adipisicing elit.

                    </p>
                    <div className='d-flex align-items-center gap-4 mt-3'>
                         <img src={ava03} className='w-25 h-25 rounded-2' alt='' />
                         <div>
                              <h6 className='mb-0 mt-3'>Sam Shinde</h6>
                              <p>Customer</p>
                         </div>
                    </div>

               </div>
          </Slider>
     );
};

export default Testimonials;