import React from 'react';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Goser() {
  return (
    <Layout>
    <div className={styles.center_pane}> 
        <h2>3.2 Lightning Observations by the GLM</h2>
        <p>Examined parameters: ABI brightness temperature, GLM lightning intensity (or activity)</p>
        <p>Being the first space-borne remote-sensing instrument that monitors lightning continuously both in time and space for larger than continental scale coverage (the Americas and adjacent waters), the GLM can observe lightning activity associated with a storm or frontal system that evolves across a region or continent. The evolution can hardly be captured by the low-earth orbiting ISS-LIS that stares at a same spot for ~90 seconds a day, and easily moves beyond the detection scope of a ground lightning network whose effective detection radius is typically within 150-200 km. </p>
        <p>The use case aims at the storm that was embedded in the Northern frontal system of May 17, 20017 over the Northern Central Plains in the evening and continued to evolve and migrate to north of the Great Lakes into the night. The entire evolution, from incipient stage at 02-03 UTC, peak development at 04:30 UTC, to dissipating phase after 07 UTC is visualized by the FCX.</p>
        <ol>
          <li>set time-multiplier (x60 sets 60 seconds of display in 1 second) and proper zoom ratio of the screen, replay the display to show the evolution in condensed time</li>
          <li>Examine the lightning location in relation to the storm cell connoted by the ABI IR channel brightness temperature, in varying storm evolution stages</li>
          <li>Variation in location of high lightning intensity</li>
          <li>Elusive lightning incidence minute-by-minute, as shown in the Fig. 4, can be examined with the FCX</li>
        </ol>
    </div>
      <div className={styles.right_pane}>Temp Right Pane</div>
    </Layout>
  )
}