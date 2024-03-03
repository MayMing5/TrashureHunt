import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame.module.css";

const Frame: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.logo}>
        <div className={styles.logoChild} />
        <div className={styles.logoItem} />
        <img className={styles.logoInner} alt="" src="/rectangle-18.svg" />
        <div className={styles.rectangleDiv} />
        <div className={styles.logoChild1} />
      </div>
      <div className={styles.frameItem} onClick={onRectangle1Click} />
    </div>
  );
};

export default Frame;
