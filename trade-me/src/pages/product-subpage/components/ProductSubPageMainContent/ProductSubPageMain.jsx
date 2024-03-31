import React from 'react'
import homeLivingHeadPic from './components/Home&livingTrademe.png'
import styles from "./ProductSubPageMain.module.css"
import MainContentSideBar from './components/MainContentSideBar/MainContentSideBar'
import MainContentSearchDisplay from './components/MainContentSearchDisplay/MainContentSearchDisplay'


export default function ProductSubPageMain() {
  return (
  <div className={styles.banner}>
  <img className={styles.homeLivingHeadPic} src={homeLivingHeadPic} alt='Home & Living' ></img>
  <div className={styles.mainContent}>
    <MainContentSideBar/>
    <MainContentSearchDisplay/>
  </div>
  </div>
  )
}
