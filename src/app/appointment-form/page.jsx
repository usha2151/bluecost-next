"use client";

import React, { useState } from 'react';

function page() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    
      const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const validateForm = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = 'Name is required';
        if (!formData.email) formErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = 'Email is invalid';
        if (!formData.phone) formErrors.phone = 'Phone is required';
        else if (!/^\d{10}$/.test(formData.phone)) formErrors.phone = 'Phone number must be 10 digits';
        if (!formData.message) formErrors.message = 'Message is required';
    
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (validateForm()) {
          try {
            // Make POST request to the backend API for appointment
            const response = await fetch('/api/appointment-form', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
    
            if (response.ok) {
              const data = await response.json();
              console.log('Appointment submitted successfully:', data);
              alert('Appointment submitted successfully!');
              // Optionally reset form
              setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
              });
            } else {
              console.error('Failed to submit appointment');
              alert('Failed to submit appointment');
            }
          } catch (error) {
            console.error('Error:', error);
            alert('Error occurred while submitting appointment');
          }
        }
      };
    
      return (
        <>
        {/*page-title */}
        <section class="page-title centred" style={{backgroundImage: "url(assests/images/background/page-title.jpg);"}}>
            <div class="container">
                <div class="content-box">
                    
                    <div class="title"><h2>Get an Appointment</h2></div>
                </div>
            </div>
        </section>
         {/*page-title end */}
        <div className='form-container' style={{marginTop: "-100px"}}>
          <form onSubmit={handleSubmit} className="space-y-4 quote-form">
            <div className="form-group">
              <label htmlFor="name" className="block font-semibold">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
    
            <div className="form-group">
              <label htmlFor="email" className="block font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
    
            <div className="form-group full-width">
              <label htmlFor="phone" className="block font-semibold">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your phone number"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
    
            <div className="form-group full-width">
              <label htmlFor="message" className="block font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your message"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
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
        </>
      );
    }

export default page