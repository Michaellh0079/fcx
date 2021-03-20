import React from 'react';
import Overview from '../components/overview';
import Layout from "../components/layout";
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <Layout>
      <Overview/>
      <div className={styles.right_pane}>Temp Right Pane</div>
    </Layout>
  )
}
