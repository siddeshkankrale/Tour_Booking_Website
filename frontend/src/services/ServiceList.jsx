import React from 'react'
import ServiceCard from './ServiceCard'
import{Col} from "reactstrap";
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData=[
     
     {
          imgUrl: guideImg,
          title:'🌟 Exceptional Guides: ',
          desc:'Our tours are led by seasoned professionals who are not only passionate about the destinations but are also adept at turning each journey into an educational and immersive experience.'
     },
     {
          imgUrl: customizationImg,
          title:'🌅 Flexible Itineraries:',
          desc:'Embrace the freedom to set your own pace. Our flexible itineraries let you linger longer in places that captivate you or make impromptu detours to hidden gems along the way. Your journey, your timeline.'
     },

]

const ServiceList = () => {
  return (
     <>
     {
          servicesData.map((item,index)=><Col lg='3' key={index}><ServiceCard item={item}/></Col>)
     }
     </>
  )
}

export default ServiceList