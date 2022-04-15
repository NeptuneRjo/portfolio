import React, { useState } from 'react';
import './style.css'

import {
  RiMailFill,
  RiPhoneFill,
  RiGithubFill
} from  'react-icons/ri'

const Contact = () => {

  const FORM_ENDPOINT = 'https://public.herotofu.com/v1/5696b210-b5d9-11ec-b4fe-2b9cbf782176';

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  }
  
  return (
    <div className="contact-main" id='contact'>
      <div className="contact-content">
        <h4>Contact Me</h4>
        {submitted && (
          <div className='form-submitted'>
            <h4>Thank you!</h4>
            <p>We'll be in touch soon.</p>
          </div>
        )}
        {!submitted && (
          <form 
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target='_blank'
          >
            <div className='contact-form-item'>
              <label for='name'>Your Name</label>
              <input 
                type="text" 
                name="name" 
                id='name'
                required
              />
            </div>
            <div className='contact-form-item'>
              <label for='email'>Email address</label>
              <input 
                type="email" 
                name="email"
                id='email'
                required  
              />
            </div>
            <div className='contact-form-item'>
              <label for='message'>Message</label>
              <textarea 
                name="message"
                id='message'
                required
              />
            </div>
            <div>
              <button 
                type="submit" 
                id='submit' 
                className='blue__button'
                > Send message </button>
            </div>
          </form>
        )}
          <div className="contact-info">
            <h4>Contact Info</h4>
            <div className="contact-info-content">
              <div className="contact-email contact-info-item">
                <span><RiMailFill color='#47ABE0'/></span>
                <p>rjo9000@outlook.com</p>
              </div>
              <div className="contact-phone contact-info-item">
                <span><RiPhoneFill color='#47ABE0'/></span>
                <p>813-309-2008</p>
              </div>
              <div className="contact-git contact-info-item">
                <span><RiGithubFill color='#47ABE0'/></span>
                <p>
                  <a href="https://github.com/NeptuneRjo" target='_blank'>
                    NeptuneRjo
                  </a>
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Contact