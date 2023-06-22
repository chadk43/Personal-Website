import React from "react";
import classes from "./footer.module.css";
import { Image } from "react-bootstrap";
import github from "./github-mark.png";
const footer = () => {
  return (
    <footer className={classes["main-footer"]}>
      <ul className={classes["ul li footer"]}>
        <li>Chad Koivuneva © 2023 </li>
        <li>
          <a href="https://github.com/chadk43">
            <Image src={github} className={classes["img-circle"]} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default footer;
