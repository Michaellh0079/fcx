import React from 'react';
import Layout from "../components/layout";
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <Layout>
    <div className={styles.center_pane}> 
      <h1>1. Overview</h1>
      <h2>1.1 FCX – Field Campaign Explorer</h2>
      <p>The NASA Global Hydrology Resource Center (GHRC) Distributed Active Archive Center (DAAC) is a joint effort between NASA and the University of Alabama in Huntsville (UAH). GHRC DACC carries the mission to archive NASA Earth Science observations and enable their free access to end-users with extensive auxiliary documentation of published datasets. GHRC DAAC continues to seek new ways and collaboration with other NASA DAACs to provide data services for the end users.</p>
      <p>The Field Campaign eXplorer (FCX) is developed at the GHRC to address data exploration needs in portraying the interactive nature of multiple datasets that are obtained in a concerted field campaign, particularly observations from aircraft. Instruments deployed on the campaign aircraft are usually of the highest accuracy and resolution or at the cutting edge of the scientific surveillance technique.  They ride the aircraft to weave through target events to provide in-situ or near in-situ observations in concert with the ground-based and satellite measurements. Many of these airborne observations provide instantaneous profiles of the atmospheric parameters that are key to reconstructing the event scenario.  Some of the aircraft measurements are stipulated for pre- or post-launch validation of innovative instruments on a new satellite payload. FCX seamlessly integrates these vector, point, 2-dimensional, and 3-dimensional datasets from the concerted observations to provide a time-dynamic three-dimensional visualization with user-controlled display, in turn, to achieve the goal of exploring observed events tied to the field campaign’s objectives or research interest to facilitate research for the end users.</p>
      <p>The FCX has been built to explore the diverse multi-stream coincident datasets through several field campaigns whose data are managed and archived at GHRC. The FCX also utilizes the framework developed at the GHRC that exploits cloud-native technologies to ingest, catalogue, archive NASA Earth Science multi-instrument datasets to in alignment with the NASA Earth Science Data Systems program goal of migrating to the cloud to support large missions. The GHRC framework uses many serverless technologies from the Amazon Web Services (AWS) platform to make the datasets sharable and keep the cost of the cloud-based services manageable.</p>
      <p>Ultimately, FCX is a web-based, cloud-native and open-source system that visualizes multiple datasets in time-dynamic 3-dimensional display with supplemental data analysis.   While the web-based feature delivers visualization without requirement of a graphical software and being cloud-native allows for sharing of the data and visualization, the open-source nature lets users of FCX develop their own extensions for both visualizations and analyses. These three aspects of the FCX and their implementation are deliberated in Chapter 4 of this documentation. The components of the explorer and the visualization designs are described in Chapter 2. Use cases are given to show end users how to use the explorer to examine datasets of interest and how to navigate the explorer functions in Chapter 3. A side note: in this documentation, “parameters” and “physical variables” are used exchangeably. </p>
    </div>
      <div className={styles.right_pane}>Temp Right Pane</div>
    </Layout>
  )
}
