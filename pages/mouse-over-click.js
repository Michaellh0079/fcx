import React from 'react';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css'

export default function MouseOverClick() {
  return (
    <Layout>
    <div className={styles.center_pane}> 
        <h2>2.3.2 Mouse-Over and Click Triggered InfoBox</h2>
        <p>Two additional mouse functions are utilized in the FCX viewer: Mouse-over and Mouse-Click triggered InfoBox. </p>
        <p>Cesium has a native InfoBox function that can be triggered by mouse actions. We took advantage of this InfoBox function to show information of some datasets in an InfoBox at the upper-right corner of the FCX viewer screen with mouse-click (left click) action during visualization. Those datasets include FEGS, LIP, and LMA. The FEGS and LIPS detects lightning related signals from the aircraft, to provide validation for GLM detection. In the visualization, the FOV of the FEGS shows up whenever lightning is detected at the instance, to show lightning is sensed within the FOV confines.  When left-clicking on an FEGS FOV polygon, an InfoBox will pop up with the (Lon, Lat) coordinate of the FOV’s 4 corners listed in it. The FCX visualizes the electricity vector sensed by the LIP. Left-click on the vector pops up an InfoBox with the (x, y, z) components of the sensed electricity and the (Lon, Lat) location.</p>
        <p>With the stations array, a LMA network is able to locate 3D lightning signals in the VHF frequency within its range. FCX displays the LMA detected lightning in 1-min interval as described in Section 2.1. Based on this implementation, charts of detected lightning spatial variation, temporal evolution, and vertical distribution statistics are made for the minute beforehand. Left-click on any of the LMA lightning will pop up an InfoBox with the aforementioned charts for the minute. The display is instant and does not affect the FCX performance as the charts are pre-made.  (graphics)</p>
        <p>To close an InfoBox, left-click on the “x” on the upper-right corner of the box, or somewhere else. Only one InfoBox can be present at a time. So, an InfoBox does not need to be closed before switching to another for a different FEG, LIP or, LMA instance.</p>
        <p>The Mouse-over function is used for GLM and LIS lightning display (briefly describe eventListener for the mouse-function in frontend code) that are visualized with Cesium’s primitive points. The point size is preset in proportion to the lightning intensity or activity for the detection (at the grid point for GLM). Moving the mouse over any of the points will enable the display its lightning intensity (or activity, depends on which parameter is switched on) at the instance. The display will disappear as the mouse is moved away from the point. (graphics)</p>
        <p>While activating the mouse functions when the display is paused and becomes static may be preferred for easier operation in some cases, it is not required. The mouse functions can be triggered at any time in visualization. </p>
    </div>
      <div className={styles.right_pane}>Temp Right Pane</div>
    </Layout>    
  )
}