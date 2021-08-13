import React from 'react';
import emailjs from 'emailjs-com';
import '../css/Contact.css';
import Logo from '../images/logo.png';


export default function Ideas() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_nom4z4k', 'template_o1a0g7e', e.target, 'user_H4Wjl7r6ifIgxo7RUwFPr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (

    <div>
        <div className="header-email">
        <h2><img  className="header-image" src={Logo} alt="2" /> SEND YOUR IDEAS HERE <img  className="header-image" src={Logo} alt="2" /></h2>
    <p className="p-back">We will aim to get back to you within 24 hours.</p>
        </div>
    
    <div className="email-form">
    <br></br>
    <div className="contact-form">
    <form  onSubmit={sendEmail}>
        <div >
        <input className="email-input" type="text" name="subject" placeholder="Subject"/>
        </div>
       <br></br>
        <div>
        <input className="email-input" type="text" name="name" placeholder="Name"/>
        </div>
        <br></br>
        <div >
        <input className="email-input" type="email" name="email" placeholder="Email"/>
        </div>
        <br></br>
        <div >
        <textarea className="idea-box" name="message" placeholder="Ideas"/>
        </div>
        <br></br>
        <div>
        <input className="btn-send" type="submit" value="Send Idea" />
        </div>
        <br></br>
    </form>
    </div>
   
    </div>
    </div>
    
  
  );
}