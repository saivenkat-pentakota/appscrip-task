import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.navbar}>
      {/* Top Section */}
      <div className={styles.navbarTop}>
        <p>Lorem ipsum dolor</p>
        <p>Lorem ipsum dolor</p>
        <p>Lorem ipsum dolor</p>
      </div>

      {/* Main Section */}
      <div className={styles.navbarMain}>
        <div className={styles.logo}><Image src="/images/Logo.jpg" alt="Logo" width={50} height={50} /></div>
        <nav className={styles.navLinks}>
          <a href="/shop">Shop</a>
          <a href="/skills">Skills</a>
          <a href="/stories">Stories</a>
          <a href="/about">About</a>
          <a href="contact-us">Contact Us</a>
        </nav>
        <div className={styles.navIcons}>
          <span>🔍</span>
          <span>❤️</span>
          <span>🛒</span>
          <span>👤</span>
          <span>ENG ⌄</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className={styles.heroSection}>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
    </header>
  );
};

export default Header;
