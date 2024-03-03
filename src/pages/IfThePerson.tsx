import { FunctionComponent } from "react";
import styles from "./IfThePerson.module.css";

const IfThePerson: FunctionComponent = () => {
  return (
    <div className={styles.ifThePerson}>
      if the person clicks the kg widget, then it leads to a calculator page
      where they can log the weight using the calculator or just putting in the
      number
    </div>
  );
};

export default IfThePerson;
