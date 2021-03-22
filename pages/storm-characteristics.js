import React from 'react';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function StormCharacteristics() {
  return (
    <Layout>
    <div className={styles.center_pane}> 
        <h2>3.3 Storm Characteristics – Lightning, Microphysics, Dynamics</h2>
        <p>Examined parameters: ABI brightness temperature, CRS reflectivity (optional: Doppler velocity), CPL backscattering, LMA lightning </p>
        <p>One of the weather systems surveyed during the GOES_R PLT was a spring frontal system with residents of thunderstorm clusters sweeping across the Southern Central Plains (May 17, 2017). The storm cells were evolving and travelling with the system.  It is a good opportunity to compare the airborne measurements with those from the ground network for different storm characteristics. First, zoom in to a proper scope for an event of interest. It may be helpful to know that the trailing length for the CRS display is ~ 72 km if setting linger = 360s (see Section 4.2 Frontend Code). This offers a good perspective of the spatial scale. A nearly horizontal view gives the lightning (LMA observation) distribution’s spatial relation to the convection cell (IR channel BT).  </p>
        <p>The color-coded LMA lightning indicates where lightning was most active in vertical. Change the view to nearly vertical to examine how lightning incidences line up with the cloud hydrometers identified by the cloud radar. While the CRS is quite sensitive to the small ice cloud particle, the cloud lidar (CPL) gave the definite cloud top. </p>
        <p>Click on the LMA lightning, charts of the lightning distribution and vertical histogram for the one-minute time period will appear in the InfoBox.</p>
    </div>
      <div className={styles.right_pane}>Temp Right Pane</div>
    </Layout>
  )
}