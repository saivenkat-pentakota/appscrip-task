import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContactDetails}>
      <div className={styles.newsletter}>
        <h3>BE THE FIRST TO KNOW</h3>
        <p>Sign up for updates from mettā muse.</p>
        <div className={styles.subscribe}>
          <input type="email" placeholder="Enter your e-mail..." />
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <div className={styles.contact}>
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h4>CURRENCY</h4>
          <p>🇺🇸 USD</p>
          <small>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </small>
        </div>
      </div>
      <div><hr></hr></div>

      <div className={styles.footerContent}>
       

        <div className={styles.links}>
          <h4>mettā muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className={styles.quickLinks}>
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className={styles.followUs}>
          <h4>FOLLOW US</h4>
          <div className={styles.socialIcons}>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>

          <h4>mettā muse ACCEPTS</h4>
          <div className={styles.paymentIcons}>
          <Image src="/images/payments.jpg" alt="payments" width={500} height={250} />
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
