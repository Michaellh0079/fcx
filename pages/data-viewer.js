import React from 'react';
import DataViewerComponent from '../components/data-viewer';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Goser() {
  return (
    <Layout>
      <DataViewerComponent/>
      <div className={styles.right_pane}>Temp Right Pane</div>
    </Layout>
  )
}