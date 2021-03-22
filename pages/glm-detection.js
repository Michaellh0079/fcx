import React from 'react';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Goser() {
  return (
    <Layout>
    <div className={styles.center_pane}> 
      <h2>3.1 Assessment of GLM Detection</h2>
      <p>Examined parameters: ABI brightness temperature, GLM lightning intensity, ISS-LIS lightning intensity, LMA lightning, FEGS lightning detection FOV, LIP atmospheric electric vector, CRS reflectivity (optional)</p>
      <p>One major objective of the GOES-R PLT is to validate the GLM lightning detection and assess the detection efficiency. The validation can be approached by comparing the GLM detection to that of FEGS and LIP as the ER-2 travels through the projected GLM grid. On the other hand, GLM’s detection efficiency can be assessed by the overall matching of its detection to that of FEGS and LIP, and by comparing with renowned total lightning (IC + CG) measurements with wide coverage, such as the low-orbiting ISS-LIS satellite lightning detection or the ground network LMA detection, to provide ample instances. The ISS-LIS has a detection efficiency of 70-90% depending on time of day and a swath width of 650 km. In general, the LMAs have a detection efficiency of (95, 90, 80) % within (100, 150, 200) km radius of a network. </p>
      <p>Both types of evaluations are visualized by and can be explored with the FCX. The screenshot shown in Fig. 3 gives an example how FCX can be used to explore.  In display selector, if not already turned on, switch on display for the GLM (intensity or activity), ISS-LIS, FEGS, LIP, LMA, and CRS reflectivity. Setting clock to interested time at preferred display speed, say before the ISS overpass. Freeze the display at any moment by “pausing” the clock. (need graphics of the Display Selector, and Clock). Set proper zoom ratio with the mouse wheel and try various viewing angle to examine the scene with holding the left-click down and moving the mouse around.  </p>
    </div>
      <div className={styles.right_pane}>Temp Right Pane</div>
    </Layout>
  )
}