import React, { useState } from "react";
import styles from "./MainContentSideBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function MainContentSideBar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
 


  return (
    <div className={styles.sideBar}>
      {/*------------------------------ Category display box----------------------------------- */}
      <div className={styles.categoryHeader}>
        <h5>Category:</h5>
        <h5>Home & Living (746,092)</h5>
      </div>

      {/* ----------------------------------Dropdown Icons -----------------------------------------*/}

      <div className={styles.sideBarContainer}>
        <ul className={styles.sideBarList}>

          {/* each list item */}
          <li className={styles.listItem}>
            <div className={styles.listedOptions}>Bathroom</div>
            <div className={styles.NOofOptions}>
              (18,937)
              <FontAwesomeIcon
                icon={faCaretDown}
                className={styles.sidebarDropArrows}
              />
            </div>
          </li>




          <li className={styles.listItem}>
            <div className={styles.listedOptions}>
              Bedding & towels
            </div>
            <div className={styles.NOofOptions}>
              (18,937)
              <FontAwesomeIcon
                icon={faCaretDown}
                className={styles.sidebarDropArrows}
              />
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.listedOptions}>
              Bedroom furniture
            </div>
            <div className={styles.NOofOptions}>
              (18,937)
              <FontAwesomeIcon
                icon={faCaretDown}
                className={styles.sidebarDropArrows}
              />
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.listedOptions}>
              Beds
            </div>
            <div className={styles.NOofOptions}>
              (18,937)
              <FontAwesomeIcon
                icon={faCaretDown}
                className={styles.sidebarDropArrows}
              />
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.listedOptions}>
              Beer, wine & spirits
            </div>
            <div className={styles.NOofOptions}>
              (18,937)
              <FontAwesomeIcon
                icon={faCaretDown}
                className={styles.sidebarDropArrows}
              />
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.listedOptions}>
              Cleaning & bins
            </div>
            <div className={styles.NOofOptions}>
              (18,937)
              <FontAwesomeIcon
                icon={faCaretDown}
                className={styles.sidebarDropArrows}
              />
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.listedOptions}>
              Curtains & blinds
            </div>
            <div className={styles.NOofOptions}>
              (18,937)
              <FontAwesomeIcon
                icon={faCaretDown}
                className={styles.sidebarDropArrows}
              />
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.listedOptions}>
              Food & beverage
            </div>
            <div className={styles.NOofOptions}>
              (18,937)
              <FontAwesomeIcon
                icon={faCaretDown}
                className={styles.sidebarDropArrows}
              />
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.listedOptions}>
              Heating & cooling
            </div>
            <div className={styles.NOofOptions}>
              (18,937)
              <FontAwesomeIcon
                icon={faCaretDown}
                className={styles.sidebarDropArrows}
              />
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.listedOptions}>
              Home Decor
            </div>
            <div className={styles.NOofOptions}>
              (18,937)
              <FontAwesomeIcon
                icon={faCaretDown}
                className={styles.sidebarDropArrows}
              />
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.listedOptions}>
              Kitchen
            </div>
            <div className={styles.NOofOptions}>
              (18,937)
              <FontAwesomeIcon
                icon={faCaretDown}
                className={styles.sidebarDropArrows}
              />
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.listedOptions}>
              Lamps
            </div>
            <div className={styles.NOofOptions}>
              (18,937)
              <FontAwesomeIcon
                icon={faCaretDown}
                className={styles.sidebarDropArrows}
              />
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.listedOptions}>
              Laundry
            </div>
            <div className={styles.NOofOptions}>
              (18,937)
              <FontAwesomeIcon
                icon={faCaretDown}
                className={styles.sidebarDropArrows}
              />
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.listedOptions}>
              Lifestyle
            </div>
            <div className={styles.NOofOptions}>
              (18,937)
              <FontAwesomeIcon
                icon={faCaretDown}
                className={styles.sidebarDropArrows}
              />
            </div>
          </li>
       
              <li className={styles.listItem}>
      <div className={styles.listedOptions}>
        Lounge, dining & hall
      </div>
      <div className={styles.NOofOptions}>
        (18,937)
        <FontAwesomeIcon
          icon={faCaretDown}
          className={styles.sidebarDropArrows}
          onClick={toggleDropdown}
        />
      </div>
      {isOpen && (
        <div className={styles.dropdownContent}>
        
          <a >All products</a>
          <a >Beanbags</a>
          <a >Cabinets & bookshelves</a>
          <a >Chairs</a>
          <a >Desks</a>
          <a >Dining suites</a>
          <a >Entertainment units</a>
          <a >Lounge suites</a>
          <a >Ottomans & footstools</a>
          <a >Rugs & carpets</a>
          <a >Tables</a>
          <a >Other</a>
        </div>
      )}
    </li>



          <li className={styles.listItem}>
            <div className={styles.listedOptions}>
              Luggage & travel accessories
            </div>
            <div className={styles.NOofOptions}>
              (18,937)
              <FontAwesomeIcon
                icon={faCaretDown}
                className={styles.sidebarDropArrows}
              />
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.listedOptions}>
              Outdoor,garden & conservatory
            </div>
            <div className={styles.NOofOptions}>
              (18,937)
              <FontAwesomeIcon
                icon={faCaretDown}
                className={styles.sidebarDropArrows}
              />
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.listedOptions}>
              Party & festive supplies
            </div>
            <div className={styles.NOofOptions}>
              (18,937)
              <FontAwesomeIcon
                icon={faCaretDown}
                className={styles.sidebarDropArrows}
              />
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.listedOptions}>
              Security, locks 7 alarms
            </div>
            <div className={styles.NOofOptions}>
              (18,937)
              <FontAwesomeIcon
                icon={faCaretDown}
                className={styles.sidebarDropArrows}
              />
            </div>
          </li>
          
        </ul>
      </div>
    </div>
  );
}
