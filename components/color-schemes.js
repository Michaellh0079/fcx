import styles from '../styles/Home.module.css'

const ColorSchemeComponent = () => (
    <div className={styles.center_pane}> 
        <h2>2.1.2 Color Schemes</h2>
        <p>Visualization relies heavily on colors to express contents in display. It is inevitable some colors will be overlapped with multiple datasets display, especially when some datasets require nearly full color spectrum to represent the variation range of the values. To alleviate the color overlapping issue, colors for each dataset in FCX are carefully designed. Furthermore, it achieves a better data exploration experience when pairing with the use of display selector to switch on/off a parameter (dataset). </p>
        <p>The color schemes used in the FCX visualization for the parameters are:</p>
        <ul>
            <li>CRS reflectivity, using the color scheme commonly used for W-band radar reflectivity in published literature, covers the range of -40 to 40 dBZ:</li>
            <li> </li>
            <li>CBS Doppler velocity: </li>
            <li>CPL Total backscattering (1065 nm): </li>
            <li>ABI IR TB imagery, highlighting the low end temperature with purple shed:</li>
            <li>FEGS FOV confines in lemon-green rgba (): </li>
            <li>LIP electric vector in red rgba (): </li>
            <li>GLM lightning activity in yellow rgba ():</li>
            <li>GLM lightning intensity in amber rgba ():</li>
            <li>ISS-LIS lightning intensity in olive-green rgba():</li>
            <li> LMA color-coded with altitude:</li>
        </ul>
    </div>)
 
 export default ColorSchemeComponent;