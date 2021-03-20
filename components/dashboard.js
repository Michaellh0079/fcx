import styles from '../styles/Home.module.css'

const DashboardComponent = () => (
    <div className={styles.center_pane}> 
        <h2>2.1.3 Dashboard (Timeline)</h2>
        <p>The Timeline tabulates the GOES-R PLT datasets in the field campaign’s timeframe, if clicked on will switch the FCX screen to the dashboard for this extensive table. It shows each dataset’s starting and ending times.</p>
    </div>)
 
 export default DashboardComponent;