import Layout from './components/Layout';
import Bar from './components/Bar';
import { ErrorIcons } from './components/icons';
import styles from '../styles/Error.module.css';

const Error = () => {
  // const Timer = () => {
  //   setTimeout(GoMain, 5000);
  // };
  // const GoMain = () => {
  //   location.replace('/');
  // };
  // Timer();

  return (
    <Layout>
      <Bar text="ERROR" />
      <div className={styles.message}>
        <ErrorIcons />
        <h1 className={styles.title}>잘못된 페이지 접근입니다!</h1>
        <p className={styles.body}>
          <bold>5초후</bold>에 <span className={styles.option}>STORE</span>{' '}
          페이지로 이동합니다.
        </p>
      </div>
    </Layout>
  );
};

export default Error;
