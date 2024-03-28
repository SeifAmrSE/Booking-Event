import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <main className=" container ">
      <section className="  bg-home  bg-cover bg-no-repeat   ">
        <div className="font-minicheffont w-fit text-white text-4xl leading-none sm:text-5xl md:text-5xl font-normal  ml-4 pt-2 sm:ml-8 sm:pt-4 lg:text-6xl xl:text-7xl xl:ml-16">
          <p>MINI</p>
          <p>CHEF</p>
        </div>

        <div className="font-minicheffont  text-center text-white font-normal text-7xl mt-[0px] leading-none sm:text-8xl sm:mt-[-10px] md:text-9xl lg:text-[180px] lg:mt-[-10px] xl:text-[210px] xl:mt-[-50px] ">
          <p>WE PREP</p>

          <p>YOU CHEF</p>
        </div>

        <Link to={"/booking"}>
          <button
            style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.7)" }}
            type="button"
            className="border-white py-[8px]  bg-white text-black font-bold text-xl px-[30px] mt-[5px] rounded-[30px]  absolute left-[50%] translate-x-[-50%]  sm:text-[20px] sm:py-[10px] sm:mt-[0px] md:text-[20px]   lg:text-[25px] lg:mt-[40px] lg:py-[8px] xl:text-[25px] xl:mt-[30px] "
          >
            Book Now
          </button>
        </Link>

        <h2 className="font-minicheffont text-white text-center font-medium text-5xl pt-[120px] pb-[30px] sm:pt-[85px] sm:pb-[30px] sm:text-5xl md:text-6xl md:pt-[130px] md:pb-[15px] lg:text-7xl lg:pt-[200px] lg:pb-[40px] xl:text-8xl xl:pt-[220px]">
          ABOUT US
        </h2>

        <div className=" text-white font-semibold text-center text-xs  sm:text-xl md:text-2xl lg:text-3xl  ">
          <p>Welcome To MiniChef</p>

          <p>Where Little Hands Create Big Memories!</p>

          <p className="  pt-[20px] pb-[20px] w-[80%]  sm:w-[90%] m-auto lg:pt-[40px] lg:w-[80%] xl:pt-[50px] xl:w-[85%]">
            At MiniChef, we believe that the joy of cooking is for everyone,
            regardless of age. Our mission is to ignite a passion for food in
            the hearts of the youngest culinary enthusiasts. MiniChef is not
            just a cooking workshop; it's a delightful journey where kids
            discover the magic of the kitchen through hands-on, interactive, and
            delicious experiences.
          </p>
        </div>

        <h2 className="font-minicheffont font-medium text-white text-center text-5xl pt-[50px] sm:text-6xl sm:pt-[70px] md:text-7xl md:pt-[80px] lg:text-7xl lg:pt-[170px] xl:text-8xl xl:pt-[230px]  ">
          GALLERY
        </h2>

        <div className=" font-semibold text-2xl md:text-3xl lg:text-3xl  ">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={require("../../images/Scroll Group 5.png")}
                  className="w-[90%] m-auto sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[80%]"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../images/Scroll Group 5.png")}
                  className="w-[90%] m-auto sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[80%]"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../images/Scroll Group 5.png")}
                  className="w-[90%] m-auto sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[80%]"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* <Carousel> */}
          {/* <Carousel.Item interval={2000}>
              <div className="  mb-[280px] sm:mb-[250px] xl:mb-[230px]">
                <img
                  src={require("../../images/Scroll Group 5.png")}
                  className="w-[55%] m-auto sm:w-[70%] md:w-[70%] lg:w-[80%]"
                  alt=""
                />
              </div>
            </Carousel.Item> */}

          {/* <Carousel.Item interval={2000}>
              <div className="mb-[280px] sm:mb-[250px] xl:mb-[230px]">
                <img
                  src={require("../../images/Scroll Group 5.png")}
                  className="w-[55%] m-auto sm:w-[70%] md:w-[70%] lg:w-[80%]"
                  alt=""
                />
              </div>
            </Carousel.Item> */}
          {/* </Carousel> */}
        </div>

        <h2 className="text-[#F2919D] font-minicheffont  text-center font-medium text-5xl  sm:text-6xl md:text-7xl md:pt-[0px] lg:text-7xl lg:pt-[0px] xl:text-8xl xl:pt-[50px] ">
          CONTACT
        </h2>

        <div className="flex  flex-wrap justify-center sm:justify-evenly md:justify-evenly lg:justify-evenly xl:justify-evenly text-xl font-bold text-black py-[20px] sm:text-xl md:text-xl lg:py-[50px] lg:text-2xl xl:text-2xl xl:py-[50px]">
          <span>
            <FontAwesomeIcon icon={faLocationDot} /> Cairo, Egypt
          </span>
          <Link
            to="tel:+201221201999"
            className="hover:text-[#F2919D] duration-300 ml-[30px]"
          >
            <FontAwesomeIcon icon={faPhone} /> +201221201999
          </Link>
          <Link
            to="mailto:info@minichef.me"
            className="hover:text-[#F2919D] duration-300 mt-[10px]"
          >
            <FontAwesomeIcon icon={faEnvelope} /> info@minichef.me
          </Link>
        </div>

        <div className="flex justify-center text-5xl text-black  pb-[20px] sm:text-5xl sm:pb-[20px] md:pb-[30px] md:text-5xl lg:pb-[-10px] lg:text-6xl xl:pb-[50px] xl:text-6xl">
          <Link
            className="pr-[30px] hover:text-[#F2919D] duration-300"
            to="https://www.instagram.com/minichef.me"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link
            to="https://www.facebook.com/profile.php?id=61555975833041"
            className="hover:text-[#F2919D] duration-300"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
        </div>

        <p className="text-center  text-white font-bold items-center pb-[5px] sm:pb-[15px] sm:text-xl md:pb-[15px] md:text-2xl lg:text-2xl lg:pt-[125px] lg:pb-[20px] xl:text-3xl xl:py-[25px]">
          &copy; 2024 All Rights Reserved.
        </p>
      </section>
    </main>
  );
}

export default Header;
