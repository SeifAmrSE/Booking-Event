import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Booking() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    date: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit() {
    const existData = JSON.parse(localStorage.getItem("formData")) || [];

    const newData = [...existData, formData];

    localStorage.setItem("formData", JSON.stringify(newData));

    setFormData({ name: "", email: "", phoneNo: "", date: "" });

    navigate("/ordering");
  }

  return (
    <main className="container">
      <section className="flex">
        <img
          className="xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[50%] w-[50%] "
          src={require("../../images/pink pattern.png")}
          alt=""
        />

        <div className="xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[50%] w-[50%] ">
          <h2
            className="font-minicheffont text-[#F2919D] xl:text-5xl xl:mt-[50px] xl:ml-[130px] lg:text-5xl 
           lg:mt-[50px] lg:ml-[65px] md:text-5xl md:mt-[50px] md:ml-[60px] sm:ml-[60px] sm:mt-[50px] sm:text-4xl
           ml-[15px] mt-[15px] text-xl"
          >
            BOOK YOUR EVENT
          </h2>

          <form onSubmit={handleSubmit} className="  pb-[50px]  ">


            <label
              htmlFor="fullName"
              className=" xl:ml-[130px]  xl:mt-[40px] xl:text-2xl  lg:ml-[65px] lg:mt-[40px] lg:text-2xl font-bold 
              md:ml-[60px] md:mt-[30px] md:text-2xl sm:ml-[60px] sm:mt-[20px] sm:text-xl ml-[15px] mt-[10px] text-xs "
            >
              Full name
            </label>{" "}
            <br />
            <input
              style={{ boxShadow: "8px 8px 3px rgba(219,219,219,1)" }}
              type="text"
              className=" xl:py-[2px] xl:pl-[10px] xl:w-[60%] xl:mt-[15px] xl:ml-[130px] lg:py-[2px] lg:pl-[10px] 
              lg:w-[75%] lg:ml-[65px] lg:mt-[15px] rounded-full md:py-[2px] md:pl-[10px] md:ml-[60px] md:mt-[10px] 
              md:w-[80%] sm:py-[2px] sm:pl-[10px] sm:ml-[60px] sm:mt-[10px] sm:w-[75%] pl-[10px] mb-[10px] ml-[8px] w-[90%]  "
              id="name"
              pattern="(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label
              htmlFor="Email"
              className=" xl:ml-[130px]  xl:mt-[40px] xl:text-2xl  lg:ml-[65px] lg:mt-[40px] lg:text-2xl font-bold 
              md:ml-[60px] md:mt-[30px] md:text-2xl sm:ml-[60px] sm:mt-[20px] sm:text-xl ml-[15px] mt-[10px] text-xs "
            >
              Email
            </label>{" "}
            <br />
            <input
              style={{ boxShadow: "8px 8px 3px rgba(219,219,219,1)" }}
              type="email"
              className=" xl:py-[2px] xl:pl-[10px] xl:w-[60%] xl:mt-[15px] xl:ml-[130px] lg:py-[2px] lg:pl-[10px] 
              lg:w-[75%] lg:ml-[65px] lg:mt-[15px] rounded-full md:py-[2px] md:pl-[10px] md:ml-[60px] md:mt-[10px] 
              md:w-[80%] sm:py-[2px] sm:pl-[10px] sm:ml-[60px] sm:mt-[10px] sm:w-[75%] pl-[10px] mb-[10px] ml-[8px] w-[90%]  "
              id="email"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label
              htmlFor="phoneNo"
              className=" xl:ml-[130px]  xl:mt-[40px] xl:text-2xl  lg:ml-[65px] lg:mt-[40px] lg:text-2xl font-bold 
              md:ml-[60px] md:mt-[30px] md:text-2xl sm:ml-[60px] sm:mt-[20px] sm:text-xl ml-[15px] mt-[10px] text-xs "
            >
              Phone no.
            </label>{" "}
            <br />
            <input
              style={{ boxShadow: "8px 8px 3px rgba(219,219,219,1)" }}
              type="tel"
              className=" xl:py-[2px] xl:pl-[10px] xl:w-[60%] xl:mt-[15px] xl:ml-[130px] lg:py-[2px] lg:pl-[10px] 
              lg:w-[75%] lg:ml-[65px] lg:mt-[15px] rounded-full md:py-[2px] md:pl-[10px] md:ml-[60px] md:mt-[10px] 
              md:w-[80%] sm:py-[2px] sm:pl-[10px] sm:ml-[60px] sm:mt-[10px] sm:w-[75%] pl-[10px] mb-[10px] ml-[8px] w-[90%]  "
              id="phoneNo"
              pattern="^01[0-2,5]{1}[0-9]{8}$"
              required
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
            />
            <label
              htmlFor="date"
              className=" xl:ml-[130px]  xl:mt-[40px] xl:text-2xl  lg:ml-[65px] lg:mt-[40px] lg:text-2xl font-bold 
              md:ml-[60px] md:mt-[30px] md:text-2xl sm:ml-[60px] sm:mt-[20px] sm:text-xl ml-[15px] mt-[10px] text-xs "
            >
              Date of the Event:
            </label>{" "}
            <br />
            <input
              style={{ boxShadow: "8px 8px 3px rgba(219,219,219,1)" }}
              type="date"
              className=" xl:py-[2px] xl:pl-[10px] xl:w-[60%] xl:mt-[15px] xl:ml-[130px] lg:py-[2px] lg:pl-[10px] 
              lg:w-[75%] lg:ml-[65px] lg:mt-[15px] rounded-full md:py-[2px] md:pl-[10px] md:ml-[60px] md:mt-[10px] 
              md:w-[80%] sm:py-[2px] sm:pl-[10px] sm:ml-[60px] sm:mt-[10px] sm:w-[75%] pl-[10px] mb-[10px] ml-[8px] w-[90%]  "
              id="date"
              required
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            <button
              style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.7)" }}

              type="submit"
              className="border-white bg-white text-black font-bold text-xl px-[20px] mt-[30px] ml-[80px] 
              rounded-[30px] sm:text-[25px]  sm:px-[25px] sm:py-[5px] sm:mt-[50px] sm:ml-[180px] md:text-[25px] 
              md:px-[25px] md:ml-[230px] lg:text-[30px] lg:mt-[50px] lg:px-[30px] lg:py-[8px]  lg:ml-[310px] 
              xl:text-[30px] xl:mt-[50px] xl:ml-[380px] xl:px-[35px] "
            >
              Next
            </button>
          </form>


        </div>
      </section>
    </main>
  );
}

export default Booking;
