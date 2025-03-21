"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState(""); // New state for API response message

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError(""); // Clear error message before making the request
    setStatus(""); // Clear previous status

    try {
      // Assuming the API endpoint for subscription is "/api/subscribe"
      const response = await fetch("/api/subscribe-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Subscribed successfully:", data);
        setStatus("You have been subscribed successfully!"); // Success message
        alert("You have been subscribed successfully!");
        setEmail("");
      } else {
        console.error("Failed to subscribe");
        setStatus(data.message || "Subscription failed. Please try again."); // Show error message from API
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error occurred while subscribing. Please try again."); // Fallback error message
    }
  };

  return (
    <>
      <div>
        <footer className="main-footer">
          <div className="container">
            <div className="footer-top clearfix">
              <div className="logo-outer">
                <div className="footer-logo">
                  <Link href="/">
                    <img
                      src="https://bluecoastwellnessgroup.s3-eu-central-2.ionoscloud.com/frontend/BluecoastLogo.png"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="main-footer-content">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                  <div className="about-widget footer-widget">
                    <div className="text">
                      Partner with Blue Coast Wellness Group to provide your
                      clients with high-quality private health plans
                      available all year long.
                    </div>
                    {/* Subscribe Form */}
                    <div className="footer-form">
                      <form onSubmit={handleSubmit} method="post">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Email address*"
                            required
                          />
                          <button type="submit">
                            <i className="flaticon-outcoming-object" />
                          </button>
                        </div>
                        {error && (
                          <p className="text-red-500 text-sm">{error}</p>
                        )}
                        {status && (
                          <p
                            className={`text-sm ${
                              status.includes("success")
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {status}
                          </p>
                        )}
                      </form>
                    </div>
                    {/* Subscribe Form End */}
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                  <div className="explore-widget footer-widget">
                    <h3 className="widget-title">Explore</h3>
                    <ul className="link-list">
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/plans">Plans</Link>
                      </li>
                      <li>
                        <Link href="/erisa">Erisa</Link>
                      </li>
                     
                      <li>
                        <Link href="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link href="/contact-us">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column" style={{paddingTop: "50px"}}>
                  <div className="product-widget footer-widget">
                    <ul className="link-list">
                   
                      <li>
                        <Link href="/brokers-sign-up">Broker's Sign Up</Link>
                      </li>
                      <li>
                        <Link href="/health-plans-form">Health Plans Application</Link>
                      </li>
                      <li>
                        <Link href="/health-plans-calculator">health Plans calculator</Link>
                      </li>
                      <li>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link href="/terms-and-conditions">Terms & Conditions</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div className="info-widget footer-widget">
                    <h3 className="widget-title">You’ve question?</h3>
                    <div className="info-box">
                      <div className="single-info">
                        <span>Get a Quote</span>
                        <div className="text">
                          <Link href="tel:9177431895" style={{color:"#fff"}}>917-743-1895</Link>
                        </div>
                      </div>
                      <div className="single-info">
                        <span>Send Email</span>
                        <div className="text">
                          <Link href="mailto:info@bluecoastwellnessgroup.com" style={{color:"#fff"}}>
                            info@bluecoastwellnessgroup.com
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="footer-bottom centred">
              <div className="copyright__text text-black">
                Copyright © {new Date().getFullYear()}{" "}
                <Link href="/">Blue Coast Wellness Group</Link>. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
        {/* main-footer end */}
        {/* Scroll to top */}
        <button className="scroll-top scroll-to-target" data-target="html">
          <span className="fa fa-arrow-up" />
        </button>
      </div>
    </>
  );
}
