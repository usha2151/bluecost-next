"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const handleDropdownToggle = (index) => {
    if (isMobile) {
      setOpenDropdown(openDropdown === index ? null : index);
    }
  };

  const handleMouseEnter = (index) => {
    if (!isMobile) {
      setOpenDropdown(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setOpenDropdown(null);
    }
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        document.body.classList.add("fixed-header");
        setIsSticky(true);
      } else {
        document.body.classList.remove("fixed-header");
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Header */}
      <header className="main-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12 logo-column">
              <div className="left-column">
                <figure className="logo-box ">
                  <Link href="/" className="navlog">
                    <img
                      src="https://bluecoastwellnessgroup.s3-eu-central-2.ionoscloud.com/frontend/BluecoastLogo.png"
                      alt=""
                    />
                  </Link>
                </figure>
              </div>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12 menu-column">
              <div className="right-column clearfix">
                <div className="header-top">
                  <ul className="top-info clearfix">
                    <li>
                      <div className="icon-box">
                        <i className="flaticon-phone-call"></i>
                      </div>
                      <div className="text-box">
                        <div className="text">
                          <a href="tel:9177431895">917-743-1895</a>
                        </div>
                        <span>Phone</span>
                      </div>
                    </li>
                    <li>
                      <div className="icon-box">
                        <i className="flaticon-mail"></i>
                      </div>
                      <div className="text-box">
                        <div className="text">
                          <a href="mailto:info@bluecoastwellnessgroup.com">
                            info@bluecoastwellnessgroup.com
                          </a>
                        </div>
                        <span>email</span>
                      </div>
                    </li>

                    <li className="btn-box">
                      <Link href="/quote-form" className="theme-btn">
                        Get a Quote<i className="flaticon-outcoming-object"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="menu-area">
                  <nav className="main-menu navbar-expand-lg">
                    <div className="navbar-header">
                      {/* Toggle Button */}
                      <button
                        type="button"
                        className="navbar-toggle"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                      >
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                    </div>
                    <div className="navbar-collapse collapse clearfix">
                      <ul className="navigation clearfix">
                        <li className="dropdown">
                          <Link href="/">Home</Link>
                        </li>
                        <li className="dropdown">
                          <Link href="/about-us">About Us</Link>
                        </li>

                        <li
                          className="dropdown"
                          onMouseEnter={() => handleMouseEnter(1)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <Link
                            href="/plans"
                            onClick={() => handleDropdownToggle(1)}
                          >
                            Plans
                          </Link>
                          {openDropdown === 1 && (
                            <ul>
                              <li>
                                <Link href="/plans/visit-limit">Visit Limit</Link>
                              </li>
                              <li>
                                <Link href="/plans/major-medical">Major Medical</Link>
                              </li>
                              <li>
                                <Link href="/plans/hsa">HSA</Link>
                              </li>
                            </ul>
                          )}
                        </li>
 <li>
                        <Link href="/health-plans-calculator">health Plans calculator</Link>
                      </li>
                        <li>
                          <Link href="/contact-us">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Sticky Header*/}
        <div className="sticky-header">
          <div className="container clearfix">
            <figure className="logo-box">
              <Link href="/" className="sticky-logo">
                <img
                  src="https://bluecoastwellnessgroup.s3-eu-central-2.ionoscloud.com/frontend/BluecoastLogo.png"
                  alt=""
                />
              </Link>
            </figure>
            <div className="menu-area">
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  {/* Toggle Button */}
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="navbar-collapse collapse clearfix">
                  <ul className="navigation clearfix">
                    <li className="dropdown">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="dropdown">
                      <Link href="/about-us">About Us</Link>
                    </li>
                    <li
                      className="dropdown"
                      onMouseEnter={() => handleMouseEnter(1)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link href="/plans" onClick={() => handleDropdownToggle(1)}>
                        Plans
                      </Link>
                      {openDropdown === 1 && (
                        <ul>
                          <li>
                            <Link href="/plans/visit-limit">Visit Limit</Link>
                          </li>
                          <li>
                            <Link href="/plans/major-medical">Major Medical</Link>
                          </li>
                          <li>
                            <Link href="/plans/hsa">HSA</Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li>
                        <Link href="/health-plans-calculator">health Plans calculator</Link>
                      </li>
                    <li>
                      <Link href="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* sticky-header end */}
      </header>
      {/* End Main Header */}
    </>
  );
}
