import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Booking from "./pages/Booking/Booking";
import Ordering from "./pages/Ordering/Ordering";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/carousel";
import PizzaList from "./pages/OrderList/PizzaList/PizzaList";
import { Provider } from "react-redux";
import { myStore } from "./pages/ReduxStore/ReduxStore";


const myRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/booking", element: <Booking /> },
  { path: "/ordering", element: <Ordering /> , children: [

    { path: 'pizzalist', element: <PizzaList/> }

  ] },
  { path: "*", element: <h1>Not Found, This Page Doesn't Exist.</h1> },
]);

function App() {
  return (
    <main>

<Provider store={myStore}>
<RouterProvider router={myRouter}></RouterProvider>
</Provider>




    </main>
  );
}

export default App;
