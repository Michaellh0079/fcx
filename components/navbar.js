// components/NavBar.js
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const navBarStyle = {
    backgroundColor: "red",
    color: "white",
  };
  
  const NavBar = (parameters) => (
    <div className="NavBar">
      <div className={styles.left_pane}>
        <h3>
          <Link href="/">1. Overview</Link>
        </h3>
          <div className={styles.subsection_nav_link }>
          <ul>
            <li> <Link href="/"> 1.1 FCX – Field Campaign Explorer</Link> </li> 
            <li> <Link href="/gose-r"> 1.2 GOES-R PLT </Link> </li>
          </ul>
          </div>
        <h3>
          <Link href="/data-viewer">2. FCX Functionalities</Link>
        </h3>
        <div className={styles.subsection_nav_link}>
          <h4>
            <Link href="/data-viewer">2.1 General Visualization – Web Delivery</Link>
          </h4>
          <div className={styles.subsection_nav_link}>
          <ul>
              <li> <Link href="/data-viewer">2.1.1 Data Viewer</Link> </li>
              <li> <Link href="/color-schemes">2.1.2 Color Schemes</Link> </li>
              <li> <Link href="/dashboard">2.1.3 Dashboard (Timeline)</Link> </li>
          </ul>    
          </div>
          <h4>
            <Link href="/menu-bar">2.2 Menu Bar (graphics may need re-arrangement)</Link>
          </h4>          
          <h4>
            <Link href="/mouse-general">2.3 Mouse Functions</Link>
          </h4>
          <div className={styles.subsection_nav_link}>
          <ul>
            <li> <Link href="/mouse-general">2.3.1 General Mouse Actions</Link> </li>
            <li> <Link href="/mouse-over-click">2.3.2 Mouse-Over and Click Triggered InfoBox</Link> </li>
          </ul>
          </div>
          <h4>
            <Link href="/data-subsetting">2.4 Data Subsetting and Download (in progress)</Link>
          </h4>  
        </div>
        <h3><Link href="/glm-detection">3. FCX Use Cases</Link></h3>
        <div className={styles.subsection_nav_link}>
          <ul>
            <li><p><Link href="/glm-detection">3.1 Assessment of GLM Detection</Link></p></li>            
            <li><p><Link href="/glm-lo">3.2 Lightning Observations by the GLM</Link></p></li>    
            <li><p><Link href="/storm-characteristics">3.3 Storm Characteristics – Lightning, Microphysics, Dynamics</Link></p></li>    
            <li><p><Link href="/subset-request">3.4 Request a Subset</Link></p></li>    
          </ul>
        </div>
        <h3>4. Open Source Code</h3>
          <h4>4.1 Architecture In Cloud</h4>
          <h4>4.2 The Frontend Code</h4>
          <h4>4.3 The Backend Code</h4>
          <div className={styles.subsection_nav_link}>
            <p>4.3.1 Utility code</p>
            <p>4.3.2 ABI IR imagery (BT)</p>
            <p>4.3.3 FEGS and LIP</p>
            <p>4.3.4 GLM and LIS</p>
            <p>4.3.5 CRS (reflectivity and Doppler velocity) and CPL backscattering</p>
            <p>4.3.6 LMA</p>
          </div>
      </div>  
    </div>
  );
  
  export default NavBar;