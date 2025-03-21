"use client";

import React from 'react';
import Link from 'next/link';
import { ErisaSection } from '@/common/ErisaSection';

function page() {
    return (
        <> 
        
         {/* page-title */}
         <section className="page-title centred">
            <div className="container">
                <div className="content-box">
                    {/* <ul className="bread-crumb">
                        <li><a href="index.html">Home</a></li>
                        <li>Plans</li>
                    </ul> */}
                    <div className="title"><h2>Plans</h2></div>
                </div>
            </div>
        </section>
       {/* page-title end */}
            {/*featured-section */}
         <section class="featured-section centred" style={{marginTop: "-240px"}}>
         <div class="container">
             <div class="row">
                
                 <div class="col-lg-4 col-md-6 col-sm-12 featured-column">
                     <div class="single-featured-content wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                         <div class="image-box"><Link href="/vlplans"><img src="https://bluecoastwellnessgroup.s3-eu-central-2.ionoscloud.com/frontend/plans/pad2.png" alt="" className='im'/></Link></div>
                         <div class="lower-content">
                             <h3><Link href="/vlplans">Visit Limit</Link></h3>
                             {/* <div class="text">Quo te deseruisse repudiandae orpora suscipit at nam natum altera eripuias eu brute scriptorem.</div> */}
                             <div class="link"><Link href="/vlplans">View Plans</Link></div>
                         </div>
                     </div>
                 </div>
                 <div class="col-lg-4 col-md-6 col-sm-12 featured-column">
                     <div class="single-featured-content wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                         <div class="image-box"><Link href="/majormedical"><img src="https://bluecoastwellnessgroup.s3-eu-central-2.ionoscloud.com/frontend/plans/Electrocardiogram (1).png" alt="" className='im'/></Link></div>
                         <div class="lower-content">
                             <h3><Link href="/majormedical">Major Medical</Link></h3>
                             {/* <div class="text">Quo te deseruisse repudiandae orpora suscipit at nam natum altera eripuias eu brute scriptorem.</div> */}
                             <div class="link"><Link href="/majormedical">View Plans</Link></div>
                         </div>
                     </div>
                 </div>
                 <div class="col-lg-4 col-md-6 col-sm-12 featured-column">
                     <div class="single-featured-content wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                         <div class="image-box"><Link href="/hsa"><img src="https://bluecoastwellnessgroup.s3-eu-central-2.ionoscloud.com/frontend/plans/First%20Aid%20Kit%20(1).png" alt="" className='im' /></Link></div>
                         <div class="lower-content">
                             <h3><Link href="/hsa">HSA</Link></h3>
                             {/* <div class="text">Quo te deseruisse repudiandae orpora suscipit at nam natum altera eripuias eu brute scriptorem.</div> */}
                             <div class="link"><Link href="/hsa">View Plans</Link></div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </section>
    
     <ErisaSection />
      {/*featured-section end */}
      </>
    
      );
    }

export default page