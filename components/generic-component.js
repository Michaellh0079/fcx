import styles from '../styles/Home.module.css'

const GenericComponent = ({ children }) => (
    <div className={styles.center_pane}> 
        {children}
    </div>)
 
 export default GenericComponent;