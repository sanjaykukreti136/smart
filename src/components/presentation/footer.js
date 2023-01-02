import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./footer.module.css";

const footer = () => {
  return (
    <footer className={styles.footer}>
      <div>made by Sanjay</div>
      <div style={{ marginTop: "2rem" }}>
        <Link to="https://github.com/sanjaykukreti136">
          <img src="https://img.icons8.com/material-outlined/50/000000/github.png" />
        </Link>
        <Link to="mailto:sanjaykukreti900@gmail.com">
          <img src="https://img.icons8.com/material-rounded/48/000000/gmail-login.png" />
        </Link>
      </div>
    </footer>
  );
};
export default footer;
