import React from 'react';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Goser() {
  return (
    <Layout>
    <div className={styles.center_pane}> 
        <h1>2.1 General Visualization – Web Delivery</h1>
        <h2>2.1.1 Data Viewer (in construction)</h2>
        <p>The FCX viewer uses the Cesium 3D geospatial platform to deliver visualization for field campaign data with geolocation and temporal components in a web-browser to end users. Depending on the datasets, Cesium’s 3D point cloud, primitive geometry objects, or high level dynamic CZML is employed to create the visualization for an appropriate representation of the data (physical variables) and illustration of the variables interaction.</p>
        <p>Temporal display interval is a major consideration point for the FCX visualization design. For dynamic display, temporal resolution of lightning detection generally falls in the milliseconds range, which is great. But hard to catch for visualization. Keep the time-dynamic nature of the datasets. The current design for the visualization GLM resolution (grid) ~ 8 km, ISS-LIS is 4km at nadir. </p>
        <ul>
            <li>Context of designs and context among datasets</li>
            <li>Display time interval</li>
            <li>CRS and CPL trailing display</li>
            <li>FEGS/LIP, GLM/LIS (intensity/activity, resolution)</li>
            <li>Spatial resolutions of datasets (for cross examination or GLM assessment)</li>
            <li>Color schemes, color-coded 3D LMA</li>
            <li>Clock control for fast/slow forward or backward, for repeated examination</li>
            <li>Zoom in/out. Serving the purpose of visualization for exploration.</li>
        </ul>
        <p>The FCX strings together the dynamic display of various variables of 1-, 2- or 3-dimension, based on their geolocation and timeline. In this way, the FCX allows examination of the same variable from different instrumental observations. For instance, the Global Precipitation Measurement (GPM) satellite retrieved precipitation can be compared to that measured at surface stations at any time in display for the Olympex Field Campaign; or compared lightning detected by the GLM on the GOES-R to that by the LIS onboard the ISS, the FEGS (GLM simulator) onboard the ER-2 aircraft, or the ground LMA networks for the GOES-R PLT. The FCX also allows cross-examining different parameters in an event to illustrate different aspects of a time-dynamic system. For example, by visualizing radar measurements (reflectivity, Doppler velocity, depolarization, if available) and lightning observation in the context of an observed thunderstorm, the FCX enables the exploration of the dynamics, microphysics, lightning characteristics of the storm system.</p>
      </div>
    <div className={styles.right_pane}>Temp Right Pane</div>
    </Layout>
  )
}