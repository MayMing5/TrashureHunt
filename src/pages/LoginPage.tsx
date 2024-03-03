import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";

const LoginPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginPageChild} />
      <div className={styles.loginPageItem} onClick={onRectangle1Click} />
      <b className={styles.logIn}>Log In</b>
      <div className={styles.loginPageInner} onClick={onRectangle2Click} />
      <b className={styles.signUp}>Sign up</b>
      <div className={styles.ellipseDiv} />
      <div className={styles.logo}>
        <div className={styles.logoChild} />
        <div className={styles.logoItem} />
        <div className={styles.logoInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.logoChild1} />
      </div>
    </div>
  );
};

export default LoginPage;
