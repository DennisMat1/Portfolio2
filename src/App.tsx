import React from "react";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Footer from "./Components/footer";
import "./App.css";
import Header from "./Components/header";
import {
  createBrowserRouter,
  NavLink,
  Outlet,
  redirect,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./Components/home";
import Portfolio from "./Components/portfolio";
import Contact from "./Components/contact";
import Counter from "./Components/OmhoogOmlaag";
import Colorselect from "./Components/colorSelect";
import Filtering from "./Components/Filter";
import Interval from "./Components/interval";

import Todo from "./Components/todo";
import TicTacToe from "./Components/ticTacToe";
import PokedexApp from "./Components/pokemon";
import QuizApp from "./Components/quizApp";
const loader = () => {
  return redirect("/home");
};
const Root = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "portfolio",
          element: <Portfolio />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "omhoogOmlaagSom",
          element: <Counter />,
        },
        {
          path: "colorSelect",
          element: <Colorselect />,
        },
        {
          path: "filtering",
          element: <Filtering />,
        },
        {
          path: "interval",
          element: <Interval />,
        },
        {
          path: "todo",
          element: <Todo />,
        },
        {
          path: "TicTacToe",
          element: <TicTacToe />,
        },
        {
          path: "pokedex",
          element: <PokedexApp />,
        },
        {
          path: "quizApp",
          element: <QuizApp />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
