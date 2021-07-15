import Link from 'next/link';
import styles from './styles/Header.module.css';
import Image from 'next/image';
import { MenuBar } from './icons';

const Header = () => {
  let ws = null;
  if (typeof window !== 'undefined') {
    ws = window.screen.width;
  }
  console.log(ws < 750);
  return (
    <section className={styles.form}>
      <h1 className={styles.title}>AWESOME FOOD STORE</h1>
      <div className="moblieMenu">{{ ws } < 750 && <MenuBar />}</div>
      <h2 className={styles.menu}>
        <Link href="/error">
          <a>PLAY</a>
        </Link>
        <Link href="/error">
          <a>SHOP</a>
        </Link>
        <Link href="/about">
          <a>ABOUT</a>
        </Link>
        <Link href="/">
          <a>STORE</a>
        </Link>
      </h2>
      <div className="logo">
        <Image
          className="img"
          src="/logo.png"
          alt="logo"
          width={125}
          height={48}
        />
      </div>
      <style jsx>{`
        a {
          text-decoration: none;
          color: #212529;
          cursor: pointer;
          font-size: 1.2rem;
          font-weight: 900;
        }
        a:visited {
          color: #212529;
        }
      `}</style>
    </section>
  );
};

export default Header;
