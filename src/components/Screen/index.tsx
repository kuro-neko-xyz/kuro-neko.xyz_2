import styles from "./styles.module.scss";

const Screen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.upperLid}></div>
      <div className={styles.lowerLid}></div>
      <div className={styles.content}></div>
    </div>
  );
};

export default Screen;
