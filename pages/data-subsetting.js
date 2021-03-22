import React from 'react';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function DataSubsetting() {
  return (
    <Layout>
      <div className={styles.center_pane}> 
        <h2>2.4 Data Subsetting and Download (in progress)</h2>
        <p>Advanced analyses may be desired to farther the research after a case exploration. Data subsetting provides the function to gather subsectional data of interest to attain this goal for the next step in research.  Click on the “Subset Start” button on the lower-right corner of the FCX screen would initiate the subsetting service at the current view timeframe of an interested instance as the starting point of the subset. Click again on the button, now labeled as “Subset End”, at some view time later to get the end time of the subset. The second clicking will set off the subsetting in the AWS Lambda to gather sub-selection of datasets from satellites and ground networks and subsections of aircraft observations for the intended instance. These data will be placed in a temporary public sub-folder in a GHRC AWS S3 bucket, designated specifically for this subsetting for the user to download. The subset will be kept for, say a week, before deletion.   </p>
        <p>The data subsets are in their original formats so that they can ingested or processed in the same code as for the original datasets.</p>
      </div>
      <div className={styles.right_pane}>Temp Right Pane</div>
    </Layout>
  )
}