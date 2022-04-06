import React, { useState } from 'react';
import './style.css'

const Contact = () => {

  const FORM_ENDPOINT = 'https://public.herotofu.com/v1/5696b210-b5d9-11ec-b4fe-2b9cbf782176';

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  }

  if (submitted) {
    return (
      <div className='form-submitted'>
        <h4>Thank you!</h4>
        <p>We'll be in touch soon.</p>
      </div>
    );
  }
  

  return (
    <div className="contact-main">
      <div className="contact-content">
        <h4><span>Contact</span> Me</h4>
        <form 
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target='_blank'
          >
            <div>
              <input 
                type="text" 
                name="name" 
                placeholder='Your name' 
                id='name'
                required
              />
            </div>
            <div>
              <input 
                type="email" 
                name="email"
                id='email'
                placeholder='Email'
                required  
              />
            </div>
            <div>
              <textarea 
                name="message"
                placeholder='Your message' 
                id='message'
                required
              />
            </div>
            <div>
              <button 
                type="submit" 
                id='submit' 
                > Send a message </button>
            </div>
          </form>
      </div>
    </div>
  )
}

export default Contact