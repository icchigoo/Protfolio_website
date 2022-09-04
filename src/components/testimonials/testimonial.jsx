import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import 'swiper/css';
import 'swiper/css/pagination';


// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';






const data =[
  {
    avatar: AVTR1,
    name: 'Random testing',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In non, architecto fuga sint porro natus laborum inventore. Iusto cupiditate sint nobis, dolores dolorem, adipisci quisquam quas enim distinctio aut natus?',

  },

  {
    avatar: AVTR2,
    name: 'Random testing',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In non, architecto fuga sint porro natus laborum inventore. Iusto cupiditate sint nobis, dolores dolorem, adipisci quisquam quas enim distinctio aut natus?',

  },

  {
    avatar: AVTR3,
    name: 'Random testing',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In non, architecto fuga sint porro natus laborum inventore. Iusto cupiditate sint nobis, dolores dolorem, adipisci quisquam quas enim distinctio aut natus?',

  },

  {
    avatar: AVTR4,
    name: 'Random testing',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In non, architecto fuga sint porro natus laborum inventore. Iusto cupiditate sint nobis, dolores dolorem, adipisci quisquam quas enim distinctio aut natus?',

  },
]

const testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
   
      pagination={{ clickable: true }}
     
      >
        
       {
        data.map(({avatar, name, review}, index) =>{
          return (
            <SwiperSlide key={index} className="testimonial" >
           <div className="client__avator">
            <img src={avatar} />
             </div>
           <h5 className='cleint__name'>{name}</h5>
            <small className='client__review'>
             {review}
            </small>
        </SwiperSlide>
          )
        })
       }

  
      </Swiper>
    </section>
  )
}

export default testimonial