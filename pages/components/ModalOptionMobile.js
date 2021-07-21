import Link from 'next/link';
import Modal from 'react-bootstrap/Modal';
import Figure from 'react-bootstrap/Figure';
import styles from './styles/ModalOptionMobile.module.css';
import { CLOSEM } from './icons';

const ModalOptionMobile = ({ show, setShow, fullscreen, clickId }) => {
  const { name, description, image, url } = clickId;
  return (
    <Modal className={styles.contents} show={show} fullscreen={fullscreen}>
      <Modal.Header className={styles.head}>
        <Modal.Title>
          <Figure className={styles.figureImg}>
            <Figure.Image className={styles.img} alt="171x180" src={image} />
          </Figure>
        </Modal.Title>
        <div className={styles.close} onClick={() => setShow(false)}>
          <CLOSEM />
        </div>
      </Modal.Header>

      <Modal.Body>
        <div className={styles.body}>
          <div className={styles.titleHead}>{name}</div>
          {description}
        </div>
      </Modal.Body>
      {url && <footer className={styles.footer}>홈페이지 주소 : {url}</footer>}
    </Modal>
    // <Modal
    //   className={styles.contents}
    //   show={show}
    //   fullscreen={fullscreen}
    //   // size="xl"
    //   onHide={() => setShow(false)}
    // >
    //   <Modal.Body style={titleStyle} closeButton>
    //     <section className={styles.contents}>
    //       <div className={styles.img}>
    //         <Figure className={styles.figureImg}>
    //           <Figure.Image className={styles.img} alt="171x180" src={image} />
    //         </Figure>
    //         {/* <img src={image} alt="img" /> */}
    //       </div>
    //       <div className={styles.body}>
    //         <header className="title">
    //           <Modal.Header closeButton>
    //             <Modal.Title>{name}</Modal.Title>
    //           </Modal.Header>
    //         </header>
    //         <body>{description}</body>
    //         <footer className={styles.footer}>홈페이지 주소 : {url}</footer>
    //       </div>
    //     </section>
    //   </Modal.Body>
    // </Modal>
  );
};

export default ModalOptionMobile;
