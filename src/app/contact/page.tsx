"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" }); 
  };

  return (
    <div className="project">
      {/* Desktop View */}
      <div className="contact-container desktop-view">
        
   <h1 className="contact">Contact us</h1>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
        {submitted && (
          <p className="thank-you-message">Thank you for your message!</p>
        )}
      </div>

      {/* Mobile View */}
      <div className="contact-container mobile-view">
     
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
        {submitted && (
          <p className="thank-you-message">Success! your message  sent.</p>
        )}
      </div>

      {/* Social Media Links */}
      <div className="social-links">
        <a href="https://www.facebook.com/muahammad.abubakar.142/" target="_blank" rel="noopener noreferrer">
          <img src="/fb.jpg" alt="Facebook" className="social-icon"/>
        </a>
        <a href="https://www.linkedin.com/in/muhammad-abdullah-608284302/" target="_blank" rel="noopener noreferrer">
          <img src="/linkdin.png" alt="LinkedIn" className="social-icon"/>
        </a>
        <a href="https://www.instagram.com/muhammadabdullah6156/" target="_blank" rel="noopener noreferrer">
          <img src="/insta.jpg" alt="Instagram" className="social-icon"/>
        </a>
        
       
        
      </div>
    </div>
  );
}
