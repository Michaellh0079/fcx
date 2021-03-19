import Head from 'next/head'
import React from 'react';
import Footer from '../components/footer';
import NavBar from '../components/navbar';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
     <NavBar/>        
      <div className={styles.center_pane}>
        <h2>Center Pane</h2>
        <p>HeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHey</p>
      </div>
      <div className={styles.right_pane}>
        <h2>Right Pane</h2>
      </div>
    <Footer/>
    </div>
  
  )
}
