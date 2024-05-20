import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCookieArrayItems } from "./CookieSlice";
import { useNavigate } from "react-router-dom";

function CookieList() {
  const navigate = useNavigate();

  const { cookieArrayItems } = useSelector(function (state) {
    return state.cookieReducer;
  });

  console.log(cookieArrayItems);

  const [orderItem, setOrderItem] = useState([...new Set(cookieArrayItems)]);

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

    dispatch(setCookieArrayItems(orderItem));

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
                id="sprinkles"
                value="Sprinkles"
                onChange={checkItem}
                defaultChecked={cookieArrayItems.includes("Sprinkles")}
              />
              <label className="ml-[5px]" htmlFor="sprinkles">
                Sprinkles
              </label>
              <br />

              <input
                type="checkbox"
                id="icing colors"
                // value="Icing Colors"
                // onChange={checkItem}
                // defaultChecked={cookieArrayItems.includes("Icing Colors")}
                checked={false}
              />
              <label className="ml-[5px]" htmlFor="icing colors">
                Icing Colors &#8595;
              </label>
              <br />

              <div className="flex ml-[20px] text-xs mt-[10px] sm:text-base md:text-base xl:text-lg ">
                <div>
                  <input
                    type="checkbox"
                    id="green"
                    value="Icing Color-Green"
                    onChange={checkItem}
                    defaultChecked={cookieArrayItems.includes("Icing Color-Green")}
                  />
                  <label className="ml-[5px]" htmlFor="green">
                  Green
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    id="red"
                    value="Icing Color-Red"
                    onChange={checkItem}
                    defaultChecked={cookieArrayItems.includes("Icing Color-Red")}
                  />
                  <label className="ml-[5px]" htmlFor="red">
                    Red
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    id="blue"
                    value="Icing Color-Blue"
                    onChange={checkItem}
                    defaultChecked={cookieArrayItems.includes("Icing Color-Blue")}
                  />
                  <label className="ml-[5px]" htmlFor="blue">
                    Blue
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    id="white"
                    value="Icing Color-White"
                    onChange={checkItem}
                    defaultChecked={cookieArrayItems.includes("Icing Color-White")}
                  />
                  <label className="ml-[5px]" htmlFor="white">
                    White
                  </label>
                  <br />
                </div>
                <div className="sm:ml-[15px]">
                  <input
                    type="checkbox"
                    id="yellow"
                    value="Icing Color-Yellow"
                    onChange={checkItem}
                    defaultChecked={cookieArrayItems.includes("Icing Color-Yellow")}
                  />
                  <label className="ml-[5px]" htmlFor="yellow">
                    Yellow
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    id="brown"
                    value="Icing Color-Brown"
                    onChange={checkItem}
                    defaultChecked={cookieArrayItems.includes("Icing Color-Brown")}
                  />
                  <label className="ml-[5px]" htmlFor="brown">
                    Brown
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    id="pink"
                    value="Icing Color-Pink"
                    onChange={checkItem}
                    defaultChecked={cookieArrayItems.includes("Icing Color-Pink")}
                  />
                  <label className="ml-[5px]" htmlFor="pink">
                    Pink
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    id="purple"
                    value="Icing Color-Purple"
                    onChange={checkItem}
                    defaultChecked={cookieArrayItems.includes("Icing Color-Purple")}
                  />
                  <label className="ml-[5px]" htmlFor="purple">
                    Purple
                  </label>
                  <br />
                </div>
              </div>
            </div>

            <div>
              <input
                type="checkbox"
                id="edible gold"
                value="Edible Gold"
                onChange={checkItem}
                defaultChecked={cookieArrayItems.includes("Edible Gold")}
              />
              <label className="ml-[5px]" htmlFor="edible gold">
                Edible Gold
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

export default CookieList;
