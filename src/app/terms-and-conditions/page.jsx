"use client";

import React from 'react'
import Link from 'next/link';

function page() {
    return (
        <>
          {/* page-title */}
          <section
            className="page-title centred"
            style={{
              backgroundImage: "url('assets/images/background/page-title.jpg');",
            }}
          >
            <div className="container">
              <div className="content-box">
                <div className="title">
                  <h2>Terms and Conditions</h2>
                </div>
              </div>
            </div>
          </section>
          {/* page-title end */}
    
          {/* Privacy Policy Content */}
          <section
            className="privacy-policy"
            style={{ marginTop: "-110px", marginBottom: "50px" }}
          >
            <div className="container">
              <div className="content-box">
                <h3>Introduction</h3>
                <p>
                  Welcome to BlueCoast Wellness Group's digital platform, BlueCoast
                  Wellness. Before proceeding, please read and understand the terms
                  and conditions outlined below. By accessing or using our website,
                  you acknowledge and agree to be bound by these legally binding
                  terms and conditions between you and BlueCoast Wellness Group.
                </p>
    
                <h3>General Provisions</h3>
                <p>
                  These terms apply to all users of our website, services, and
                  digital platforms. By accessing, browsing, or registering on the
                  website, you are agreeing to abide by these terms of use.
                </p>
                <h3>Definitions</h3>
                <ul>
                  <li>
                    <strong>"Company" or "BlueCoast Wellness Group":</strong> Refers
                    to BlueCoast Wellness Group, the organization providing wellness
                    services.
                  </li>
                  <li>
                    <strong>"User" or "You":</strong> Anyone accessing our website
                    or utilizing our services.
                  </li>
                  <li>
                    <strong>"Terms and Conditions":</strong> This document and any
                    subsequent amendments.
                  </li>
                  <li>
                    <strong>Third-Party Service":</strong> Unaffiliated entities
                    providing services to BlueCoast Wellness Group.
                  </li>
                </ul>
    
                <h3>Liability</h3>
                <p>
                  No party excludes or limits liability for death, personal injury
                  caused by negligence, fraudulent misrepresentation, or any
                  liability that cannot be excluded or limited under the law.
                </p>
                <p>
                  BlueCoast Wellness Group shall not be liable for any loss of
                  business, use, profit, anticipated profit, contracts, revenues,
                  goodwill, or anticipated savings; product recall costs; damage to
                  the client’s reputation; or consequential, special, or indirect
                  loss or damage.
                </p>
    
                <h3>Communication, Contact, and Membership</h3>
                <p>
                  Users agree to provide accurate contact and personal details when
                  interacting with the platform or subscribing to services.
                </p>
    
                <p>
                  Communication with users will occur through various channels,
                  including calls, emails, or texts.
                </p>
    
                <p>
                  Calls may be recorded for training and quality assurance purposes.
                </p>
    
                <h3>Employment and Internships</h3>
                <p>
                  Individuals seeking internships with BlueCoast Wellness Group must
                  provide accurate personal information for consideration.
                </p>
    
                <p>
                  The internship program is designed to foster professional growth,
                  and interns are selected through various platforms.
                </p>
    
                <h3>Advertising and Branding</h3>
                <p>
                  BlueCoast Wellness Group may perform advertising and branding for
                  selected individuals and profiles globally, utilizing various
                  social media platforms.
                </p>
                <p>
                  Marketing and profile distribution may occur on platforms like
                  Facebook, Instagram, LinkedIn, and others.
                </p>
    
                <h3>Diversity and Inclusion Policy</h3>
                <p>
                  BlueCoast Wellness Group encourages diversity and inclusivity,
                  welcoming individuals regardless of race, color, community, sexual
                  orientation, or disability.
                </p>
    
                <h3>Regulatory Information</h3>
                <p>
                  BlueCoast Wellness Group operates in accordance with all relevant
                  laws and regulatory authorities to ensure that our wellness
                  services meet industry standards and legal requirements.
                </p>
    
                <h3>Contact Information</h3>
                <p>
                  If you have any questions or concerns regarding these Terms and
                  Conditions, please contact us at:
                </p>
    
                <p>
                  <p>
                    Email:{" "}
                    <Link
                      href="mailto:info@bluecoastwellnessgroup.com"
                      className="email-link"
                    >
                      <strong>info@bluecoastwellnessgroup.com</strong>
                    </Link>
                  </p>
                  <p>
                    Phone:{" "}
                    <Link href="tel:917-743-1895" className="email-link">
                      <strong>917-743-1895</strong>
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