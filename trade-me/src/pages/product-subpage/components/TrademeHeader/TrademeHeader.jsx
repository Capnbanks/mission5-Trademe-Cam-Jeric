import React from "react";
import styles from "./TrademeHeader.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import tradeMeLogo from './trade-me-logo.webp';


const TrademeHeader = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navLinks}>
          {/* Your navigation links */}
          <li>Trade Me</li>
          <li>Trade Me Insurance</li>
          <li>Holiday Houses</li>
          <li>FindSomeone</li>
          <li>MotorWeb</li>
          <li>homes.co.nz</li>
        </ul>
        <div className={styles.logoLine}>
          <div className={styles.trademe}>
            <img className={styles.tradeMeLogo} src={tradeMeLogo} alt="Logo" /> 
          </div>
          <div className={styles.search}>
            <button><FontAwesomeIcon icon={faSearch} /></button>
            <input
              className={styles.searchBox}
              type="text"
              placeholder="         Search all of Trade Me "
            />
            
          </div>
          <ul className={styles.optionsBar}>
            <li> <FontAwesomeIcon icon={faShoppingCart} /> Cart</li>
            <li> <FontAwesomeIcon icon={faCoins} /> My bids</li>
            <li> <FontAwesomeIcon icon={faHeart} /> Saves</li>
            <li> <FontAwesomeIcon icon={faEdit} /> List item</li>
            <li> <FontAwesomeIcon icon={faUser} /> Login</li>
          </ul>
        </div>
      </nav>
      <div>
        <ul className={styles.redBar}>
          <li className={styles.redBarOptions}>Browse Marketplace <FontAwesomeIcon icon={faCaretDown} /> </li>
          <li className={styles.redBarOptions}>Stores</li>
          <li className={styles.redBarOptions}>Deals</li>
          <li className={styles.redBarOptions}>Book a courier</li>
        </ul>
      </div>
      

    </header>
  );
};

export default TrademeHeader;
