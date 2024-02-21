import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import{Link} from'react-router-dom'
import './../styles/thank-you.css'
import shield from '../assets/images/shield.gif'
const ThankYou = () => {
  return (
    <section>
     <Container>
          <Row>
               <Col lg='12' className='pt-5 text-center'>
                    <div className="thank-you">
                         <span>
                         <img src={shield} alt=""  height={80} width={80}/>
                         </span>
                         <h1 className="mb-3 fw-semibold">Thank You</h1>
                         <h3 className="mb-4">your tour is booked.</h3>

                         <Button className=' btn primary__btn w-25'>
                              <Link to='/home'>
                              Back to Home
                              </Link>
                         </Button>
                    </div>

               </Col>
          </Row>
     </Container>
    </section>
  )
}

export default ThankYou