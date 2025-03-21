"use client";

import React, { useState } from "react";
import axios from "axios";

function page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true); // Set loading state

    try {
      // Send form data to the backend (Node.js server)
      const response = await axios.post(
        "/api/contact-form",
        formData
      );
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form after submission
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("There was an error sending your message.");
    } finally {
      setIsSubmitting(false); // Reset loading state
    }
  };

  return (
    <>
      <div className="boxed_wrapper">
        {/* page-title */}
        <section className="page-title centred">
          <div className="container">
            <div className="content-box">
              <ul className="bread-crumb">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Contact Us</li>
              </ul>
              <div className="title">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
        </section>
        {/* page-title end */}

        {/* contact-section */}
        <section className="contact-section">
          <div className="container">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
                <div className="inner-content">
                  <div className="sec-title">
                    <span>contact with us</span>
                    <h2>Have any question? feel free to contact with us.</h2>
                  </div>
                  <div className="info-box">
                    <div className="single-item">
                      <span>Call us for immediate support</span>
                      <div className="text">
                        <a href="tel:9177431895">
                          <h3>917-743-1895</h3>
                        </a>
                      </div>
                    </div>
                    <div className="single-item">
                      <span>Send us email for inquiry</span>
                      <div className="text">
                        <a href="mailto:info@bluecoastwellnessgroup.com">
                          <h3>info@bluecoastwellnessgroup.com</h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 ct-form">
                <div className="form-container">
                  <form
                    onSubmit={handleSubmit}
                    id="contact-form"
                    className="quote-form"
                  >
                    <div className="form-group full-width">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name*"
                        required
                        onChange={handleInputChange}
                        value={formData.name}
                      />
                    </div>
                    <div className="form-group full-width">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address*"
                        required
                        onChange={handleInputChange}
                        value={formData.email}
                      />
                    </div>
                    <div className="form-group full-width">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone*"
                        required
                        onChange={handleInputChange}
                        value={formData.phone}
                      />
                    </div>
                    <div
                      style={{ marginBottom: "20px" }}
                      className="form-group full-width"
                    >
                      <textarea
                        name="message"
                        placeholder="Message*"
                        onChange={handleInputChange}
                        value={formData.message}
                      ></textarea>
                    </div>
                    <div className="form-group contact-btn full-width">
                      <button
                        className="theme-btn"
                        type="submit"
                        name="submit-form"
                        disabled={isSubmitting} // Disable the button during submission
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <i className="flaticon-outcoming-object"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact-section end */}

        {/*Scroll to top*/}
        <button className="scroll-top scroll-to-target" data-target="html">
          <span className="fa fa-arrow-up"></span>
        </button>
      </div>{" "}
      {/* End of .page_wrapper */}
    </>
  );
}

export default page;
