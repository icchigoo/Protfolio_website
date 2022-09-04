import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {AiOutlineUsergroupDelete} from 'react-icons/ai'
import {RiFolder5Line} from 'react-icons/ri'


const about = () => {
  return (
    <section id='about'>
      <h5>Get TO Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
          </div>



        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
             <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
               </article>

               <article className='about__card'>
             <AiOutlineUsergroupDelete className='about__icon'/>
              <h5>Clients</h5>
              <small>2 jana ni xaina Worlwide</small>
               </article>

               <article className='about__card'>
             <RiFolder5Line className='about__icon'/>
              <h5>Projects</h5>
              <small>100+ Completed Prokect</small>
               </article>

          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatibus facere nostrum error cupiditate at optio rerum quam nisi assumenda porro enim similique iste mollitia, quae odit hic aspernatur maiores.
          </p>

          <a href="#contact"className='btn btn-primary'>Let Talk</a>



        </div>
      </div>
      </section>
  )
}

export default about