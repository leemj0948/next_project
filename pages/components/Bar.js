import styles from './styles/Bar.module.css';

const Bar = (props) => {
  const { text } = props;
  return (
    <>
      <div className={styles.mainText}>{text}</div>
      <div className={styles.bars}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </>
  );
};

export default Bar;
