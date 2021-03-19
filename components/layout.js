// components/Layout.js
import styles from '../styles/Home.module.css'

const Layout = ({ children }) => {
return (
  <div className={styles.grid_container}>
    {children}
  </div>)
}


export default Layout;