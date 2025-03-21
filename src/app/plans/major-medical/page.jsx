"use client";

import React, { useState }  from 'react'
import Pdf from '../Pdf';
import { ErisaSection } from '@/common/ErisaSection';

const pdfData = {
  'MM 1000': 'https://bluecoastwellnessgroup.s3-eu-central-2.ionoscloud.com/frontend/majormedical/MM%201,000%20Rates%20(2).pdf',
  'MM 2500': 'https://bluecoastwellnessgroup.s3-eu-central-2.ionoscloud.com/frontend/majormedical/MM%202,500%20Rates%20(2).pdf',
  'MM 3500': 'https://bluecoastwellnessgroup.s3-eu-central-2.ionoscloud.com/frontend/majormedical/MM%203,500%20Rates%20(2).pdf',
  'MM 4900+': 'https://bluecoastwellnessgroup.s3-eu-central-2.ionoscloud.com/frontend/majormedical/MM%204,900%20Rates%20(4).pdf',
  'MM 7250+': 'https://bluecoastwellnessgroup.s3-eu-central-2.ionoscloud.com/frontend/majormedical/MM%207,250%20Rates%20(4).pdf',
};


function page() {
    const [pdfUrl, setPdfUrl] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility
  
    const handlePdfClick = (plan) => {
      // Fetch the PDF URL from the JSON object based on the clicked plan
      const url = pdfData[plan] || null; // If the plan is not found, return null
      setPdfUrl(url);
      setIsModalOpen(true); // Open the modal when a PDF is selected
    };
  
    const closeModal = () => {
      setIsModalOpen(false); // Close the modal
      setPdfUrl(null); // Clear the PDF URL when the modal is closed
    };
    return (
      <>
         {/* page-title */}
       <section className="page-title centred" style={{backgroundImage: "url('assets/images/background/page-title.jpg');"}}>
          <div className="container">
              <div className="content-box">
                  <ul className="bread-crumb">
                      <li><a href="index.html">Home</a></li>
                      <li>Plans</li>
                  </ul>
                  <div className="title"><h2>Major Medical</h2></div>
              </div>
  
          </div>
      </section>
       {/* page-title end */}
          <div className="vlplans-container" style={{marginTop: "-140px"}}>
           
            <div className="plan-list">
              {['MM 1000', 'MM 2500', 'MM 3500', 'MM 4900+', 'MM 7250+'].map((plan) => (
                <div className="plan-card" key={plan}>
                  <h3 className="plan-title">{plan}</h3>
                  <p className="plan-description">Description or details about {plan}.</p>
                  <button className="button" onClick={() => handlePdfClick(plan)}>
                    View Rate
                  </button>
                </div>
              ))}
            </div>
      
            {isModalOpen && pdfUrl && (
              <Pdf pdfUrl={pdfUrl} closeModal={closeModal} /> // Use the Pdf component to render the iframe
            )}
          </div>
          <ErisaSection />
     {/* page-title end */}
      </>

)
}

export default page