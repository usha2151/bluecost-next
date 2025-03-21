"use client";

import React, { useState } from 'react';

function page() {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        dob: '',
        income: '',
        householdSize: '',
        medicalIssues: '',
        medicalConcern: 'no', 
        phoneNumber: '',
        email: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await fetch('/api/quote-form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            const data = await response.json();
            setModalMessage('Your quote has been submitted successfully!');
          } else {
            setModalMessage('Failed to submit your quote. Please try again.');
          }
        } catch (error) {
          setModalMessage('An error occurred while submitting your quote.');
        }
      
      };
    
    
      return (
<>
        <section
        className="page-title centred"
      >
        <div className="container">
          <div className="content-box">
            <div className="title">
              <h2>Get a Quote</h2>
            </div>
          </div>
        </div>
      </section>

        <div className="form-container" style={{marginTop: "-100px"}}>
          <form onSubmit={handleSubmit} className="quote-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
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
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="income">Income:</label>
              <input
                type="text"
                id="income"
                name="income"
                value={formData.income}
                onChange={handleChange}
                placeholder="Enter your income"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="householdSize">Number of People in Household:</label>
              <input
                type="number"
                id="householdSize"
                name="householdSize"
                value={formData.householdSize}
                onChange={handleChange}
                placeholder="Enter number of people"
                required
              />
            </div>
    
            {/* Phone Number Field */}
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
    
            {/* Email Section */}
            <div className="form-group full-width">
              <label htmlFor="email">Email:</label>
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
    
            {/* Medical Issues / Concerns Section */}
            <div className="form-group full-width">
              <label>Any Medical Issues/Concerns:</label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="medicalConcern"
                    value="yes"
                    checked={formData.medicalConcern === 'yes'}
                    onChange={handleChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="medicalConcern"
                    value="no"
                    checked={formData.medicalConcern === 'no'}
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>
            </div>
    
            {/* Medical Issues Text Box */}
            {formData.medicalConcern === 'yes' && (
              <div className="form-group full-width">
                <label htmlFor="medicalIssues">Please explain any medical issues:</label>
                <textarea
                  id="medicalIssues"
                  name="medicalIssues"
                  value={formData.medicalIssues}
                  onChange={handleChange}
                  placeholder="Describe your medical issues"
                />
              </div>
            )}
           <div className="btn-box form-group full-width">
                          <button type="submit" className="theme-btn">
                          Submit<i className="flaticon-outcoming-object"></i>
                          </button>
                        </div>
           
          </form>
     {/* Button */}
     
           
        </div>
        </>
      );
    };

export default page