import React from "react";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Footer from "./Components/footer";
import "./App.css";
import Header from "./Components/header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/home";

const App = () => {
  return (
    <div>
      <Header />

      <div> </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
