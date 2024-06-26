import React, { useEffect,useState } from "react";
import styles from "./MainContentSearchDisplay.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTh } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import property1Default from './Property 1=Default.png';
import property1Variant2 from './Property 1=Variant2.png'
import property1Variant3 from './Property 1=Variant3.png'
import ImageCarousel from './ImageCarousel/ImageCarousel'
import axios from 'axios';

export default function MainContentSearchDisplay() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId === selectedButton ? null : buttonId);
  };

  const images = [
    property1Default,
    property1Variant2,
    property1Variant3,
  ]; //Create a const images for each image when you get all of the photos
  //then can change the call for each one below to do them all,
  //Could do it in component folder to be clean



//--------fetching mongo info on listings-----------------------------------------------------//
// const [listings, setListings] = useState(null);

//   useEffect(() => {
//     axios.get("http://localhost:4000/api/listings").then((res) => {
//       console.log(res?.data);
//       setListings(res?.data?.data);
//     });
//   }, []);

//-----------------Docker attempt-------------------------------------------------------------//
const [listings, setListings] = useState(null);

useEffect(() => {
  axios.get("http://localhost:4000/api/listings")
    .then((res) => {
      console.log(res?.data);
      setListings(res?.data?.data);
    })
    .catch((error) => {
      console.error('Error fetching listings:', error);
    });
}, []);
//------------------Filter, sort by click button----------------//

  const [sortByDropdownVisible, setSortByDropdownVisible] = useState(false);
  const [filtersDropdownVisible, setFiltersDropdownVisible] = useState(false);

  const toggleSortByDropdown = () => {
    setSortByDropdownVisible(!sortByDropdownVisible);
  };

  const toggleFiltersDropdown = () => {
    setFiltersDropdownVisible(!filtersDropdownVisible);
  };



  return (
    <div className={styles.mainContainer}>
      <ul className={styles.topOptions}>
        <li className={styles.topListOption}>
          <div
            className={`${styles.buttonContainer} ${
              selectedButton === "allProducts" ? styles.highlightBackground : ""
            }`}
          >
            <button
              className={styles.noStyleButton}
              onClick={() => handleButtonClick("allProducts")}
            >
              All Products
            </button>
          </div>
        </li>
        <li className={styles.topListOption}>
          <div
            className={`${styles.buttonContainer} ${
              selectedButton === "buyNow" ? styles.highlightBackground : ""
            }`}
          >
            <button
              className={styles.noStyleButton}
              onClick={() => handleButtonClick("buyNow")}
            >
              Buy now
            </button>
          </div>
        </li>
        <li className={styles.topListOption}>
          <div
            className={`${styles.buttonContainer} ${
              selectedButton === "biddings" ? styles.highlightBackground : ""
            }`}
          >
            <button
              className={styles.noStyleButton}
              onClick={() => handleButtonClick("biddings")}
            >
              Biddings
            </button>
          </div>
        </li>
      </ul>

      {/*----------------- Search Bar Line ----------------*/}
      {/* <div className={styles.searchLine}>
        <div className={styles.search}>
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <input
            className={styles.searchBox}
            type="text"
            placeholder="      Search all of Trade Me"
          />
          <div className={styles.filterOptions}>
            <p className={styles.sortBy}>
              <FontAwesomeIcon icon={faSort} /> Sort by
            </p>
            <p className={styles.filters}>
              <FontAwesomeIcon icon={faFilter} /> Filters(2)
            </p>
            <div className={styles.filterIcons}>
            <FontAwesomeIcon className={styles.gridView} icon={faTh}/>
            <FontAwesomeIcon className={styles.hamburger} icon={faBars} />
            </div>
          </div>
        </div>
      </div> */}

<div className={styles.searchLine}>
      <div className={styles.search}>
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <input
          className={styles.searchBox}
          type="text"
          placeholder="      Search all of Trade Me"
        />
        <div className={styles.filterOptions}>
          <p className={styles.sortBy} onClick={toggleSortByDropdown}>
            <FontAwesomeIcon icon={faSort} /> Sort by
          </p>
          {sortByDropdownVisible && (
            <div className={styles.dropdownMenu}>
              <div className={styles.dropdownContent}>
                {/* Your dropdown options for Sort by */}
                <p>Featured first</p>
                <p>Most viewed</p>
                <p>Lowest price</p>
                <p>Highest price</p>
                <p>Latest listings</p>
                <p>Lowest buy now</p>
                <p>Highest buy now</p>
                <p>Most bids</p>
                <p>Closing soon</p>
                <p>Title</p>
                <p>Largest discount</p>
              </div>
            </div>
          )}
          <p className={styles.filters} onClick={toggleFiltersDropdown}>
            <FontAwesomeIcon icon={faFilter} /> Filters(2)
          </p>
          {filtersDropdownVisible && (
            <div className={styles.dropdownMenu}>
              <div className={styles.dropdownContent}>
                {/* Your dropdown options for Filters */}
                <p>Location</p>
                <p>New & used</p>
                <p>Shipping</p>
                <p>Price</p>
                <p>Payment</p>
                <p>Clearance</p>
                <p className={styles.clearAll}>Clear all</p>
              </div>
            </div>
          )}
          <div className={styles.filterIcons}>
            <FontAwesomeIcon className={styles.gridView} icon={faTh} />
            <FontAwesomeIcon className={styles.hamburger} icon={faBars} />
          </div>
        </div>
      </div>
    </div>



      {/*------------- display database trademe stuff -----------------*/}

      <div className="App">
    {listings ? (
      <ul className={styles.imageDisplayContainer}>
        {listings?.map((listing, index) => (
          
          <li key={index}>
<img className={styles.listingImage} src={listing.imageUrl} alt="Listing" /> 
              <div className={styles.textContentListings}>
            <h2 className={styles.itemName}>{listing.title}</h2>
            <p className={styles.saleLocation}><FontAwesomeIcon icon={faMapMarkerAlt} /> {listing.location}</p>
            <p className={styles.itemNameSmaller}>{listing.title}</p>
            <div className={styles.priceLine}>
            <p className={styles.buyNow}>Buy now ${listing.price}</p>
            <p className={styles.currentBid}> Current bid ${listing.currentBid}</p>
          </div>
          </div>
          </li>
        ))}
      </ul>

      
    ) : (
      <p>Loading...</p>
    )}
  </div>

 




      {/* -------------Image carousel below -----------------*/}
      {/* <div className={styles.imageDisplay}>
      <div className={styles.carouselContainer}>
      <div>
      <ImageCarousel images={images} />
      <p className={styles.itemName}>Madeleine Chase Sofa -Heritage ...</p>
      <p className={styles.saleLocation}><FontAwesomeIcon icon={faMapMarkerAlt} /> Auckland City,Auckland</p>
      <p className={styles.itemNameSmaller}>Madeleine Chase Sofa -Heritage ...</p>
      <p className={styles.buyNow}>Buy now <span className={styles.itemCost}> $3,100</span>
       <span className={styles.currentBid}>Current bid <span className={styles.currentBidNum}> $1,500</span></span></p>
    </div>
    
      <div>
      <ImageCarousel images={images} />
      <p className={styles.itemName}>Lounge Suite</p>
      <p className={styles.saleLocation}><FontAwesomeIcon icon={faMapMarkerAlt} /> Hibiscus Coast</p>
      <p className={styles.itemNameSmaller}>Comfortable and Luxurious Modular sofa</p>
      <p className={styles.buyNow}>Buy now <span className={styles.itemCost}> $2,900</span>
       <span className={styles.currentBid}>Current bid <span className={styles.currentBidNum}> $1,900</span></span></p>
    </div>
      <div>
      <ImageCarousel images={images} />
      <p className={styles.itemName}>Locally Made Book/thing Shelves</p>
      <p className={styles.saleLocation}><FontAwesomeIcon icon={faMapMarkerAlt} /> Porirua,Wellington</p>
      <p className={styles.itemNameSmaller}>This open source design is straight from ...</p>
      <p className={styles.buyNow}>Buy now <span className={styles.itemCost}> $480</span></p>
       
    </div>
      <div>
      <ImageCarousel images={images} />
      <p className={styles.itemName}>Paola & George lamp</p>
      <p className={styles.saleLocation}><FontAwesomeIcon icon={faMapMarkerAlt} /> North Shore</p>
      <p className={styles.itemNameSmaller}>Madeleine Chase Sofa -Heritage ...</p>
      <p className={styles.buyNow}>Buy now <span className={styles.itemCost}> $700</span></p>
       
    </div>
      <div>
      <ImageCarousel images={images} />
      <p className={styles.itemName}>Silk Floral Bouquet/s on offer/ ...</p>
      <p className={styles.saleLocation}><FontAwesomeIcon icon={faMapMarkerAlt} /> Cambridge</p>
      <p className={styles.itemNameSmaller}>We have this beautiful offering of silk...</p>
      <p className={styles.buyNow}>Buy now <span className={styles.itemCost}> $1,200</span>
       <span className={styles.currentBid}>Current bid <span className={styles.currentBidNum}> $150</span></span></p>
    </div>
      <div>
      <ImageCarousel images={images} />
      <p className={styles.itemName}>**3.6m W x 6.0m D -Stylish & ...</p>
      <p className={styles.saleLocation}><FontAwesomeIcon icon={faMapMarkerAlt} /> Hamilton</p>
      <p className={styles.itemNameSmaller}>NEW!-STYLISH, MODERN &FUNCTION...</p>
      <p className={styles.buyNow}>Buy now <span className={styles.itemCost}> $19,850</span></p>
       
    </div>
      <div>
      <ImageCarousel images={images} />
      <p className={styles.itemName}>Full Privacy PVC Fence Panel 1,83...</p>
      <p className={styles.saleLocation}><FontAwesomeIcon icon={faMapMarkerAlt} /> Hibiscus Coast</p>
      <p className={styles.itemNameSmaller}>Full Privacy PVC Fence Panel</p>
      <p className={styles.buyNow}>Buy now <span className={styles.itemCost}> $279</span></p>
       
    </div>
      <div>
      <ImageCarousel images={images} />
      <p className={styles.itemName}>50m2 Vista Cabin (Kitset Supply)...</p>
      <p className={styles.saleLocation}><FontAwesomeIcon icon={faMapMarkerAlt} /> Nelson</p>
      <p className={styles.itemNameSmaller}>Modern and Spacious Aura Cabin</p>
      <p className={styles.buyNow}>Buy now <span className={styles.itemCost}> $145,500</span>
       <span className={styles.currentBid}>Current bid <span className={styles.currentBidNum}> $145,500</span></span></p>
    </div>
      <div>
      <ImageCarousel images={images} />
      <p className={styles.itemName}>Roller Blinds</p>
      <p className={styles.saleLocation}><FontAwesomeIcon icon={faMapMarkerAlt} /> Christchurch City</p>
      <p className={styles.itemNameSmaller}>4 battery operated, 1600 x 2200, 1600...</p>
      <p className={styles.buyNow}>Buy now unavailable <span className={styles.itemCost}></span>
       <span className={styles.currentBid}>Current bid <span className={styles.currentBidNum}> $1</span></span></p>
    </div>
     
     </div>
           
      </div> */}
    </div>
  );
}
