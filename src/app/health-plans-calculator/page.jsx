"use client";

import React, { useState } from "react";
import Link from "next/link";

function page() {
  const [ageRange, setAgeRange] = useState("");
  const [coverageType, setCoverageType] = useState("");
  const [deductible, setDeductible] = useState("");
  const [hsaPlan, setHsaPlan] = useState(false);
  const [monthlyPremium, setMonthlyPremium] = useState(
    "Please complete all selections"
  );

  const calculatePremium = () => {
    if (!ageRange || !coverageType || !deductible) {
      setMonthlyPremium("Please complete all selections");
      return;
    }

    if (hsaPlan) {
      setMonthlyPremium(`$648.32`);
      return;
    }

    let basePremium = 500;

    // Adjust base premium based on age range
    if (ageRange === "18-29") {
      basePremium = 400;
    } else if (ageRange === "30-44") {
      basePremium = 500;
    } else if (ageRange === "45-54") {
      basePremium = 600;
    } else if (ageRange === "55-64") {
      basePremium = 700;
    }

    // Adjust based on coverage type
    if (coverageType === "employee") {
      basePremium += 100;
    } else if (coverageType === "employee-spouse") {
      basePremium += 150;
    } else if (coverageType === "employee-children") {
      basePremium += 200;
    } else if (coverageType === "family") {
      basePremium += 250;
    }

    // Adjust based on deductible
    if (deductible === "1500") {
      basePremium += 50;
    } else if (deductible === "2500") {
      basePremium += 75;
    } else if (deductible === "5000") {
      basePremium += 100;
    } else if (deductible === "7350") {
      basePremium += 150;
    }

    setMonthlyPremium(`$${basePremium.toFixed(2)}`);
  };

  return (
    <>
      <section className="page-title centred">
        <div className="container">
          <div className="content-box">
            <div className="title">
              <h2>Health Plans Calculator</h2>
            </div>
          </div>
        </div>
      </section>
      <div className="form-container" style={{ marginTop: "-120px" }}>
        <div className="quote-form">
          <div className="form-group full-width" style={styles.formGroup}>
            <label htmlFor="age" style={styles.label}>
              Age Range:
            </label>
            <select
              id="age"
              value={ageRange}
              onChange={(e) => setAgeRange(e.target.value)}
              style={{
                padding: "8px",
                marginBottom: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            >
              <option value="">Choose your age range</option>
              <option value="18-29">18-29</option>
              <option value="30-44">30-44</option>
              <option value="45-54">45-54</option>
              <option value="55-64">55-64</option>
            </select>
          </div>

          <div className="form-group full-width" style={styles.formGroup}>
            <label htmlFor="coverage" style={styles.label}>
              Coverage Type:
            </label>
            <select
              id="coverage"
              value={coverageType}
              onChange={(e) => setCoverageType(e.target.value)}
              style={styles.select}
            >
              <option value="">Choose your coverage type</option>
              <option value="employee">Employee Only</option>
              <option value="employee-spouse">Employee + Spouse</option>
              <option value="employee-children">Employee + Child(ren)</option>
              <option value="family">Family</option>
            </select>
          </div>

          <div className="form-group full-width" style={styles.formGroup}>
            <label htmlFor="deductible" style={styles.label}>
              Deductible:
            </label>
            <select
              id="deductible"
              value={deductible}
              onChange={(e) => setDeductible(e.target.value)}
              style={styles.select}
            >
              <option value="">Choose your deductible</option>
              <option value="1500">$1,500 PPO</option>
              <option value="2500">$2,500 PPO</option>
              <option value="5000">$5,000 EPO</option>
              <option value="7350">$7,350 EPO</option>
            </select>
          </div>

          <div className="checkbox-group  " style={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="hsa"
              checked={hsaPlan}
              onChange={() => {
                setHsaPlan(!hsaPlan);
                if (!hsaPlan) {
                  setMonthlyPremium("$648.32"); // Set with dollar sign
                } else {
                  calculatePremium(); // Will calculate premium with the dollar sign properly
                }
              }}
            />
            <label htmlFor="hsa" style={styles.checkboxLabel}>
              HSA PPO Plan
            </label>
          </div>

          <div className="result form-group full-width">
            <h3>Monthly Premium:</h3>
            <div className="premium" id="premium" style={styles.premium}>
              {monthlyPremium}
            </div>
            <p className="disclaimer" style={styles.disclaimer}>
              This is an estimate. Actual rates may vary.
            </p>
          </div>
          <div className="form-group full-width">
            <Link href="/contact-us" className="btn-box ">
              <button type="submit" className="theme-btn">
                Contact Us<i className="flaticon-outcoming-object"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  calculatorContainer: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "500px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  formGroup: {
    marginBottom: "15px",
    zIndex: "1",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  select: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  checkboxGroup: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "15px",
  },
  checkboxLabel: {
    display: "inline",
    margin: "0",
  },
  result: {
    marginTop: "20px",
    padding: "15px",
    backgroundColor: "#f8f9fa",
    borderRadius: "4px",
  },
  premium: {
    fontSize: "24px",
    color: "#0066cc",
    fontWeight: "bold",
  },
  disclaimerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  disclaimer: {
    fontSize: "12px",
    color: "#666",
    margin: "0",
  },
  contactButton: {
    backgroundColor: "#0066cc",
    color: "white",
    padding: "6px 12px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "11px",
    whiteSpace: "nowrap",
    display: "inline-block",
    lineHeight: "1.2",
  },
};

export default page;
