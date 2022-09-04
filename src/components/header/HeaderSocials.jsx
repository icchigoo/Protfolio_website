import React from 'react'
import {BsLinkedin} from  'react-icons/bs'
import {FaGithub} from  'react-icons/fa'
import {FiDribbble} from  'react-icons/fi'


const Headersocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blink"><BsLinkedin/></a>
        <a href="https://github.com" target="_blink"><FaGithub/></a>
        <a href="https://dribbble.com" target="_blink"><FiDribbble/></a>
        </div>
  )
}

export default Headersocial