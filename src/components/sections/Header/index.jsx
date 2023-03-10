import React from "react";
import headerImg from "../../../assets/img/header-background.jpg";
import AddInput from "../../AddInput/index";

const Header = () => {
  return (
    <div className="header-container">
      <div className="content-area">
        <h1 className="logo">
          <span className="emphasized">HSC</span>List
        </h1>
        <p className="logo-description">Make your list great again!</p>
        <AddInput className="add-todo-input" />
      </div>
      <img src={headerImg} alt={"Header image"} className="header-img" />
      <div className="header-overlay"></div>
    </div>
  );
};

export default Header;
