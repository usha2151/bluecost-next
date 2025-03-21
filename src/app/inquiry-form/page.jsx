"use client";

import React, { useState } from 'react';

function page() {
    const [formData, setFormData] = useState({
        name: '',
        agency: '',
        email: '',
        phone: '',
      });
    
      const [error, setError] = useState('');
      const [successMessage, setSuccessMessage] = useState('');
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Basic validation
        if (!formData.name || !formData.agency || !formData.email || !formData.phone) {
          setError('Please fill in all fields');
          return;
        }
    
        // Basic email validation
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
          setError('Please enter a valid email address');
          return;
        }
    
        // Basic phone number validation (optional)
        if (!/^\d{10}$/.test(formData.phone)) {
          setError('Please enter a valid phone number');
          return;
        }
    
        setError(''); // Clear any previous error
    
        // Simulate API call (replace with actual API call)
        try {
          // Assuming a POST API endpoint
          const response = await fetch('/api/inquiry_form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            setSuccessMessage('Your inquiry has been submitted successfully.');
            setFormData({
              name: '',
              agency: '',
              email: '',
              phone: '',
            });
          } else {
            setError('There was an issue submitting your inquiry. Please try again.');
          }
        } catch (error) {
          setError('Error occurred. Please try again.');
        }
      };
    
      return (
        <>
        {/*page-title */}
        <section class="page-title centred">
            <div class="container">
                <div class="content-box">
                    
                    <div class="title"><h2>Inquiry Form</h2></div>
                </div>
            </div>
        </section>
         {/*page-title end */}
        <div className='form-container' style={{marginTop: "-100px"}}>
          <form onSubmit={handleSubmit} className="quote-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="agency">Agency</label>
              <input
                type="text"
                id="agency"
                name="agency"
                value={formData.agency}
                onChange={handleChange}
                placeholder="Enter your agency"
                required
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
    
            {error && <p className="text-red-500">{error}</p>}
            {successMessage && <p className="text-green-500">{successMessage}</p>}
    
         <div className="form-group full-width">
            <div className="btn-box " >
                          <button type="submit" className="theme-btn">
                          Submit Inquiry<i className="flaticon-outcoming-object"></i>
                          </button>
                        </div>
                        </div>
          </form>
        </div>
        </>
      );
    }
    
export default page