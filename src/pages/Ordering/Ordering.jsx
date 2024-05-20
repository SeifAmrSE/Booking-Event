import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com'

function Ordering() {
  const { pizzaArrayItems } = useSelector(function (state) {
    return state.pizzaReducer;
  });

  const { pastaArrayItems } = useSelector(function (state) {
    return state.pastaReducer;
  });

  const { burgerArrayItems } = useSelector(function (state) {
    return state.burgerReducer;
  });

  const { cookieArrayItems } = useSelector(function (state) {
    return state.cookieReducer;
  });

  const { cupcakeArrayItems } = useSelector(function (state) {
    return state.cupcakeReducer;
  });

  const { kidsInputArrayItems } = useSelector(function (state) {
    return state.kidsInputReducer;
  });

  const { adultInputArrayItems } = useSelector(function (state) {
    return state.adultInputReducer;
  });

  const navigate = useNavigate();

  const [pizzaCounter, setPizzaCounter] = useState(0);
  const [pastaCounter, setPastaCounter] = useState(0);
  const [burgerCounter, setBurgerCounter] = useState(0);
  const [cookieCounter, setCookieCounter] = useState(0);
  const [cupcakeCounter, setCupcakeCounter] = useState(0);
  const [colorCounter, setColorCounter] = useState(0);
  const [foodGamesCounter, setFoodGamesCounter] = useState(0);
  const [kidsCounter, setKidsCounter] = useState(0);
  const [adultCounter, setAdultCounter] = useState(0);
  const [giveawaysCounter, setGiveawaysCounter] = useState(0);



  useEffect(() => {
    if (pizzaArrayItems.length > 0) {
      setPizzaCounter(1);
    } else if (pizzaArrayItems.length === 0) {
      setPizzaCounter(0);
    }
  }, [pizzaArrayItems.length]);

  useEffect(() => {
    if (pastaArrayItems.length > 0) {
      setPastaCounter(1);
    } else if (pastaArrayItems.length === 0) {
      setPastaCounter(0);
    }
  }, [pastaArrayItems.length]);

  useEffect(() => {
    if (burgerArrayItems.length > 0) {
      setBurgerCounter(1);
    } else if (burgerArrayItems.length === 0) {
      setBurgerCounter(0);
    }
  }, [burgerArrayItems.length]);

  useEffect(() => {
    if (cookieArrayItems.length > 0) {
      setCookieCounter(1);
    } else if (cookieArrayItems.length === 0) {
      setCookieCounter(0);
    }
  }, [cookieArrayItems.length]);

  useEffect(() => {
    if (cupcakeArrayItems.length > 0) {
      setCupcakeCounter(1);
    } else if (cupcakeArrayItems.length === 0) {
      setCupcakeCounter(0);
    }
  }, [cupcakeArrayItems.length]);

  useEffect(() => {
    if (kidsInputArrayItems.length > 0) {
      setKidsCounter(1);
    } else if (kidsInputArrayItems.length === 0) {
      setKidsCounter(0);
    }
  }, [kidsInputArrayItems.length]);

  useEffect(() => {
    if (adultInputArrayItems.length > 0) {
      setAdultCounter(1);
    } else if (adultInputArrayItems.length === 0) {
      setAdultCounter(0);
    }
  }, [adultInputArrayItems.length]);

  function incrementPizzaCounter() {
    setPizzaCounter(pizzaCounter + 1);
  }

  function decrementPizzaCounter() {
    setPizzaCounter(pizzaCounter > 0 ? pizzaCounter - 1 : 0);
  }

  function incrementPastaCounter() {
    setPastaCounter(pastaCounter + 1);
  }

  function decrementPastaCounter() {
    setPastaCounter(pastaCounter > 0 ? pastaCounter - 1 : 0);
  }

  function incrementBurgerCounter() {
    setBurgerCounter(burgerCounter + 1);
  }

  function decrementBurgerCounter() {
    setBurgerCounter(burgerCounter > 0 ? burgerCounter - 1 : 0);
  }

  function incrementCookieCounter() {
    setCookieCounter(cookieCounter + 1);
  }

  function decrementCookieCounter() {
    setCookieCounter(cookieCounter > 0 ? cookieCounter - 1 : 0);
  }

  function incrementCupcakeCounter() {
    setCupcakeCounter(cupcakeCounter + 1);
  }

  function decrementCupcakeCounter() {
    setCupcakeCounter(cupcakeCounter > 0 ? cupcakeCounter - 1 : 0);
  }

  function incrementColorCounter() {
    setColorCounter(colorCounter + 1);
  }

  function decrementColorCounter() {
    setColorCounter(colorCounter > 0 ? colorCounter - 1 : 0);
  }

  function incrementFoodGamesCounter() {
    setFoodGamesCounter(foodGamesCounter + 1);
  }

  function decrementFoodGamesCounter() {
    setFoodGamesCounter(foodGamesCounter > 0 ? foodGamesCounter - 1 : 0);
  }

  function incrementKidsCounter() {
    setKidsCounter(kidsCounter + 1);
  }

  function decrementKidsCounter() {
    setKidsCounter(kidsCounter > 0 ? kidsCounter - 1 : 0);
  }

  function incrementAdultCounter() {
    setAdultCounter(adultCounter + 1);
  }

  function decrementAdultCounter() {
    setAdultCounter(adultCounter > 0 ? adultCounter - 1 : 0);
  }

  function incrementGiveawaysCounter() {
    setGiveawaysCounter(giveawaysCounter + 1);
  }

  function decrementGiveawaysCounter() {
    setGiveawaysCounter(giveawaysCounter > 0 ? giveawaysCounter - 1 : 0);
  }

  const arrayOfObject = JSON.parse(localStorage.getItem("formData"));

  const lastObject = arrayOfObject[arrayOfObject.length - 1];

  const { name, email, phoneNo, date } = lastObject;

  console.log(name, email, phoneNo, date);

  function handleSubmit(e) {
    e.preventDefault();

    const serviceID = "service_6a1llyl";
    const templateID = "template_557yldg";
    const publicKey = "8XTX-VJFS4r2FTb0N";

    const templatePrams = {
      full_Name: name,
      Email: email,
      Phone_Number: phoneNo,
      data_Of_The_Event: date,

      toppings_of_pizza: pizzaArrayItems, 
      quantity_of_pizza: pizzaCounter ,

      sauce_of_pasta: pastaArrayItems, 
      quantity_of_pasta: pastaCounter ,

      toppings_of_burger: burgerArrayItems, 
      quantity_of_burger: burgerCounter,

      cookie_decorations: cookieArrayItems, 
      quantity_of_cookie: cookieCounter ,

      cupcake_decorations: cupcakeArrayItems,
      quantity_of_cupcake: cupcakeCounter ,

      quantity_of_coloring_corner: colorCounter,

      quantity_of_food_games: foodGamesCounter,

      names_of_kids_apron_coloring: kidsInputArrayItems, 
      quantity_of_kids: kidsCounter,

      names_of_adult_apron_coloring: adultInputArrayItems,
      quantity_of_adult: adultCounter,

      quantity_of_giveaways: giveawaysCounter
    };

    emailjs.send(serviceID,templateID,templatePrams,publicKey).then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

      
      
  }

  function orderDoneMessage(){
    navigate('orderdone') 
    window.location.reload(true);
  }


  return (
    <main className="container">
      <section className="flex relative">
        <Outlet />

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

          <h6
            className=" font-bold xl:mt-[25px] xl:ml-[540px] xl:text-xl lg:mt-[25px] lg:ml-[415px] lg:text-xl md:mt-[25px]
            md:ml-[290px]   md:text-lg sm:mt-[25px] sm:ml-[225px] sm:text-lg text-sm mt-[20px] ml-[115px] "
          >
            Quantity
          </h6>

          <form onSubmit={handleSubmit}>
            <div>
              <div className=" flex justify-between  mt-[20px] ">
                <h2
                  className="font-bold xl:text-2xl xl:ml-[130px] lg:text-lg lg:ml-[70px] md:ml-[60px] md:text-lg
              sm:ml-[10px] sm:text-lg text-xs ml-[px] mt-[px] "
                >
                  Adult Pizza Margherita
                </h2>
                <button
                  className=" border-2 font-bold rounded-[30px] border-black xl:px-[15px] xl:text-2xl  xl:ml-[130px]
                 lg:px-[15px] lg:text-xl lg:ml-[110px] md:px-[15px] md:ml-[25px] md:text-base sm:px-[15px] sm:ml-[12px]
                  sm:text-base text-xs px-[6px] "
                >
                  <button onClick={decrementPizzaCounter}>-</button>{" "}
                  {pizzaCounter}{" "}
                  <button onClick={incrementPizzaCounter}>+</button>
                </button>
              </div>

              <Link
                to="pizzalist"
                className=" font-semibold text-[#7B7B7B] xl:text-base xl:ml-[130px] xl:mt-[400px] lg:text-sm lg:ml-[70px] md:ml-[60px]
              md:text-sm sm:ml-[15px] sm:text-sm text-xs  "
              >
                + Please select your toppings <br />
                <p className="text-[#fb9f3c] xl:ml-[130px] lg:ml-[70px] md:ml-[60px] sm:ml-[15px] ">
                  {pizzaArrayItems === "" ? "" : pizzaArrayItems.join(", ")}
                </p>
              </Link>
            </div>

            <div>
              <div className=" flex justify-between  mt-[10px] ">
                <h2
                  className="font-bold xl:text-2xl xl:ml-[130px] lg:text-lg lg:ml-[70px] md:ml-[60px] md:text-lg
              sm:ml-[10px] sm:text-lg text-xs ml-[px] mt-[px] "
                >
                  Scratch A Pasta
                </h2>
                <button
                  className=" border-2 font-bold rounded-[30px] border-black xl:px-[15px] xl:text-2xl  xl:ml-[130px]
                 lg:px-[15px] lg:text-xl lg:ml-[110px] md:px-[15px] md:ml-[25px] md:text-base sm:px-[15px] sm:ml-[12px]
                  sm:text-base text-xs px-[6px] "
                >
                  <button onClick={decrementPastaCounter}>-</button>{" "}
                  {pastaCounter}{" "}
                  <button onClick={incrementPastaCounter}>+</button>
                </button>
              </div>

              <Link
                to="pastalist"
                className=" font-semibold text-[#7B7B7B] xl:text-base xl:ml-[130px] xl:mt-[400px] lg:text-sm lg:ml-[70px] md:ml-[60px]
              md:text-sm sm:ml-[15px] sm:text-sm text-xs  "
              >
                + Please select your sauce
                <p className="text-[#fb9f3c] xl:ml-[130px] lg:ml-[70px] md:ml-[60px] sm:ml-[15px] ">
                  {pastaArrayItems === "" ? "" : pastaArrayItems.join(", ")}
                </p>
              </Link>
            </div>

            <div>
              <div className=" flex justify-between  mt-[10px] ">
                <h2
                  className="font-bold xl:text-2xl xl:ml-[130px] lg:text-lg lg:ml-[70px] md:ml-[60px] md:text-lg
              sm:ml-[10px] sm:text-lg text-xs ml-[px] mt-[px] "
                >
                  Build A Burger
                </h2>
                <button
                  className=" border-2 font-bold rounded-[30px] border-black xl:px-[15px] xl:text-2xl  xl:ml-[130px]
                 lg:px-[15px] lg:text-xl lg:ml-[110px] md:px-[15px] md:ml-[25px] md:text-base sm:px-[15px] sm:ml-[12px]
                  sm:text-base text-xs px-[6px] "
                >
                  <button onClick={decrementBurgerCounter}>-</button>{" "}
                  {burgerCounter}{" "}
                  <button onClick={incrementBurgerCounter}>+</button>
                </button>
              </div>

              <Link
                to="burgerlist"
                className=" font-semibold text-[#7B7B7B] xl:text-base xl:ml-[130px] xl:mt-[400px] lg:text-sm lg:ml-[70px] md:ml-[60px]
              md:text-sm sm:ml-[15px] sm:text-sm text-xs  "
              >
                + Please select your toppings
                <p className="text-[#fb9f3c] xl:ml-[130px] lg:ml-[70px] md:ml-[60px] sm:ml-[15px] ">
                  {burgerArrayItems === "" ? "" : burgerArrayItems.join(", ")}
                </p>
              </Link>
            </div>

            <div>
              <div className=" flex justify-between  mt-[10px] ">
                <h2
                  className="font-bold xl:text-2xl xl:ml-[130px] lg:text-lg lg:ml-[70px] md:ml-[60px] md:text-lg
              sm:ml-[10px] sm:text-lg text-xs ml-[px] mt-[px] "
                >
                  Cookie Decoration
                </h2>
                <button
                  className=" border-2 font-bold rounded-[30px] border-black xl:px-[15px] xl:text-2xl  xl:ml-[130px]
                 lg:px-[15px] lg:text-xl lg:ml-[110px] md:px-[15px] md:ml-[25px] md:text-base sm:px-[15px] sm:ml-[12px]
                  sm:text-base text-xs px-[6px] "
                >
                  <button onClick={decrementCookieCounter}>-</button>{" "}
                  {cookieCounter}{" "}
                  <button onClick={incrementCookieCounter}>+</button>
                </button>
              </div>

              <Link
                to="cookielist"
                className=" font-semibold text-[#7B7B7B] xl:text-base xl:ml-[130px] xl:mt-[400px] lg:text-sm lg:ml-[70px] md:ml-[60px]
              md:text-sm sm:ml-[15px] sm:text-sm text-xs  "
              >
                + Choose your decorations
                <p className="text-[#fb9f3c] xl:ml-[130px] lg:ml-[70px] md:ml-[60px] sm:ml-[15px] ">
                  {cookieArrayItems === "" ? "" : cookieArrayItems.join(", ")}
                </p>
              </Link>
            </div>

            <div>
              <div className=" flex justify-between  mt-[10px] ">
                <h2
                  className="font-bold xl:text-2xl xl:ml-[130px] lg:text-lg lg:ml-[70px] md:ml-[60px] md:text-lg
              sm:ml-[10px] sm:text-lg text-xs ml-[px] mt-[px] "
                >
                  CupCake Decoration
                </h2>
                <button
                  className=" border-2 font-bold rounded-[30px] border-black xl:px-[15px] xl:text-2xl  xl:ml-[130px]
                 lg:px-[15px] lg:text-xl lg:ml-[110px] md:px-[15px] md:ml-[25px] md:text-base sm:px-[15px] sm:ml-[12px]
                  sm:text-base text-xs px-[6px] "
                >
                  <button onClick={decrementCupcakeCounter}>-</button>{" "}
                  {cupcakeCounter}{" "}
                  <button onClick={incrementCupcakeCounter}>+</button>
                </button>
              </div>

              <Link
                to="cupcakelist"
                className=" font-semibold text-[#7B7B7B] xl:text-base xl:ml-[130px] xl:mt-[400px] lg:text-sm lg:ml-[70px] md:ml-[60px]
              md:text-sm sm:ml-[15px] sm:text-sm text-xs  "
              >
                + Choose your decorations
                <p className="text-[#fb9f3c] xl:ml-[130px] lg:ml-[70px] md:ml-[60px] sm:ml-[15px] ">
                  {cupcakeArrayItems === "" ? "" : cupcakeArrayItems.join(", ")}
                </p>
              </Link>
            </div>

            <div>
              <div className=" flex justify-between  mt-[10px] mb-[35px] ">
                <h2
                  className="font-bold xl:text-2xl xl:ml-[130px] lg:text-lg lg:ml-[70px] md:ml-[60px] md:text-lg
              sm:ml-[10px] sm:text-lg text-xs ml-[px] mt-[px] "
                >
                  Coloring Corner
                </h2>
                <button
                  className=" border-2 font-bold rounded-[30px] border-black xl:px-[15px] xl:text-2xl  xl:ml-[130px]
                 lg:px-[15px] lg:text-xl lg:ml-[110px] md:px-[15px] md:ml-[25px] md:text-base sm:px-[15px] sm:ml-[12px]
                  sm:text-base text-xs px-[6px] "
                >
                  <button onClick={decrementColorCounter}>-</button>{" "}
                  {colorCounter}{" "}
                  <button onClick={incrementColorCounter}>+</button>
                </button>
              </div>
            </div>

            <div>
              <div className=" flex justify-between  mt-[10px] mb-[35px] ">
                <h2
                  className="font-bold xl:text-2xl xl:ml-[130px] lg:text-lg lg:ml-[70px] md:ml-[60px] md:text-lg
              sm:ml-[10px] sm:text-lg text-xs ml-[px] mt-[px] "
                >
                  Food Games
                </h2>
                <button
                  className=" border-2 font-bold rounded-[30px] border-black xl:px-[15px] xl:text-2xl  xl:ml-[130px]
                 lg:px-[15px] lg:text-xl lg:ml-[110px] md:px-[15px] md:ml-[25px] md:text-base sm:px-[15px] sm:ml-[12px]
                  sm:text-base text-xs px-[6px] "
                >
                  <button onClick={decrementFoodGamesCounter}>-</button>{" "}
                  {foodGamesCounter}{" "}
                  <button onClick={incrementFoodGamesCounter}>+</button>
                </button>
              </div>
            </div>

            <div>
              <div className=" flex justify-between  mt-[10px] ">
                <h2
                  className="font-bold xl:text-2xl xl:ml-[130px] lg:text-lg lg:ml-[70px] md:ml-[60px] md:text-lg
              sm:ml-[10px] sm:text-lg text-xs ml-[px] mt-[px] "
                >
                  Kids Apron Coloring
                </h2>
                <button
                  className=" border-2 font-bold rounded-[30px] border-black xl:px-[15px] xl:text-2xl  xl:ml-[130px]
                 lg:px-[15px] lg:text-xl lg:ml-[110px] md:px-[15px] md:ml-[25px] md:text-base sm:px-[15px] sm:ml-[12px]
                  sm:text-base text-xs px-[6px] "
                >
                  <button onClick={decrementKidsCounter}>-</button>{" "}
                  {kidsCounter}{" "}
                  <button onClick={incrementKidsCounter}>+</button>
                </button>
              </div>

              <Link
                to="kidsinput"
                className=" font-semibold text-[#7B7B7B] xl:text-base xl:ml-[130px] xl:mt-[400px] lg:text-sm lg:ml-[70px] md:ml-[60px]
              md:text-sm sm:ml-[15px] sm:text-sm text-xs  "
              >
                + Customize Names
                <p className="text-[#fb9f3c] xl:ml-[130px] lg:ml-[70px] md:ml-[60px] sm:ml-[15px] ">
                  {kidsInputArrayItems === "" ? "" : kidsInputArrayItems}
                </p>
              </Link>
            </div>

            <div>
              <div className=" flex justify-between  mt-[10px] ">
                <h2
                  className="font-bold xl:text-2xl xl:ml-[130px] lg:text-lg lg:ml-[70px] md:ml-[60px] md:text-lg
              sm:ml-[10px] sm:text-lg text-xs ml-[px] mt-[px] "
                >
                  Adult Apron Coloring
                </h2>
                <button
                  className=" border-2 font-bold rounded-[30px] border-black xl:px-[15px] xl:text-2xl  xl:ml-[130px]
                 lg:px-[15px] lg:text-xl lg:ml-[110px] md:px-[15px] md:ml-[25px] md:text-base sm:px-[15px] sm:ml-[12px]
                  sm:text-base text-xs px-[6px] "
                >
                  <button onClick={decrementAdultCounter}>-</button>{" "}
                  {adultCounter}{" "}
                  <button onClick={incrementAdultCounter}>+</button>
                </button>
              </div>

              <Link
                to="adultinput"
                className=" font-semibold text-[#7B7B7B] xl:text-base xl:ml-[130px] xl:mt-[400px] lg:text-sm lg:ml-[70px] md:ml-[60px]
              md:text-sm sm:ml-[15px] sm:text-sm text-xs  "
              >
                + Customize Names
                <p className="text-[#fb9f3c] xl:ml-[130px] lg:ml-[70px] md:ml-[60px] sm:ml-[15px] ">
                  {adultInputArrayItems === "" ? "" : adultInputArrayItems}
                </p>
              </Link>
            </div>

            <div>
              <div className=" flex justify-between  mt-[10px] pb-[35px] ">
                <h2
                  className="font-bold xl:text-2xl xl:ml-[130px] lg:text-lg lg:ml-[70px] md:ml-[60px] md:text-lg
              sm:ml-[10px] sm:text-lg text-xs ml-[px] mt-[px] "
                >
                  Giveaways
                </h2>
                <button
                  className=" border-2 font-bold rounded-[30px] border-black xl:px-[15px] xl:text-2xl  xl:ml-[130px]
                 lg:px-[15px] lg:text-xl lg:ml-[110px] md:px-[15px] md:ml-[25px] md:text-base sm:px-[15px] sm:ml-[12px]
                  sm:text-base text-xs px-[6px] "
                >
                  <button onClick={decrementGiveawaysCounter}>-</button>{" "}
                  {giveawaysCounter}{" "}
                  <button onClick={incrementGiveawaysCounter}>+</button>
                </button>
              </div>
            </div>

            <input
              type="submit"
              value="Confirm"
              onClick={orderDoneMessage}
              className="mb-[100px] mt-[20px] bg-[#F2919D] rounded-[30px] px-[20px] py-[3px] text-white font-bold text-lg
               ml-[35px] sm:text-xl  sm:ml-[100px] md:text-2xl md:ml-[150px] lg:ml-[210px] xl:text-3xl xl:ml-[300px] "
            />
          </form>
        </div>
      </section>
    </main>
  );
}

export default Ordering;
