"use client"

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Wallet,
  Network,
  ShieldCheck,
  CalendarCheck,
  Laptop,
  HeartHandshake, // Represents Additional Benefits like Dental, Vision, etc.
  TrendingUp,
  DollarSign,
} from "lucide-react"; // Using Lucide React for a clean, thin-line look


function HomePage() {
  // Animation Variants
  const slideIn = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const features = [
    {
      id: 1,
      icon: <Wallet size={50} strokeWidth={1.5} />,
      title: "Private Health Plans",
      text: `Tailored to individuals, families, and self employed 20-55% less expensive on average than the Market Place`,
    },
    {
      id: 2,
      icon: <Network size={50} strokeWidth={1.5} />,
      title: (
        <>
          Large National <br /> PPO Networks
        </>
      ),
      text: "3 Networks with National coverage across the U.S",
    },
    {
      id: 3,
      icon: <ShieldCheck size={50} strokeWidth={1.5} />,
      title: "ACA-Compliant Plans",
      text: "Coverage that meets all Affordable Care Act regulations.",
    },
    {
      id: 4,
      icon: <CalendarCheck size={50} strokeWidth={1.5} />,
      title: "Year-Round Enrollment",
      text: "No need to wait for open enrollment periods.",
    },
    {
      id: 5,
      icon: <Laptop size={50} strokeWidth={1.5} />,
      title: (
        <>
          Online Quoting <br /> Portal
        </>
      ),
      text: "Fast, seamless, and hassle-free quoting & enrollment with application esign.",
    },
    {
      id: 6,
      icon: <HeartHandshake size={50} strokeWidth={1.5} />,
      title: (
        <>
          Additional <br /> Benefits
        </>
      ),
      text: "Dental, Vision, Mental health, Life Plans,  Critical Illness, and more",
    },
    {
      id: 7,
      icon: <TrendingUp size={50} strokeWidth={1.5} />,
      title: "Lucrative Commissions",
      text: "Add 15-22% residual payouts including renewals",
    },
    {
      id: 8,
      icon: <DollarSign size={50} strokeWidth={1.5} />,
      title: "Consumer Payment Options",
      text: "Health Plans can be paid monthly with either CC or Checking account with zero added fees",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  const testimonials = [
    {
      id: 1,
      text: "“Blue Coast Wellness Group has been a game-changer for our business. Their plans are unbeatable, and their support team is top-notch!”",
      image:
        "https://bluecoastwellnessgroup.s3-eu-central-2.ionoscloud.com/frontend/testi1.png",
      name: "John D. ",
      title: " Independent Broker",
    },
    {
      id: 2,
      text: " “The flexibility and year-round enrollment options make a huge difference. I’ve been able to help more clients than ever before.”",
      image:
        "https://bluecoastwellnessgroup.s3-eu-central-2.ionoscloud.com/frontend/testi2.png",
      name: "Sarah M.",
      title: "Healthcare Advisor",
    },
  ];

  return (
    <>
      <div className="boxed_wrapper">
        {/* welcome-section */}
        <section className="welcome-section">
          <div className="container">
            <div className="title-box centred">
              {/* Uncommented if needed */}
            </div>
            <div className="row">
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

              <motion.div
                className="col-lg-6 col-md-12 col-sm-12 content-column"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8, delay: 0.5 }}
              >
                <div className="content-box">
                  <div className="title">
                    <div className="sec-title">
                      <span> BlueCoast Wellness Group </span>
                      <h2>
                        Exclusive Access to Year-Round Health Plans
                        Solutions
                      </h2>

                      <p>
                        Partner with Blue Coast Wellness Group to provide your
                        clients with high-quality health plans that are covered
                        by the Employee Retirement Income Security Act{" "}
                        <a href="/erisa">(ERISA) </a>
                        available all year long through strategic partnerships.
                        Expand your offerings beyond the exchange and give your
                        clients access to comprehensive medical coverage with
                        top-tier benefits.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* welcome-section end */}

        {/* chooseus-section */}
        <motion.div
          className="chooseus-section centred"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="container">
            <motion.div className="sec-title" variants={fadeIn}>
              <h2>Why Partner with Blue Coast Wellness Group?</h2>
            </motion.div>

            <motion.div className="inner-content" variants={staggerContainer}>
              <div className="row d-flex justify-content-center align-items-center">
                {features.map((feature) => (
                  <motion.div
                    key={feature.id}
                    className="col-lg-3 col-md-6 col-sm-12 column"
                    variants={slideIn}
                  >
                    <div className="chooseus-block-one">
                      <div className="left-layer"></div>
                      <div className="right-layer"></div>
                      <div className="icon-box">
                        {/* ✅ Render the icon correctly */}
                        {feature.icon}
                      </div>
                      <h3 className="link">{feature.title}</h3>
                      <div className="text">{feature.text}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
        {/* chooseus-section end */}

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
            whileInView={{ x: 0, opacity: 1 }} // Trigger animation when element is in view
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
              whileInView={{ x: 0, opacity: 1 }} // Trigger animation when element is in view
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
                whileInView={{ y: 0, opacity: 1 }} // Trigger animation when element is in view
                transition={{ duration: 1, delay: 0.6 }}
              >
                Make an Appointment
                <i className="flaticon-outcoming-object"></i>
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* ourmission-section end */}

        {/* our-philosophy */}
        <section className="our-philosophy" ref={ref}>
          <div className="container">
            <div className="row">
              {/* Image Column */}
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <motion.div
                  className="image-box"
                  initial={{ x: -100, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 1 }}
                >
                  <img
                    src="https://bluecoastwellnessgroup.s3-eu-central-2.ionoscloud.com/frontend/Benefits-of-Collaboration.png"
                    alt="Benefits-of-Collaboration.png"
                  />
                </motion.div>
              </div>

              {/* Content Column */}
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <motion.div
                  className="content-box"
                  initial={{ x: 100, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <div className="sec-title">
                    <span>The Benefits of Collaboration</span>
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
                        title: "Competitive Advantage",
                        text: "Gain a market edge with access to cost-effective pricing and exclusive plans that set you apart. Our partnerships empower you with competitive rates, helping you deliver better value to your clients.",
                      },
                      {
                        num: "02",
                        title: "Dedicated Support",
                        text: "We are invested in your success. Our expert team provides personalized assistance, guiding you through processes, answering questions, and ensuring a smooth and seamless experience.",
                      },
                      {
                        num: "03",
                        title: "Collective Buying Power",
                        text: "Leverage the strength of our network to access better pricing and enhanced benefits. Partnering with Blue Coast Wellness Group means tapping into group buying power that ensures cost savings and superior options.",
                      },
                      {
                        num: "04",
                        title: "Exclusive Resources & Insights",
                        text: "Stay ahead of the competition with insider knowledge, industry updates, and specialized tools. As a Blue Coast Wellness Group partner, you’ll have access to valuable insights that enhance your capabilities and help you grow your business.",
                      },
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="hover-item"
                        style={{ marginBottom: "20px" }}
                      >
                        <span>{item.num}</span>
                        <h4>{item.title}</h4>
                        <p className="sub-description">{item.text}</p>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* our-philosophy end */}

        {/* testimonial-section */}
        <motion.section
          className="testimonial-section centred"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn} // Fade-in effect
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 col-sm-12 offset-lg-2 column">
                <h2 style={{ paddingBottom: "25px" }}>Testimonials</h2>

                {/* Client Testimonial Carousel */}
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  loop={true}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  modules={[Autoplay]}
                  className="client-testimonial-carousel"
                >
                  {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <motion.div
                        className="testimonial-content text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn} // Fade-in effect
                      >
                        <div className="text">
                          <h2>{testimonial.text}</h2>
                        </div>
                        <ul className="rating clearfix">
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star-half-alt"></i>
                          </li>
                        </ul>
                        <div className="author">
                          <strong>{testimonial.name}</strong>
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </motion.section>
        {/* testimonial-section end */}

        <motion.section
          className="cta-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideIn} // Sliding effect from left
        >
          <div className="container">
            <div className="inner-content clearfix">
              <div className="left-column">
                <span>make a call or fill the form</span>
                <h2>Contact our Agent to get a Quote.</h2>
              </div>
              <div className="right-column">
                <motion.a
                  href="/appointment-form"
                  className="theme-btn"
                  whileHover={{ scale: 1.1 }} // Small hover effect
                >
                  Make an Appointment
                  <i className="flaticon-outcoming-object"></i>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.section>
        {/* cta-section end */}
      </div>
    </>
  );
}

export default HomePage;
