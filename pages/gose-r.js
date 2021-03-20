import React from 'react';
import GoserComponent from '../components/gose-r';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Goser() {
  return (
    <Layout>
      <GoserComponent/>
      <div className={styles.right_pane}>Temp Right Pane</div>
    </Layout>
  )
}