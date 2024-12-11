import React from "react";
import styles from "../styles/Home.module.css";

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
        <div className={styles.logo}>LOGO</div>
        <nav className={styles.navLinks}>
          <a href="#">Shop</a>
          <a href="#">Skills</a>
          <a href="#">Stories</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
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
