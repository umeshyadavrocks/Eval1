import styles from "./Button.module.css";
import { useState } from "react";

function Button({ title, onClick, disabled, id }) {
  
  return (
    
      <button  id={id} disabled={disabled} data-testid="button-component" className={styles.button} onClick={onClick} >
      {title}
    </button>
  );
}

export default Button;