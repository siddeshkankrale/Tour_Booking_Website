import React from 'react'
import './footer.css'

import {Container , Row , Col ,ListGroup , ListGroupItem} from 'reactstrap'
import logo from '../../assets/images/oceanlogo2.png'
import {Link}  from 'react-router-dom';

const quick__links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
];
const quick__links2 = [
  {
    path: '/gallery',
    display: 'Gallery'
  },
  {
    path: '/login',
    display: 'Login'
  },
  {
    path: '/register',
    display: 'Register'
  },
]


const Footer = () => {
  const year =new Date().getFullYear()
  return (
    <footer className="footer__img">
      <Container>
        <Row>
          <Col lg='5'>
            <img src={logo} alt=''  position-absolute/>
            <p className='footertext'>Welcome to <span className='span' > Ocean</span> Travel – Your Gateway to Extraordinary Adventures!</p>

<p className='span2'>At <span className='span3'>Ocean</span> Travel, we believe in turning dreams into reality, transforming every journey into a captivating tale of exploration and discovery. As a premier travel company, we specialize in curating unique and unforgettable experiences that take you beyond the ordinary and into the heart of the extraordinary.</p>

            <div className="social__links d-flex align-items-center gap-4 ">
              <span>
                <Link to='#'><i class="ri-linkedin-line"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-facebook-line"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-instagram-line"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-phone-line"></i></Link>
              </span>
            </div>
          </Col>
          <Col lg='1'>
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup  className='footer__quick-links'>
              {
                 quick__links.map((item,index)=>(
                  <ListGroupItem key={index}className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                 ))
              }

            </ListGroup>
          </Col>
          
          <Col lg='2'className='col'>
            <h5 className="footer__link-title">Contact</h5>
            <ListGroup className='footer__quick-links'>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>

                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  Address:
                </h6>
                <p className='mb-0'>Nashik,Maharashtra</p>

              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>

                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  Email:
                </h6>
                <p className='mb-0'>shindeniraj084@gmail.com</p>

              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>

                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  Phone:
                </h6>
                <p className='mb-0'>8999909628</p>

              </ListGroupItem>
              </ListGroup>
          </Col>
          <Col lg='12'>
            <p className="copyright">
              Copyright: {year},design and develop by Niraj.All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer