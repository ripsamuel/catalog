import styles from './GlobalLayout.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import { useGlobalContext } from '../../contexts/GlobalContext/GlobalContext.jsx';
import { useAuthContext } from '../../contexts/Authcontext/Authcontext';

function GlobalLayout({ children }) {
  const { isDesktop, desktopSidebarWidth, currentPage  } = useGlobalContext();
  const { userData, logout } = useAuthContext();

  return (
    <div className={styles.container}>
      <Navbar user_data={userData}/>
      <div style={{width: isDesktop && (
          currentPage!=="" &&
          currentPage!=="myOrders" &&
          currentPage!=="whatsAppCRM" &&
          currentPage!=="inventary" ) ?
            "90%" : "100%",
        marginLeft: isDesktop ? 
          "auto" : undefined,
        marginRight: isDesktop ?
          "auto" : undefined 
        }}
        className={currentPage!==""?styles.mainContent:""}
      >
      {/* <div style={{marginLeft:isDesktop? desktopSidebarWidth : undefined}} className={styles.mainContent}> */}
      {/* <div style={{width: isDesktop? "60%" : undefined, marginLeft: isDesktop? "auto" : undefined, marginRight: isDesktop? "auto" : undefined }} className={styles.mainContent}> */}
        {children}
      </div>
    </div>
  );
}

export default GlobalLayout;