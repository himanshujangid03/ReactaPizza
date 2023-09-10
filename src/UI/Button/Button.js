import React from "react";
import classes from "./Button.module.css";
import { motion } from "framer-motion";

const Button = (props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <button
        type={props.type || "button"}
        className={`${classes.button} ${props.className}`}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </motion.div>
  );
};

export default Button;
