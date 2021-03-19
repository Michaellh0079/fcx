import React from 'react';
import Footer from '../components/footer';
import NavBar from '../components/navbar';
import Overview from '../components/overview';
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.grid_container}>
      <NavBar/> 
      <div className={styles.center_pane}>
        <Overview/>
      </div>
      <div className={styles.right_pane}>
        <h2>Right Pane</h2>
      </div>
      <Footer/>
    </div> 
  )
}
