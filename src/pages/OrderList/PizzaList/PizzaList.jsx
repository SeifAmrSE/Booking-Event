import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPizzaArrayItems } from "./PizzaSlice.js";
import { useNavigate } from "react-router-dom";

function PizzaList() {

  const navigate = useNavigate()

  const { pizzaArrayItems } = useSelector(function (state) {
    return state.pizzaReducer;
  });

  console.log(pizzaArrayItems)

  const [orderItem, setOrderItem] = useState([...new Set(pizzaArrayItems)]);

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

    dispatch(setPizzaArrayItems(orderItem));

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
                id="olives"
                value="Olives"
                onChange={checkItem}
                defaultChecked={pizzaArrayItems.includes('Olives')}
                
              />
              <label className="ml-[5px]" htmlFor="olives">
                Olives
              </label>
              <br />

              <input
                type="checkbox"
                id="Mushrooms"
                value="Mushrooms"
                onChange={checkItem}
                defaultChecked={pizzaArrayItems.includes('Mushrooms')}
              />
              <label className="ml-[5px]" htmlFor="Mushrooms">
                Mushrooms
              </label>
              <br />

              <input
                type="checkbox"
                id="Onions"
                value="Onions"
                onChange={checkItem}
                defaultChecked={pizzaArrayItems.includes('Onions')}
              />
              <label className="ml-[5px]" htmlFor="Onions">
                Onions
              </label>
              <br />

              <input
                type="checkbox"
                id="Pepperoni"
                value="Pepperoni"
                onChange={checkItem}
                defaultChecked={pizzaArrayItems.includes('Pepperoni')}
              />
              <label className="ml-[5px]" htmlFor="Pepperoni">
                Pepperoni
              </label>
              <br />

              <input
                type="checkbox"
                id="Green Peppers"
                value="Green Peppers"
                onChange={checkItem}
                defaultChecked={pizzaArrayItems.includes('Green Peppers')}
              />
              <label className="ml-[5px]" htmlFor="Green Peppers">
                Green Peppers
              </label>
              <br />

              <input
                type="checkbox"
                id="Bresaola"
                value="Bresaola"
                onChange={checkItem}
                defaultChecked={pizzaArrayItems.includes('Bresaola')}
              />
              <label className="ml-[5px]" htmlFor="Bresaola">
                Bresaola
              </label>
              <br />

              <input
                type="checkbox"
                id="Burrata"
                value="Burrata"
                onChange={checkItem}
                defaultChecked={pizzaArrayItems.includes('Burrata')}
              />
              <label className="ml-[5px]" htmlFor="Burrata">
                Burrata
              </label>
              <br />

              <input
                type="checkbox"
                id="Buffalo"
                value="Buffalo"
                onChange={checkItem}
                defaultChecked={pizzaArrayItems.includes('Buffalo')}
              />
              <label className="ml-[5px]" htmlFor="Buffalo">
                Buffalo
              </label>
              <br />
            </div>

            <div>
              <input
                type="checkbox"
                id="Argula"
                value="Argula"
                onChange={checkItem}
                defaultChecked={pizzaArrayItems.includes('Argula')}
              />
              <label className="ml-[5px]" htmlFor="Argula">
                Argula
              </label>
              <br />

              <input
                type="checkbox"
                id="Honey"
                value="Honey"
                onChange={checkItem}
                defaultChecked={pizzaArrayItems.includes('Honey')}
              />
              <label className="ml-[5px]" htmlFor="Honey">
                Honey
              </label>
              <br />

              <input
                type="checkbox"
                id="Feta"
                value="Feta"
                onChange={checkItem}
                defaultChecked={pizzaArrayItems.includes('Feta')}
              />
              <label className="ml-[5px]" htmlFor="Feta">
                Feta
              </label>
              <br />

              <input
                type="checkbox"
                id="Nutella"
                value="Nutella"
                onChange={checkItem}
                defaultChecked={pizzaArrayItems.includes('Nutella')}
              />
              <label className="ml-[5px]" htmlFor="Nutella">
                Nutella
              </label>
              <br />

              <input
                type="checkbox"
                id="Lotus"
                value="Lotus"
                onChange={checkItem}
                defaultChecked={pizzaArrayItems.includes('Lotus')}
              />
              <label className="ml-[5px]" htmlFor="Lotus">
                Lotus
              </label>
              <br />

              <input
                type="checkbox"
                id="Bananas"
                value="Bananas"
                onChange={checkItem}
                defaultChecked={pizzaArrayItems.includes('Bananas')}
              />
              <label className="ml-[5px]" htmlFor="Bananas">
                Bananas
              </label>
              <br />

              <input
                type="checkbox"
                id="Strawberries"
                value="Strawberries"
                onChange={checkItem}
                defaultChecked={pizzaArrayItems.includes('Strawberries')}
              />
              <label className="ml-[5px]" htmlFor="Strawberries">
                Strawberries
              </label>
              <br />

              <input
                type="checkbox"
                id="PineApples"
                value="PineApples"
                onChange={checkItem}
                defaultChecked={pizzaArrayItems.includes('PineApples')}
              />
              <label className="ml-[5px]" htmlFor="PineApples">
                PineApples
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

export default PizzaList;
