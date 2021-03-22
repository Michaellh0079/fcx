import React from 'react';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function StormCharacteristics() {
  return (
    <Layout>
        <div className={styles.center_pane}> 
          <h2>3.4 Request a Subset</h2>
          <p>This part has to wait until the subset button is installed.</p>
        </div>
      <div className={styles.right_pane}>Temp Right Pane</div>
    </Layout>
  )
}