import React from 'react'
import './newsletter.css'


import {Container ,Row,Col} from 'reactstrap';
import maleTouurist from '../assets/images/male-tourist.png';
const Newsletter = () => {
  return (
   <section className='newsletter'>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="newsletter__content">
            <h2>
              Subscribe to get useful traveling information 
            </h2>
            <div className="newsletter__input">
              <input type='email' placeholder='Enter your email'/>
              <button className="newsletter__btn">Subscribe</button>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ad. Voluptate maiores, unde dignissimos rem dolores qui saepe assumenda delectus cupiditate illum harum nostrum voluptates omnis voluptas inventore recusandae quis.
            </p>
          </div>
        </Col>
        <Col lg='6'>
          <div className="newsletter__img">
            <img src={maleTouurist} alt=''/>
          </div>
        </Col>
      </Row>
    </Container>
   </section>
  )
}

export default Newsletter;