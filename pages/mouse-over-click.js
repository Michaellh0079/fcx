import React from 'react';
import Layout from '../components/layout';
import MouseOverClickComponent from '../components/mouse-over-click';
import styles from '../styles/Home.module.css'

export default function MouseOverClick() {
  return (
    <Layout>
      <MouseOverClickComponent/>
      <div className={styles.right_pane}>Temp Right Pane</div>
    </Layout>    
  )
}