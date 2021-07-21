import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import Layout from './components/Layout';
import Bar from './components/Bar';
import Figure from 'react-bootstrap/Figure';
import ModalOptionMobile from './components/ModalOptionMobile';
import axios from 'axios';
import ModalOption from './components/ModalOption';

export default function Home({ data }) {
  let ws = null;
  if (typeof window !== 'undefined') {
    ws = window.screen.width;
  }
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [clickId, setClickId] = useState('');
  function handleShow(id) {
    setClickId(data[id - 1]);
    setFullscreen('sm-down');
    setShow(true);
  }

  return (
    <Layout>
      <Bar text="STORE" />

      <div className={styles.container}>
        <div className={styles.listTitle}>STORE</div>
        <div className={styles.lists}>
          {data.map((data) => {
            const { id, thumb } = data;
            return (
              <Figure key={id} className={styles.figureImg}>
                <Figure.Image
                  className={styles.img}
                  alt="171x180"
                  src={thumb}
                  onClick={() => handleShow(id)}
                />
              </Figure>
            );
          })}

          {show && ws < 750 && (
            <ModalOptionMobile
              show={show}
              setShow={setShow}
              fullscreen={fullscreen}
              clickId={clickId}
            />
          )}
          {show && ws > 750 && (
            <ModalOption
              show={show}
              setShow={setShow}
              fullscreen={fullscreen}
              clickId={clickId}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

Home.getInitialProps = async function () {
  const res = await axios.get('http://localhost:9000/stores');
  const data = await res.data;

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    data: data,
  };
};
