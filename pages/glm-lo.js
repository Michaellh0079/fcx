import React from 'react';
import GlmLOComponent from '../components/glm-lo';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Goser() {
  return (
    <Layout>
      <GlmLOComponent/>
      <div className={styles.right_pane}>Temp Right Pane</div>
    </Layout>
  )
}