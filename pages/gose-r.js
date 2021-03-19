import React from 'react';
import Footer from '../components/footer';
import NavBar from '../components/navbar';
import styles from '../styles/Home.module.css'
import GoserComponent from '../components/gose-r';

export default function Goser() {
  return (
    <div className={styles.grid_container}>
      <NavBar/> 
      <div className={styles.center_pane}>
        <GoserComponent/>
      </div>
      <div className={styles.right_pane}>
        <h2>Right Pane</h2>
      </div>
      <Footer/>
    </div> 
  )
}