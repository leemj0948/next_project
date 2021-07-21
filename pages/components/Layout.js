import Header from './Header';
import Footer from './Footer';
import styles from './styles/Layout.module.css';

const Layout = ({ children }) => (
  <div className={styles.form}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
