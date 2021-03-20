import React from 'react';
import DataSubsettingComponent from '../components/data-subsetting';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function DataSubsetting() {
  return (
    <Layout>
      <DataSubsettingComponent/>
      <div className={styles.right_pane}>Temp Right Pane</div>
    </Layout>
  )
}