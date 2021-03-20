import React from 'react';
import Layout from '../components/layout';
import Overview from '../components/overview';

export default function Overview() {
  return (
    <Layout>
      <Overview/>
      <div className={styles.right_pane}>Temp Right Pane</div>
    </Layout>    
  )
}