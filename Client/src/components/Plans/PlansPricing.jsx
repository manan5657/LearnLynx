import React from "react";
import "./PlanPricing.css";

const PlanPricing = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-content">
        <div className="pricing-details">
          <h1>Plans & Pricing</h1>
          <p>
            LearnLynx offers flexible subscription plans for instructors,
            enabling you to share knowledge effortlessly. Choose the plan that
            best fits your teaching needs and start reaching your students in no
            time.
          </p>
          <ul className="pricing-features">
            <li>Unlimited course creation</li>
            <li>Advanced analytics to track student progress</li>
            <li>Custom branding for your courses</li>
            <li>Priority support from our team</li>
            <li>Secure payment gateway integration</li>
          </ul>
        </div>
        <div className="pricing-card-container">
          <div className="pricing-card">
            <h2>Instructor Plan</h2>
            <p className="plan-price">₹1499/month</p>
            <ul className="plan-features">
              <li>Unlimited course access</li>
              <li>Unlimited student enrollments</li>
              <li>Dedicated support</li>
              <li>Custom course branding</li>
              <li>Advanced analytics & reporting</li>
            </ul>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanPricing;
