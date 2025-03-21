"use client";

import React, { useState } from 'react';
import Pdf from '../Pdf';
import Link from 'next/link';
import { ErisaSection } from '@/common/ErisaSection';
// Define the plan PDF URLs in a JSON object
const pdfData = {
  'VL 250': 'https://bluecoastwellnessgroup.s3-eu-central-2.ionoscloud.com/frontend/VL/VL%20250%20Rates.pdf',
  'VL 500': 'https://bluecoastwellnessgroup.s3-eu-central-2.ionoscloud.com/frontend/VL/VL%20500%20Rates.pdf',
  'VL 750': 'https://bluecoastwellnessgroup.s3-eu-central-2.ionoscloud.com/frontend/VL/VL%20750%20Rates.pdf',
  'VL 1000': 'https://bluecoastwellnessgroup.s3-eu-central-2.ionoscloud.com/frontend/VL/VL%201,000%20Rates.pdf',
  'VL 1500': 'https://bluecoastwellnessgroup.s3-eu-central-2.ionoscloud.com/frontend/VL/VL%201,500%20Rates.pdf',
};


function page() {
    const [pdfUrl, setPdfUrl] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false); // State to handle popup visibility
  
    const handlePdfClick = (plan) => {
      // Fetch the PDF URL from the JSON object based on the clicked plan
      const url = pdfData[plan] || null; // If the plan is not found, return null
      setPdfUrl(url);
      setIsPopupOpen(true); // Open the popup when a PDF is selected
    };
  
    const closePopup = () => {
      setIsPopupOpen(false); // Close the popup
      setPdfUrl(null); // Clear the PDF URL when the popup is closed
    };
  
    return (
      <>
        {/* page-title */}
        <section className="page-title centred">
          <div className="container">
            <div className="content-box">
              <ul className="bread-crumb">
                <li><Link href="/">Home</Link></li>
                <li>Plans</li>
              </ul>
              <div className="title"><h2>Visit Limit Plans</h2></div>
            </div>
          </div>
        </section>
        {/* page-title end */}
  
        <div className="vlplans-container" style={{marginTop: "-140px"}}>
          <div className="plan-list">
            {['VL 250', 'VL 500', 'VL 750', 'VL 1000', 'VL 1500'].map((plan) => (
              <div className="plan-card" key={plan}>
                <h3 className="plan-title">{plan}</h3>
                <p className="plan-description">Description or details about {plan}.</p>
                <button className="button" onClick={() => handlePdfClick(plan)}>
                  View Rate
                </button>
              </div>
            ))}
          </div>
  
          {isPopupOpen && pdfUrl && (
            <Pdf pdfUrl={pdfUrl} closeModal={closePopup} /> // Use the Pdf component to render the iframe in a popup
          )}
        </div>
        <ErisaSection />
      </>
    );
  }
  

export default page