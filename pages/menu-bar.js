import React from 'react';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css'

export default function MenuBar() {
  return (
    <Layout>
    <div className={styles.center_pane}> 
        <h2>2.2 Menu Bar</h2>
        <p>The menu bar is installed to assist FCX users to navigate the display, field campaign events, datasets, and related information about the field campaign and the datasets.  It has two parts: the upper part for the optional external links selection; the bottom part for display selection and campaign data links and download. The default is on Campaign with the display selector for the parameters, shown in Fig. 1. Users can select or switch the display of parameters listed in the selector, to examine the physical variables and their interaction (examples see illustration in 2.1) by clicking on/off a parameter’s button.  </p>
        <p>The display can be switched to the campaign event selector (Fig 1). From there, users can select the field campaign cases. Users can switch on Data (-)  for campaign dataset link and direct download of the datasets.</p>
    </div>
      <div className={styles.right_pane}>Temp Right Pane</div>
    </Layout>    
  )
}