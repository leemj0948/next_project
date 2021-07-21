import Link from 'next/link';
import Modal from 'react-bootstrap/Modal';
import Figure from 'react-bootstrap/Figure';
import styles from './styles/ModalOption.module.css';
import { CLOSE } from './icons';

const ModalOption = ({ show, setShow, fullscreen, clickId }) => {
  const { name, description, image, url } = clickId;
  return (
    <div className={styles.frame}>
      {/* <Modal show={show} fullscreen={fullscreen} className={styles.cotents}> */}
      <Modal.Body>
        <section className={styles.modalstyle}>
          <div className={styles.close} onClick={() => setShow(false)}>
            <CLOSE />
          </div>
          <div className={styles.img}>
            <Figure className={styles.figure}>
              <Figure.Image alt="171x180" src={image} className={styles.img} />
            </Figure>
          </div>
          <div className="body">
            <header className="title">
              <Modal.Header>
                <Modal.Title className={styles.header}>{name}</Modal.Title>
              </Modal.Header>
            </header>
            <body className={styles.body}>{description}</body>
            {url && (
              <footer className={styles.footer}>홈페이지 주소 : {url}</footer>
            )}
          </div>
        </section>
      </Modal.Body>
      {/* </Modal> */}
    </div>
  );
};

export default ModalOption;
