import React from "react";

import { Link } from "react-router-dom";

function OrderDone() {
  return (
    <main
      style={{ boxShadow: "8px 8px 5px rgba(0,0,0,0.2)" }}
      className="  absolute  top-[50%] left-[50%] 
  translate-x-[-50%] translate-y-[-50%] lg:top-[35%] xl:top-[28%] "
    >
      <div
        className="  bg-white text-black font-extrabold w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]
        md:w-[600px] md:h-[500px] xl:w-[700px]"
      >
        <div
          className="text-black text-center w-fit text-base pt-[80px] ml-[90px] sm:text-3xl sm:pt-[125px]
        sm:ml-[130px] md:text-4xl md:ml-[150px] xl:ml-[190px] "
        >
          <p>WE GOT YOUR ORDER, </p>
          <p>WE WILL CONTACT YOU </p>
          <p>WITHIN 24 HOURS</p>
        </div>

        <img
          className="w-[30%] mt-[-80px] sm:mt-[-120px] md:mt-[-130px] xl:mt-[-150px]"
          src={require("../../images/element 1.png")}
          alt=""
        />

        <Link to="/home">
          <button
            className="font-bold text-white text-xs ml-[90px] bg-[#F2919D] rounded-[30px] px-[8px] py-[8px]
           mt-[30px] sm:ml-[160px] sm:text-base md:ml-[220px] xl:ml-[270px] "
          >
            Back to home page
          </button>
        </Link>
      </div>
    </main>
  );
}

export default OrderDone;
