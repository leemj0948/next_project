import { FACEBOOK } from './icons';
import { INSTARGRAM } from './icons';
import Image from 'next/image';
import styles from './styles/Footer.module.css';

const Header = () => {
  return (
    <footer className="form">
      <div className={styles.line}></div>
      <div className={styles.links}>
        <Image
          className="img"
          src="/c-footer-logo.svg"
          alt="logo"
          width={125}
          height={48}
        />
        <div className="sns">
          <FACEBOOK />
          <INSTARGRAM />
        </div>
      </div>
      <div className={styles.title}>AWESOME FOOD STORE</div>
      <div className={styles.context}>
        <p>코오롱인더스트리(주)FnC부문 커먼그라운드</p>
        <p>대표이사: 유석진</p>
        <p>법인등록번호: 321-85-00020</p>
        <p>서울특별시 강남구 삼성로 518 (삼성동)</p>
      </div>
      <div className={styles.copy}>@ 2020 이명진</div>
      <style jsx>{`
        p {
          display: inline-block;
          margin: 0.3rem 0;
          color: #868e96;
          font-size: 0.8rem;
        }
        p::after {
          display: inline-block;
          margin: -0.1rem 0.5rem;
          width: 1px;
          height: 0.8rem;
          background-color: #dee2e6;
          content: '';
        }
      `}</style>
    </footer>
  );
};

export default Header;
