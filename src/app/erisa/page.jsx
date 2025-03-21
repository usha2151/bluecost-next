"use client";

import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion, useInView } from "framer-motion";

function page() {
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
      };
      return (
        <div className="erisapage-container">
    
     {/*page-title */}
     <section class="page-title centred" style={{backgroundImage: "url(assests/images/background/page-title.jpg);"}}>
            <div class="container">
                <div class="content-box">
                    
                    <div class="title"><h2>ERISA</h2></div>
                </div>
            </div>
        </section>
         {/*page-title end */}
    <div className="container">
         <motion.div className="sec-title" style={{textAlign: "center", marginTop:"-100px"}} variants={fadeIn}>
                       <h2>The Birth of ERISA (1970s)</h2>
                     </motion.div>
                     <p className="content-box " style={{width: "90%", textAlign: "center", margin: "auto"}}>
                    Back in the ‘60s and early ‘70s, workers were getting burned. Take the Studebaker factory closure in 1963— over 4,000 employees lost pension benefits when the company tanked. Meanwhile, the Teamsters’ pension fund was loaning cash to shady Vegas deals. Congress said, “Enough.” ERISA was born to set rules for private-sector retirement and health plans, protecting workers from mismanagement.
                   
                    </p>
    {/* welcome-section */}
    <section className="welcome-section">
          <div >
           
            <div className="row">
            
    
              <motion.div
                className="col-lg-6 col-md-12 col-sm-12 content-column"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8, delay: 0.5 }}
              >
                <div className="content-box " style={{marginLeft:"30px"}}>
               
                  
                  
    
                  <div className="title">
                  <div className="sec-title">
                   
                    <p>
                   
                    For health plans, ERISA’s early impact was quieter. Most coverage was still fee-for-service, and HMOs were just a blip. The law required employers to provide clear plan details—think funding and benefits—and set fiduciary duties for plan managers. It also preempted state laws “relating to” these plans, giving employers a federal shield to avoid a patchwork of 50 state rules. Self-funded plans (where employers pay claims directly) got extra leeway, dodging state plan regs—a loophole that’d grow massive later.
                    <br></br>
                    <br></br>
                    Fast forward to now: ERISA governs health plans for about 139 million Americans across 2.5 million plans. It’s still split into two flavors:
                    </p>
                    <div className="erisapage-list">
              <ul>
                <li>
                  <strong>Fully Insured:</strong> Employers buy plans from carriers like Blue Cross. These plans face ERISA
                  and some state rules.
                </li>
                <li>
                  <strong>Self-Funded:</strong> Employers foot the bill, often with stop-loss plan to cap big claims. These
                  dodge most state oversight, leaning on ERISA’s preemption.
                </li>
              </ul>
            </div>
            ERISA keeps multi-state employers sane with one rulebook. Workers get plan transparency and fiduciary protections.
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
                    <img src="https://bluecoastwellnessgroup.s3-eu-central-2.ionoscloud.com/frontend/Untitled%20(4).png" alt="Bluecoastwellnessgroup" />
                  </div>
                  <div className="image-box image-two">
                    <img src="https://bluecoastwellnessgroup.s3-eu-central-2.ionoscloud.com/frontend/Homeimg2.png" alt="Bluecoastwellnessgroup" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* welcome-section end */}
    
          </div>
        </div>
      );
    };

export default page