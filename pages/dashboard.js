import React from 'react';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Dashboard() {
  return (
    <Layout>
      <div className={styles.center_pane}> 
        <h2>2.1.3 Dashboard (Timeline)</h2>
        <p>The Timeline tabulates the GOES-R PLT datasets in the field campaign’s timeframe, if clicked on will switch the FCX screen to the dashboard for this extensive table. It shows each dataset’s starting and ending times.</p>
      </div>
      <div className={styles.right_pane}>Temp Right Pane</div>
    </Layout>
  )
}