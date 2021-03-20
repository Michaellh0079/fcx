import React from 'react';
import Layout from '../components/layout';
import MenuComponent from '../components/menu-bar';
import styles from '../styles/Home.module.css'

export default function MenuBar() {
  return (
    <Layout>
      <MenuComponent/>
      <div className={styles.right_pane}>Temp Right Pane</div>
    </Layout>    
  )
}