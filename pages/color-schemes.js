import React from 'react';
import ColorSchemeComponent from '../components/color-schemes';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Goser() {
  return (
    <Layout>
      <ColorSchemeComponent/>
      <div className={styles.right_pane}>Temp Right Pane</div>
    </Layout>
  )
}