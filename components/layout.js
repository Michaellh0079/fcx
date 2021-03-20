
 // components/Layout.js
 import Navbar from "./navbar";
 import styles from '../styles/Home.module.css'
 import Footer from "./footer"
 
 const Layout = ({ children }) => {
   return (
     <div className={styles.grid_container}>
       <Navbar />
       {children}
       <Footer/>
     </div>
   );
 };

 export default Layout;