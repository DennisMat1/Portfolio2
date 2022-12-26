import React, { Component } from "react";

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <header
          style={{
            textAlign: "center",
          }}
        >
          <h1>Portfolio pagina</h1>
        </header>
        <p style={{ textAlign: "center" }}>
          Dit zijn een paar projecten waar aan ik gewerkt heb.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "85%",
            margin: "auto",
          }}
        >
          <div
            className="card"
            style={{ width: "18rem", margin: "0 2rem 2rem 0" }}
          >
            <div className="card-body">
              <h5 className="card-title">Omhoog omlaag counters</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>

              <Link to="/omhoogOmlaagSom" className="btn btn-primary">
                Hoger Lager som
              </Link>
            </div>
          </div>
          <div
            className="card"
            style={{ width: "18rem", margin: "0 2rem 2rem 0" }}
          >
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/colorSelect" className="btn btn-primary">
                Select your color
              </Link>
            </div>
          </div>
          <div
            className="card"
            style={{ width: "18rem", margin: "0 2rem 2rem 0" }}
          >
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/filtering" className="btn btn-primary">
                filter namen
              </Link>
            </div>
          </div>
          <div
            className="card"
            style={{ width: "18rem", margin: "0 2rem 2rem 0" }}
          >
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/Interval" className="btn btn-primary">
                een interval
              </Link>
            </div>
          </div>
          <div
            className="card"
            style={{ width: "18rem", margin: "0 2rem 2rem 0" }}
          >
            <div className="card-body">
              <h5 className="card-title">TodoApp</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/todo" className="btn btn-primary">
                een todoApp
              </Link>
            </div>
          </div>
          <div
            className="card"
            style={{ width: "18rem", margin: "0 2rem 2rem 0" }}
          >
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/TicTacToe" className="btn btn-primary">
                een TicTacToe
              </Link>
            </div>
          </div>
          <div
            className="card"
            style={{ width: "18rem", margin: "0 2rem 2rem 0" }}
          >
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/pokedex" className="btn btn-primary">
                een pokedex
              </Link>
            </div>
          </div>
          <div
            className="card"
            style={{ width: "18rem", margin: "0 2rem 2rem 0" }}
          >
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/quizApp" className="btn btn-primary">
                een quizApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
