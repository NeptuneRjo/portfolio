import React, { useState } from 'react';
import './style.css'

import {
  RiMailFill,
  RiPhoneFill,
  RiGithubFill
} from  'react-icons/ri'

const Contact = () => {

  const FORM_ENDPOINT = 'https://usebasin.com/f/25fae67153dc'

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  }
  
  return (
    <div className="contact-main" id='contact' data-testid='contact'>
      <div className="contact-content">
        <h4 data-testid='contact-header'>Contact Me</h4>
        {submitted && (
          <div className='form-submitted' data-testid='form-submitted'>
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
          enctype="multipart/form-data"
          >
            <div className='contact-form-item'>
              <label for='name'>Your Name</label>
              <input 
                type="text" 
                name="name" 
                id='name'
                required
                data-testid='name-field'
              />
            </div>
            <div className='contact-form-item'>
              <label for='email'>Email address</label>
              <input 
                type="email" 
                name="email"
                id='email'
                data-testid='email-field'
                required  
              />
            </div>
            <div className='contact-form-item'>
              <label for='message'>Message</label>
              <textarea 
                name="message"
                id='message'
                required
                data-testid='message-field'
              />
            </div>
            <div>
              <button 
                type="submit" 
                id='submit' 
                className='blue__button'
                data-testid='submit-button'
              > 
                Send message 
              </button>
            </div>
          </form>
        )}
          <div className="contact-info">
            <h4>Contact Info</h4>
            <div 
              className="contact-info-content" 
              data-testid='contact-info'
            >
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