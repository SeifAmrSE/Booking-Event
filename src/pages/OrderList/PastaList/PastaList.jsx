import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPastaArrayItems } from "./PastaSlice.js";
import { useNavigate } from "react-router-dom";

function PastaList() {

const navigate = useNavigate();

  const { pastaArrayItems } = useSelector(function (state) {
    return state.pastaReducer;
  });

  console.log(pastaArrayItems)

  const [orderItem, setOrderItem] = useState([...new Set(pastaArrayItems)]);

  const dispatch = useDispatch();

  function checkItem(e) {
    let orderItems_array = [...orderItem];

    if (e.target.checked) {
      orderItems_array = [...orderItem, e.target.value];
    } else {
      orderItems_array.splice(orderItem.indexOf(e.target.value), 1);
    }

    setOrderItem(orderItems_array);
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

    dispatch(setPastaArrayItems(orderItem));

    closeTab();

    navigate('/ordering')

    console.log(orderItem)
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
        <h6 className="pt-[20px] text-center font-minicheffont font-normal sm:pt-[50px] sm:text-2xl  ">
          PLEASE SELECT TOUR SAUCE
        </h6>

        <button
          onClick={closeTab}
          className="font-extrabold absolute top-[0] right-[10px] text-xl"
        >
          X
        </button>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-evenly mt-[20px] sm:mt-[30px] sm:text-2xl md:mt-[30px] ">
            <div>
              <input
                type="checkbox"
                id="white sauce"
                value="White Sauce"
                onChange={checkItem}
                defaultChecked={pastaArrayItems.includes('White Sauce')}
                
              />
              <label className="ml-[5px]" htmlFor="white sauce">
                White Sauce
              </label>
              <br />

              <input
                type="checkbox"
                id="red sauce"
                value="Red Sauce"
                onChange={checkItem}
                defaultChecked={pastaArrayItems.includes('Red Sauce')}
              />
              <label className="ml-[5px]" htmlFor="red sauce">
                Red Sauce
              </label>
              <br />

              <input
                type="checkbox"
                id="rose"
                value="Rose"
                onChange={checkItem}
                defaultChecked={pastaArrayItems.includes('Rose')}
              />
              <label className="ml-[5px]" htmlFor="rose">
                Rose
              </label>
              <br />

              <input
                type="checkbox"
                id="pesto"
                value="Pesto"
                onChange={checkItem}
                defaultChecked={pastaArrayItems.includes('Pesto')}
              />
              <label className="ml-[5px]" htmlFor="pesto">
                Pesto
              </label>
              <br />
            </div>

            <div>
              <input
                type="checkbox"
                id="chicken"
                value="Chicken"
                onChange={checkItem}
                defaultChecked={pastaArrayItems.includes('Chicken')}
              />
              <label className="ml-[5px]" htmlFor="chicken">
                Chicken
              </label>
              <br />

              <input
                type="checkbox"
                id="saucage"
                value="Saucage"
                onChange={checkItem}
                defaultChecked={pastaArrayItems.includes('Saucage')}
              />
              <label className="ml-[5px]" htmlFor="saucage">
                Saucage
              </label>
              <br />

              <input
                type="checkbox"
                id="shrimp"
                value="Shrimp"
                onChange={checkItem}
                defaultChecked={pastaArrayItems.includes('Shrimp')}
              />
              <label className="ml-[5px]" htmlFor="shrimp">
                Shrimp
              </label>
              <br />
            </div>
          </div>

          <input
            className="mt-[15px] ml-[110px] bg-[#F2919D] px-[20px] rounded-[30px] sm:text-3xl sm:px-[30px] sm:mt-[50px] 
             sm:ml-[180px] md:mt-[50px] md:ml-[230px] xl:ml-[280px] "
            type="submit"
            value="Done"
            
          />
        </form>
      </div>
    </main>
  );
}

export default PastaList;
