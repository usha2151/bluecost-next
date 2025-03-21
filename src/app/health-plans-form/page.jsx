"use client";

import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Typography,
} from "@mui/material";
import axios from "axios";



function page() {

    const [formData, setFormData] = useState({
        firstName: "",
        middleInitial: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        phoneNumber: "",
        alternatePhone: "",
        email: "",
        dob: "",
        gender: "",
        healthConditions: {},
      });

      const states = ["California", "Texas", "New York", "Florida"];
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const handleRadioChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          healthConditions: {
            ...prev.healthConditions,
            [name]: value,
          },
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // API call using axios to submit form data
          const response = await axios.post("/api/insurance-plans-form", formData);
    
          // Handling response from the server
          console.log("Form Data Submitted:", formData);
          alert("Form Submitted Successfully!");
        } catch (error) {
          console.error("Error submitting form data:", error);
          alert("Error submitting form. Please try again.");
        }
      };
    
      return (
        <>
          {/*page-title */}
          <section className="page-title centred" style={{ backgroundImage: "url(assests/images/background/page-title.jpg);" }}>
            <div className="container">
              <div className="content-box">
                <div className="title"><h2>Health Plans Application</h2></div>
              </div>
            </div>
          </section>
    
          <div className="form-container" style={{ marginTop: "-100px" }}>
            <form onSubmit={handleSubmit} className="quote-form">
              {/* First Name Field */}
              <div className="form-group">
                <label htmlFor="firstName">First Name*</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                />
              </div>
    
              {/* Middle Initial Field */}
              <div className="form-group">
                <label htmlFor="middleInitial">Middle Initial</label>
                <input
                  type="text"
                  id="middleInitial"
                  name="middleInitial"
                  value={formData.middleInitial}
                  onChange={handleChange}
                  placeholder="Middle Initial"
                />
              </div>
    
              {/* Last Name Field */}
              <div className="form-group">
                <label htmlFor="lastName">Last Name*</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                />
              </div>
    
              {/* Address Field */}
              <div className="form-group">
                <label htmlFor="address">Address*</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  required
                />
              </div>
    
              {/* City Field */}
              <div className="form-group">
                <label htmlFor="city">City*</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  required
                />
              </div>
    
              {/* State Selection Field */}
              <div className="form-group">
                <label htmlFor="state">State*</label>
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                >
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
    
              {/* Zip Code Field */}
              <div className="form-group">
                <label htmlFor="zipCode">Zip Code*</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="Zip Code"
                  required
                />
              </div>
    
              {/* Phone Number Field */}
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number*</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                />
              </div>
    
              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
    
              {/* Date of Birth Field */}
              <div className="form-group">
                <label htmlFor="dob">Date of Birth*</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
    
              {/* Gender Selection */}
              <div className="form-group">
                <FormControl component="fieldset">
                  <FormLabel>Gender *</FormLabel>
                  <RadioGroup row name="gender" onChange={handleChange}>
                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                  </RadioGroup>
                </FormControl>
              </div>
    
              {/* Medical Conditions */}
              <div className="form-group full-width">
                <Typography variant="h6">Is the applicant, spouse/domestic partner/significant other, dependent children, or any other member of their household currently being treated for, or expect to be treated for any of the following over the next 12 months?</Typography>
              </div>
              {[
                "Organ failure, leading to bone marrow or organ transplant",
                "Any genetic condition that requires cell or gene therapy treatments?",
                "Any cancer that requires chemotherapy, radiation, bone marrow treatments, and/or cell therapy treatments?",
                "Kidney failure requiring dialysis treatments?",
                "High-risk pregnancy or pregnancies involving multiple fetuses?",
                "Hemophilia, or other blood clotting disorders?",
              
              ].map((condition) => (
                <div className="form-group" key={condition}>
                  <FormControl component="fieldset">
                    <FormLabel>{condition} *</FormLabel>
                    <RadioGroup row name={condition} onChange={handleRadioChange}>
                      <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                  </FormControl>
                </div>
              ))}
    
              {[
              
                "Is the applicant or any of their dependetns receiving medical care from a doctor currently or has within the past five years been treated for cancer of any kind?",
                "Has the prospective client or any of his/her dependents, seen a medical provider, had treatment recommended, received care (including prescriptions) or been hospitalized for any of the following within the last 5 years: cancer, heart disease (including Bypass), Heart Attack, Heart Surgery, or Stroke?",
                "Has the applicant or any of his/her dependents applying for coverage in the past 5 years been home bound or incapacitated or incapable of self-support due to a medical condition?",
                "Has the applicant or any of his/her dependents applying for coverage, been under the care of a doctor currently or in the past 5 years for Autoimmune or blood disease i.e., Lupus MS, Anemia, AIDS, HIV, Hemophilia, IBS, Crohn's?",
                "Has the applicant or any of his/her dependents, been under the care of a doctor currently or in the past 5 years for any form of organ support (i.e. dialysis)?",
                "Has the applicant or any of his/her dependents applying for coverage, been under the care of a doctor currently or in the past 5 years for Organ Failure or Organ Transplant for Kidney, Liver, Lung, Heart and or any form of organ support i.e., dialysis?",
                "Is the applicant or any of his/her dependents applying for coverage currently pregnant or expecting?",
                "Has the applicant or any of his/her dependents applying for coverage, currently being treated for condition(s) you have been hospitalized for in the past 5 years?",
                "Has the applicant or any of his/her dependents applying for coverage, been under the care of a doctor currently or in the past 5 years for respiratory disorders, Emphysema, Chronic Bronchitis, COPD or Chronic Pneumonia?",
                "Has the applicant or any of his/her dependents applying for coverage, been under the care of a doctor currently or in the past 5 years for musculoskeletal disorders i.e. Back Disorders, Muscular Dystrophy, Cerebral Palsy, Dermatomyositis, Compartment Syndrome, Sciatica or Osteoporosis?",
                "Has the applicant or any of his/her dependents applying for coverage, been under the care of a doctor currently or in the past 5 years for substance abuse or substance dependency?",
                "Has the applicant or any of his/her dependents applying for coverage, been under the care of a doctor currently or in the past 5 years as a Type 1 Diabetic?",
                "Has the applicant or any of his/her dependents applying for coverage, been under the care of a doctor currently or in the past 5 years for a previous major surgery? Or have an upcoming planned surgery?",
                "Is the applicant willing to share personal health and consumer insights data through short questionnaires throughout the year?",
              ].map((condition) => (
                <div className="form-group full-width" key={condition}>
                  <FormControl component="fieldset">
                    <FormLabel>{condition} *</FormLabel>
                    <RadioGroup row name={condition} onChange={handleRadioChange}>
                      <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                  </FormControl>
                </div>
              ))}
     <div className="form-group full-width">
            <div className="btn-box " >
                          <button type="submit" className="theme-btn">
                          Submit Application<i className="flaticon-outcoming-object"></i>
                          </button>
                        </div>
                        </div>
            
            </form>
          </div>
        </>
      );
    };
    

export default page