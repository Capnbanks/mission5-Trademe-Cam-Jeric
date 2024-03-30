import React from "react";
import styles from "./TrademeFooter.module.css";
import tradeMeLogo from "./trade-me-logo.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import facebookLogo from"./facebook-f.svg"
import twitterLogo from"./twitter.svg"



export default function TrademeFooter() {
  return (
    <>
      <footer className={styles.trademeFooter}>
        <div className={styles.footerContent}>
          <div className={styles.tradeMeContainer}>
            <img className={styles.tradeMeLogo} src={tradeMeLogo} alt="Logo" />
            <div className={styles.footerOptionsContainer}>
              <p className={styles.footerOptions}>My bids </p>
              <p className={styles.footerOptions}>Likes </p>
              <p className={styles.footerOptions}>List item </p>
              <p className={styles.footerOptions}>Login </p>
            </div>
          </div>

          <ul className={styles.footerHeaderContainer}>
            {/* <li className={styles.footerHeadBoxes}> */}
            <ul className={styles.subHeaders}>
              <li className={styles.footerHeaders}>MarketPlace</li>
              <li>Latest deals</li>
              <li>Stores</li>
              <li>Closing soon</li>
              <li>$1 reserve</li>
            </ul>
            {/* </li> */}

            <ul className={styles.subHeaders}>
              <li className={styles.footerHeaders}>Jobs</li>
              <li>Browse categories</li>
              <li>Careers advice</li>
              <li>JobSmart</li>
              <li>Advertisers advice</li>
            </ul>

            <ul className={styles.subHeaders}>
              <li className={styles.footerHeaders}>Motors</li>
              <li>Browse all cars</li>
              <li>Other vehicles</li>
              <li>Buying & selling</li>
              <li>Dealer news & info</li>
            </ul>

            <ul className={styles.subHeaders}>
              <li className={styles.footerHeaders}>Property</li>
              <li>International property</li>
              <li>News & guides</li>
              <li>Homes.co.nz</li>
              <li>Dealer news & info</li>
            </ul>

            <ul className={styles.subHeaders}>
              <li className={styles.footerHeaders}>Services</li>
              <li>Trades</li>
              <li>Domestic services</li>
              <li>Events & entertainment</li>
              <li>Health & wellbeing</li>
            </ul>

            <ul className={styles.subHeaders}>
              <li className={styles.footerHeaders}>Community</li>
              <li>Help</li>
              <li>Announcements</li>
              <li>Trust & safety</li>
              <li>Seller information</li>
            </ul>
          </ul>
        </div>

        <div className={styles.footerLegal}>
          <p>&copy; {new Date().getFullYear()} TradeMe Limited</p>
          <ul className={styles.bottomBarFooterContainer}>
            <li className={styles.bottomBarFooter}>Desktop site</li>
            <li className={styles.bottomBarFooter}>About us</li>
            <li className={styles.bottomBarFooter}>Careers</li>
            <li className={styles.bottomBarFooter}>Advertise</li>
            <li className={styles.bottomBarFooter}>Privacy policy</li>
            <li className={styles.bottomBarFooter}>Terms & conditions</li>
            <li className={styles.bottomBarFooter}>Contact us</li>
            {/* <li><FontAwesomeIcon icon={faFacebookSquare} /></li> */}
              <div className={styles.socialIcons}>
  
          <img className={styles.facebookLogo} src={facebookLogo} ></img>
          <img className={styles.twitterLogo} src={twitterLogo} ></img>
          </div>
          </ul>
        
        </div>
      </footer>
    </>
  );
}
