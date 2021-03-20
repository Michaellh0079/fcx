import React from 'react';
import Layout from '../components/layout';
import GeneralMouseActionComponent from '../components/mouse-general';
import styles from '../styles/Home.module.css'

export default function MouseGeneral() {
  return (
    <Layout>
      <GeneralMouseActionComponent/>
      <div className={styles.right_pane}>Temp Right Pane</div>
    </Layout>    
  )
}