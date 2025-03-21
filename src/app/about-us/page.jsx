"use client";

import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ErisaSection } from "@/common/ErisaSection";
import Head from "next/head";

function page() {
    const ref = useRef(null);
    const slideIn = {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };
    return (
      <>
     
        {/* page Wrapper */}
        <div className="boxed_wrapper">
          <section
            className="page-title centred"
          >
            <div className="container">
              <div className="content-box">
                <ul className="bread-crumb">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>About us</li>
                </ul>
                <div className="title">
                  <h2>About us</h2>
                </div>
              </div>
            </div>
          </section>
          {/*page-title end */}
          <Head>
        <title>About Blue Coast Wellness | Year-Round Health Plans</title>
        <meta name="description" content="Discover affordable, year-round health plans from Blue Coast Wellness Group, with ERISA coverage for individuals, families, and businesses." />
        <meta name="keywords" content="Blue Coast Wellness, affordable health plans, ERISA coverage, year-round health insurance, healthcare solutions, employee benefits, small business health plans, health insurance benefits, private health insurance, health plans for families" />
      </Head>
          <section className="welcome-section" style={{ marginTop: "-150px" }}>
            <div className="container">
              <div className="row">
                <motion.div
                  className="col-lg-6 col-md-12 col-sm-12 image-column"
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.8 }}
                >
                  <div>
                    <img
                      src="https://bluecoastwellnessgroup.s3-eu-central-2.ionoscloud.com/frontend/shane-johnson-profile-photo.jpg"
                      alt="shane-johnson-profile-photo"
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="col-lg-6 col-md-12 col-sm-12 content-column"
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.8, delay: 0.5 }}
                >
                  <div className="content-box">
                    <div className="title">
                      <div className="sec-title">
                      
  
                        <p style={{ textAlign: "justify" }}>
                          At <strong>Blue Coast Wellness Group</strong>, we are
                          committed to providing high-quality health plan
                          solutions that are accessible year-round. Through our
                          strategic partnerships, we offer exclusive health plans
                          covered by the{" "}
                          <strong>
                            Employee Retirement Income Security Act (ERISA)
                          </strong>
                          , ensuring that your clients have continuous access to
                          comprehensive coverage with top-tier benefits. Our goal
                          is to empower individuals, families, and small business
                          owners to secure affordable, reliable, and extensive
                          healthcare protection without the limitations of
                          traditional open enrollment periods.
                          <br></br>
                          <br></br>
                          <strong>
                            Partner with Blue Coast Wellness Group today
                          </strong>{" "}
                          to offer your clients unparalleled access to year-round,
                          affordable health plan solutions, tailored to their
                          needs. For more information or to get started, contact{" "}
                          <strong>Shane Johnson</strong> at{" "}
                          <a href="tel:917-743-1895">917-743-1895</a>. Let’s work
                          together to help your clients secure the healthcare they
                          deserve.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          {/*our-philosophy */}
          <section className="our-philosophy" ref={ref}>
            <div className="container">
              <div className="row">
                {/* Image Column */}
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <motion.div
                    className="image-box"
                    // initial={{ x: -100, opacity: 0 }}
                    // animate={isInView ? { x: 0, opacity: 1 } : {}}
                    // transition={{ duration: 1 }}
                  >
                    <img
                      src="https://bluecoastwellnessgroup.s3-eu-central-2.ionoscloud.com/frontend/comparing-costs.png"
                      alt=""
                    />
                  </motion.div>
                </div>
  
                {/* Content Column */}
                {/* Content Column */}
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <motion.div
                    className="content-box"
                    // initial={{ x: 100, opacity: 0 }}
                    // animate={isInView ? { x: 0, opacity: 1 } : {}}
                    // transition={{ duration: 1, delay: 0.3 }}
                  >
                    <div className="sec-title">
                      <span>Our Process In 3 Easy Steps</span>
                      <p>
                        Maximizing Your Savings: Comparing Costs and Enrollment
                        Options
                      </p>
                    </div>
  
                    {/* List Items */}
                    <motion.ul
                      className="list"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                      }}
                    >
                      {[
                        {
                          num: "01",
                          title: "Complimentary phone call",
                          text: "Our consultations are informative, quick, and painless",
                        },
                        {
                          num: "02",
                          title: "We recommend several plans based on your needs",
                          text: "If everything sounds great, we can apply for the coverage together.",
                        },
                        {
                          num: "03",
                          title: "Apply for the Health Plans",
                          text: "If everything sounds great, we can apply for the coverage together",
                        },
                      ].map((item, index) => (
                        <motion.li key={index} className="hover-item">
                          <span>{item.num}</span>
                          <h4>{item.title}</h4>
                          <p className="sub-description">{item.text}</p>
                        </motion.li>
                      ))}
  
                      <motion.li className="hover-item">
                        <span>
                          <i className="fas fa-star gold-star"></i>
                        </span>
  
                        <h4>Our service comes at no cost to you!</h4>
                      </motion.li>
                    </motion.ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
          {/*our-philosophy end */}
  
          {/* ourmission-section */}
          <section
            ref={ref}
            className="ourmission-section centred"
            style={{
              backgroundImage:
                "url('https://bluecoastwellnessgroup.s3-eu-central-2.ionoscloud.com/frontend/homebg.png')",
            }}
          >
            <motion.div
              className="icon wow zoomIn slide"
              data-wow-delay="150ms"
              data-wow-duration="500ms"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }} 
              transition={{ duration: 1 }}
            >
              <img
                src="https://bluecoastwellnessgroup.s3-eu-central-2.ionoscloud.com/frontend/Bluecoast%20fav.png"
                alt=""
              />
            </motion.div>
  
            <div className="container">
              <motion.div
                className="content-box"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }} 
                transition={{ duration: 1, delay: 0.3 }}
              >
                <h1 style={{ color: "#fff", marginTop: "-90px" }}>
                  Empowering Wellness Decisions<br></br>
                </h1>
                <h2 style={{ color: "#fff", marginBottom: "50px" }}>
                  Our Mission is to Protect your Businesses, Life and Much More.
                </h2>
                <motion.a
                  href="/appointment-form"
                  className="theme-btn"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }} 
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  Make an Appointment
                  <i className="flaticon-outcoming-object"></i>
                </motion.a>
              </motion.div>
            </div>
          </section>
  
          {/* ourmission-section end */}
  
          <motion.section
            className="cta-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn} 
          >
            <div className="container">
              <div className="inner-content clearfix">
                <div className="left-column">
                  <span>make a call or fill the form</span>
                  <h2>Building Strong Agent Partnerships.</h2>
                </div>
                <div className="right-column">
                  <motion.a
                    href="/inquiry-form"
                    className="theme-btn"
                    whileHover={{ scale: 1.1 }} 
                  >
                    Agent Inquiry
                    <i className="flaticon-outcoming-object"></i>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.section>
          {/* cta-section end */}
  
          <ErisaSection />
  
        
          {/* Scroll to top*/}
          <button className="scroll-top scroll-to-target" data-target="html">
            <span className="fa fa-arrow-up"></span>
          </button>
        </div>{" "}
        {/*End of .page_wrapper */}
      </>
    );
  }
  

export default page