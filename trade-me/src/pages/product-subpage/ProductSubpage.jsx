import React from 'react'
import TrademeHeader from './components/TrademeHeader/TrademeHeader'
import TrademeFooter from './components/TrademeFooter/TrademeFooter'
import ProductSubPageMain from './components/ProductSubPageMainContent/ProductSubPageMain'
import styles from './ProductSubpage.module.css'

export default function ProductSubpage() {
  return (
    <div className={styles.mainContainer}>
        <TrademeHeader/>
        <ProductSubPageMain/>
        {/* ProductS ubpage Main content */}
        <TrademeFooter/>
        </div>
  )
}
