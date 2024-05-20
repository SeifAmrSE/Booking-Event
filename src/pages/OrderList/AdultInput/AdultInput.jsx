import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAdultInputArrayItems } from "./AdultInputSlice";
import { useNavigate } from "react-router-dom";

function AdultInputList() {
  const navigate = useNavigate();

  const { adultInputArrayItems } = useSelector(function (state) {
    return state.adultInputReducer;
  });

  console.log(adultInputArrayItems);

  const [names, setNames] = useState([]);

  const dispatch = useDispatch();

  function handleChange(e) {

    setNames(e.target.value);
  }

  const [isTabVisible, setTabVisible] = useState(true);

  useEffect(() => {
    const div = document.getElementById("myDiv");

    if (isTabVisible === false) {
      div.style.display = "none";
    } else {
      div.style.display = "block";
    }
  }, [isTabVisible]);

  function closeTab() {
    setTabVisible(!isTabVisible);
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(setAdultInputArrayItems(names));

    closeTab();

    navigate("/ordering");

    console.log(names);
  }

  return (
    <main
      style={{ boxShadow: "8px 8px 5px rgba(0,0,0,0.2)" }}
      className="  absolute  top-[50%] left-[50%] 
    translate-x-[-50%] translate-y-[-50%] lg:top-[35%] xl:top-[28%] "
    >
      <div
        id="myDiv"
        className=" bg-white text-black font-extrabold w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]
                md:w-[600px] md:h-[500px] xl:w-[700px] "
      >
        <h6 className="pt-[30px] font-minicheffont font-normal text-center sm:pt-[50px] sm:text-2xl  ">
          PLEASE TYPE THE PREFFERED NAME
        </h6>

        <button
          onClick={closeTab}
          className="font-extrabold absolute top-[0] right-[10px] text-xl"
        >
          X
        </button>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              className=" border-2 border-stone-400 shadow-md rounded-[30px] py-[5px] px-[10px] mt-[30px] 
              ml-[8px] w-[95%]  xl:w-[60%] xl:ml-[140px] xl:mt-[50px] md:mt-[50px] md:ml-[90px] md:w-[70%] sm:w-[90%] sm:ml-[30px]
              sm:mt-[50px] "
              type="text"
              onChange={handleChange}
            />
            <br />
          </div>

          <input
            className="mt-[130px] ml-[110px] bg-[#F2919D] px-[20px] rounded-[30px] sm:text-3xl sm:px-[30px] sm:mt-[220px] 
             sm:ml-[180px] md:mt-[220px] md:ml-[230px] lg:mt-[240px] xl:mt-[240px] xl:ml-[280px] "
            type="submit"
            value="Done"
          />
        </form>
      </div>
    </main>
  );
}

export default AdultInputList;
