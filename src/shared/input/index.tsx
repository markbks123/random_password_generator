import React, { useRef, useState, useEffect } from "react";
import styles from "./input.module.css";
import useInput from "./index.hooks";
import { inputProps } from "./input.types";
import { FaRegCopy } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
const MyTextInput: React.FC<inputProps> = ({ password }) => {
  const {
    value,
    handleChange: setValue,
    inputRef,
    handleCopy,
  } = useInput({ password });

  return (
    <div className={styles.input_container}>
      <input
        ref={inputRef}
        type="text"
        value={password}
        onChange={() => setValue(password)}
        className={styles.my_input}
        disabled={true}
      />
    
        <FaRegCopy       className={styles.copy_icon}  onClick={handleCopy}/>

    </div>
  );
};

export default MyTextInput;
