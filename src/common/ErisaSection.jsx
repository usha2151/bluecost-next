"use client";

import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const ErisaSection = () => {
  return (
    <section className="welcome-section">
      <div className="container">
        <div className="title-box centred">{/* Uncommented if needed */}</div>
        <div className="row">
          <motion.div
            className="col-lg-6 col-md-12 col-sm-12 content-column"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 0.5 }}
          >
            <div className="content-box">
              <div className="title">
                <div className="sec-title">
                  <h2>The Birth of ERISA (1970s)</h2>

                  <p>
                    Back in the ‘60s and early ‘70s, workers were getting
                    burned. Take the Studebaker factory closure in 1963— over
                    4,000 employees lost pension benefits when the company
                    tanked. Meanwhile, the Teamsters’ pension fund was loaning
                    cash to shady Vegas deals. Congress said, “Enough.” ERISA
                    was born to set rules for private-sector retirement and
                    health plans, protecting workers from mismanagement.
                  </p>

                  <motion.a
                    href="/erisa"
                    className="theme-btn"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }} // Trigger animation when element is in view
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    Explore ERISA
                    <i className="flaticon-outcoming-object"></i>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="col-lg-6 col-md-12 col-sm-12 image-column"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
          >
            <div className="inner-box">
              <div className="inner-content">
                <i className="flaticon-insurance-2"></i>
                <h2>Health Coverage That Cares</h2>
              </div>
              <div className="image-box image-one">
                <img
                  src="https://bluecoastwellnessgroup.s3-eu-central-2.ionoscloud.com/frontend/Untitled%20(4).png"
                  alt="Bluecoastwellnessgroup"
                />
              </div>
              <div className="image-box image-two">
                <img
                  src="https://bluecoastwellnessgroup.s3-eu-central-2.ionoscloud.com/frontend/Homeimg2.png"
                  alt="Bluecoastwellnessgroup"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
