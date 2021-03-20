import React from 'react';
import DashboardComponent from '../components/dashboard';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Dashboard() {
  return (
    <Layout>
      <DashboardComponent/>
      <div className={styles.right_pane}>Temp Right Pane</div>
    </Layout>
  )
}