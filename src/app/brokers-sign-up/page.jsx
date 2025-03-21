"use client";

import React, { useState } from 'react';
import axios from 'axios';

function page() {
    const [formData, setFormData] = useState({
        full_name: '',
        email_address: '',
        phone_number: '',
        state: '',
        city: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      // Handle form submission
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Send form data to the backend (Node.js server)
          const response = await axios.post('/api/broker-sign-up', formData);
          alert('Message sent successfully!');
        } catch (error) {
          console.error('Error submitting the form:', error);
          alert('There was an error sending your message.');
        }
      };
    
      return (
        <>
          {/* page-title */}
          <section
            className="page-title centred"
          >
            <div className="container">
              <div className="content-box">
                <div className="title">
                  <h2>Broker's Sign Up</h2>
                </div>
              </div>
            </div>
          </section>
          {/* page-title end */}
    
          {/* Sign-Up Form */}
          <section>
            <div className="form-container" style={{marginTop: "-100px"}}>
              <form onSubmit={handleSubmit} className='quote-form'>
                <div className="form-group">
                  <label htmlFor="full_name">Full Name*</label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
    
                <div className="form-group">
                  <label htmlFor="email_address">Email Address*</label>
                  <input
                    type="email"
                    id="email_address"
                    name="email_address"
                    value={formData.email_address}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
    
                <div className="form-group">
                  <label htmlFor="phone_number">Phone Number*</label>
                  <input
                    type="tel"
                    id="phone_number"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
    
                <div className="form-group">
                  <label htmlFor="state">State*</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    placeholder="Enter your state"
                  />
                </div>
    
                <div className="form-group full-width">
                  <label htmlFor="city">City*</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="Enter your city"
                  />
                </div>
                <div className="form-group full-width">
            <div className="btn-box " >
                          <button type="submit" className="theme-btn">
                          Submit<i className="flaticon-outcoming-object"></i>
                          </button>
                        </div>
                        </div>
               
              </form>
            </div>
          </section>
          {/* Sign-Up Form End */}
        </>
      );
    }
    

export default page