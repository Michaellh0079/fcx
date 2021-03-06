import React from 'react';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Goser() {
  return (
    <Layout>
      <div className={styles.center_pane}> 
        <h2>1.2 GOES-R PLT</h2>
        <p>The GOES-R, now GOES-16, is the R-series of the latest generation of Geostationary Operational Environmental Satellites (GOES) collaboratively developed, launched, and operated by the National Oceanic and Atmospheric Administration (NOAA) and NASA. The Post Launch Test (PLT) field campaign took placed in spring 2017, carrying out the mission to test and validate the instruments onboard the GOES-R after its launch in November 2016 and before it was moved to operational GOES-East position to replace GOES-13 in December 2017. The instruments being tested include the Advanced Baseline Imager (ABI) and the Geostationary Lightning Mapper (GLM) that would be the world’s first operational lightning mapper in geostationary orbit (~36,000km above ground). The GOES-R ABI has been expanded to 16 bands (from 6) with finer spectral and spatial resolution (4x) and faster scanning (5x) than the previous GOES for imaging Earth’s weather, oceans and environment. Validation of the ABI took place in the West CONUS and mostly in the early days of the field campaign, whereas validation for the GLM took place in the Great Plains, SE Coast states and over the oceans during later part of the campaign, well into the mid-late spring.</p>
        <p>The FCX exploration for the GOES-R PLT focuses on the assessment of GLM performance and the thunderstorm events that were associated with the lightning activities observed by the organized efforts of ground networks, aircraft, and satellites measurements during this springtime field campaign.</p>
        <p>Ten parameters retrieved from eight instrumental measurements for the GOES-R PLT are visualized by the FCX (Table 1). The brightness temperature (TB) imagery from the ABI IR channel 13 serves as the narrator of the frontal storms’ evolution and outlines the cloud extent with the highlighted areas of low TB indicating the convection cores. Layers of lightning observations, as well as cloud properties from the cloud radar (CRS) and lidar (CPL), are displayed on top of the BT imagery, construing the picture of various characteristics of a thunderstorm in its lifecycle. In addition to GLM, three other instruments (LIS aboard the low-earth orbit ISS @ 408 km altitude, FEGS on the NASA ER-2 aircraft, and LMA) were detecting lightning signals (optical energy or RF radiation) and one instrument (LIP, also on ER-2) was detecting the ambient atmospheric electricity variation. They were designed for the cross-examination of GLM detection efficiency.</p>
        <p>Table 1. Parameters visualized in FCX for the GOES-R PLT:</p> 
    </div>
      <div className={styles.right_pane}>Temp Right Pane</div>
    </Layout>
  )
}