import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBurgerArrayItems } from "./BurgerSlice.js";
import { useNavigate } from "react-router-dom";

function BurgerList() {
  const navigate = useNavigate();

  const { burgerArrayItems } = useSelector(function (state) {
    return state.burgerReducer;
  });

  console.log(burgerArrayItems);

  const [orderItem, setOrderItem] = useState([...new Set(burgerArrayItems)]);

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

    dispatch(setBurgerArrayItems(orderItem));

    closeTab();

    navigate("/ordering");

    console.log(orderItem);
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
          PLEASE SELECT YOUR TOPPINGS
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
                id="onion"
                value="Onion"
                onChange={checkItem}
                defaultChecked={burgerArrayItems.includes("Onion")}
              />
              <label className="ml-[5px]" htmlFor="onion">
                Onion
              </label>
              <br />

              <input
                type="checkbox"
                id="lettuce"
                value="Lettuce"
                onChange={checkItem}
                defaultChecked={burgerArrayItems.includes("Lettuce")}
              />
              <label className="ml-[5px]" htmlFor="lettuce">
                Lettuce
              </label>
              <br />

              <input
                type="checkbox"
                id="tomatoes"
                value="Tomatoes"
                onChange={checkItem}
                defaultChecked={burgerArrayItems.includes("Tomatoes")}
              />
              <label className="ml-[5px]" htmlFor="tomatoes">
                Tomatoes
              </label>
              <br />

              <input
                type="checkbox"
                id="cheddar cheese"
                value="Cheddar Cheese"
                onChange={checkItem}
                defaultChecked={burgerArrayItems.includes("Cheddar Cheese")}
              />
              <label
                className="ml-[5px] text-sm sm:text-2xl"
                htmlFor="cheddar cheese"
              >
                Cheddar Cheese
              </label>
              <br />
            </div>

            <div>
              <input
                type="checkbox"
                id="caramalized onion"
                value="Caramalized Onion"
                onChange={checkItem}
                defaultChecked={burgerArrayItems.includes("Caramalized Onion")}
              />
              <label className="ml-[5px]" htmlFor="caramalized onion">
                Caramalized Onion
              </label>
              <br />

              <input
                type="checkbox"
                id="emmental cheese"
                value="Emmental Cheese"
                onChange={checkItem}
                defaultChecked={burgerArrayItems.includes("Emmental Cheese")}
              />
              <label className="ml-[5px]" htmlFor="emmental cheese">
                Emmental Cheese
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

export default BurgerList;
