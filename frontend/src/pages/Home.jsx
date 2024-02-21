import React from 'react';
import '../styles/home.css';
import '../shared/search-bar.css'
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/men.webp';
import heroImg02 from '../assets/images/bag.webp';
import heroVideo from '../assets/images/hero-video.mp4';
import Subtitle from '../shared/Subtitle';

import  Testimonials from '../Components/Testimonials/Testimonials'
import SearchBar from '../shared/SearchBar';
import FeaturedTourList from '../Components/Featured-tours/FeaturedTourList';
import ServiceList from '../services/ServiceList';
import worldImg from '../assets/images/world.png';
import experienceImg1 from '../assets/images/worldimg.jpg'
import MasonryImagesGallery from '../Components/Image-gallery/MasonryImagesGallery';
//import Newsletter from '../shared/Newsletter';




const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know before you go'} />
                  <img src={worldImg} alt='' />
                </div>
                <h1><span className='span'>Traveling</span> opens the door to creating <span className="highlights">memories</span></h1>
                <p className='design'>Welcome to <span className='span1'>OCEAN</span>- Where Every Journey is an Adventure!</p>
                <p className='bold'>Why Choose Us?</p><p>
🌍 <span className='span2'>Explore the Unexplored:</span> Our carefully curated tours take you off the beaten path, uncovering hidden gems and ensuring an authentic travel experience.</p>
<p>🚀<span className='span2'> Seamless Booking:</span> Booking your dream adventure is just a few clicks away. Our user-friendly website makes it easy to find, customize, and reserve your perfect getaway.</p>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-1">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            
            <SearchBar />
          </Row>


        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col  lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="servises__title">We offer our best services</h2>
            </Col>
            <ServiceList/>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Explore'}/>
              <h2 className='featured__tour-title'>
                Our Featured Tours
              </h2>
            </Col>
            <FeaturedTourList/>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg ='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Experience'}/>
                <h2>With our all experience <br/>we will serve you </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  <br/>
                  Quas aliquam,hic tempora inventore
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">

                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Client</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>

            </Col>
            <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg1} alt=''/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'}/>
              <h2 className="gallery_-title">  Customers Tour Gallery</h2>
            </Col>
            <Col lg='11'>
              <MasonryImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'}/>
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonials/>
            </Col>
          </Row>
        </Container>
      </section>
     {/* <Newsletter/> */}
      <footer/>
    </>
  )
};

export default Home;

