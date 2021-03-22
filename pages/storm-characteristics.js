import React from 'react';
import StormCharacteristicsComponent from '../components/storm-characteristics';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function StormCharacteristics() {
  return (
    <Layout>
      <StormCharacteristicsComponent/>
      <div className={styles.right_pane}>Temp Right Pane</div>
    </Layout>
  )
}