import React from 'react';
import GlmDetectionComponent from '../components/glm-detection';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Goser() {
  return (
    <Layout>
      <GlmDetectionComponent/>
      <div className={styles.right_pane}>Temp Right Pane</div>
    </Layout>
  )
}