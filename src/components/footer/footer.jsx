import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'


const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>AJAY</a>

      <ul className='permalinks'>
        <li><a href="#">home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#testimonial">testimonial</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><FaTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ajay Chhetri portfolio. All rights reserved</small>
      </div>
    </footer>
  )
}

export default footer