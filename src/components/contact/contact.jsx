import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {
   
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lfvw1i8', 'template_010hv6w', form.current, 'VChyQHQdbOQJBQ4ig')
     
    e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>


      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
          <MdOutlineMail className='contact__option-icons'/>
           <h4>Email</h4>
           <h5>icchgoo12@gmail.com</h5>
           <a href="mailto:icchigoo12@gmail.com" target="_blank">Send a message</a>
          </article>


          


         <article className="contact__option">
         <RiMessengerLine className='contact__option-icons'/>
           <h4>Messenger</h4>
           <h5>Send direct message</h5>
           <a href="https://m.me/ajay.xhetri.35" target="_blank">Send a message</a>
         </article>



         <article className="contact__option">
         <BsWhatsapp className='contact__option-icons'/>
           <h4>WhatsApp</h4>
           <h5>send direct message</h5>
           <a href="https://api.whatsapp.com/send?phone9779808758007" target="_blank">Send a message</a>
         </article>

        </div>

        {/* End of contact options */}
        
        <form ref={form} onSubmit = {sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
      </section>
  )
}

export default Contact