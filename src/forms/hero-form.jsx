import React from "react";
import EmailIcon from "../svg/email";

const HeroForm = () => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="p-relative">
          
        </div>
        <button className="tp-btn tp-btn-hover alt-color-black">
          <span>Set Up Your Wallet</span>
          <b></b>
        </button>
      </form>
    </>
  );
};

export default HeroForm;
