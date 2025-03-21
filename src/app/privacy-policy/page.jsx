"use client";

import React from 'react'
import Link from 'next/link';

function page() {
    return (
        <>
          {/* page-title */}
          <section className="page-title centred">
            <div className="container">
              <div className="content-box">
                <div className="title">
                  <h2>Privacy Policy</h2>
                </div>
              </div>
            </div>
          </section>
          {/* page-title end */}
    
          {/* Privacy Policy Content */}
          <section className="privacy-policy" style={{marginTop: "-110px", marginBottom: "50px"}}>
            <div className="container">
              <div className="content-box">
                <h3>Introduction</h3>
                <p>
                  At BlueCoast Wellness Group, your privacy is very important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or engage with our services. By using our website, you agree to the practices outlined in this policy.
                </p>
    
                <h3>Information We Collect</h3>
                <p>We collect personal information that you provide to us directly when you subscribe to our newsletter, request services, or contact us. The types of information we collect may include:</p>
                <ul>
                  <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and any other details you voluntarily provide.</li>
                  <li><strong>Usage Data:</strong> Information about how you interact with our website, including your IP address, browser type, and pages visited.</li>
                </ul>
    
                <h3>How We Use Your Information</h3>
                <p>We use the personal information we collect for the following purposes:</p>
                <ul>
                  <li>To send you newsletters, updates, or promotional offers that you have opted in to receive.</li>
                  <li>To provide personalized wellness services and content based on your preferences and interests.</li>
                  <li>To improve the functionality of our website and enhance your experience.</li>
                </ul>
    
                <h3>Cookies and Tracking Technologies</h3>
                <p>
                  Our website uses cookies to improve your experience and analyze how our website is used. Cookies are small files stored on your device. These allow us to remember your preferences and offer a personalized experience. You can control cookie settings through your browser, but disabling them may affect certain site functionalities.
                </p>
    
                <h3>Data Protection and Security</h3>
                <p>
                  We prioritize the security of your personal information. We have implemented appropriate physical, electronic, and managerial procedures to safeguard the data we collect. We do not share your personal information with third parties without your consent, except as required by law.
                </p>
    
                <h3>Your Rights</h3>
                <p>You have the right to:</p>
                <ul>
                  <li>Access the personal information we hold about you.</li>
                  <li>Request corrections or updates to your personal information.</li>
                  <li>Request the deletion of your personal information (where applicable).</li>
                  <li>Opt-out of receiving promotional communications from us at any time.</li>
                </ul>
    
                <h3>Third-Party Services</h3>
                <p>
                  We may use third-party services, such as email marketing platforms or analytics tools, to assist in providing our services. These third parties may have access to your personal information for the purposes of performing their services on our behalf. However, they are obligated to protect your information and are not permitted to use it for their own purposes.
                </p>
    
                <h3>Changes to This Privacy Policy</h3>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. Any material changes will be posted on this page, and the date of the latest revision will be indicated at the top of the policy.
                </p>
    
                <h3>International Data Transfers</h3>
                <p>
                  If you are located outside the United States, please be aware that your personal data may be transferred to and processed in the United States, where our servers are located. By using our services, you consent to this transfer.
                </p>
    
                <h3>Contact Us</h3>
                <p>
                  If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at:
                </p>
                <strong>BlueCoast Wellness Group</strong><br />
                <p>
                  
                <p>
    
      Email: <Link href="mailto:info@bluecoastwellnessgroup.com" className="email-link" >
        <strong>info@bluecoastwellnessgroup.com</strong>
      </Link>
    </p>
    
                </p>
              </div>
            </div>
          </section>
          {/* Privacy Policy Content end */}
        </>
      );
    }
    

export default page