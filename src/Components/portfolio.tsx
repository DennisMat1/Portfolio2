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
          <h1>Project pagina</h1>
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
              <p className="card-text">Omhoog omlaag knop met de som ervan.</p>

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
              <h5 className="card-title">Kleur kiezer</h5>
              <p className="card-text">De kleur die je kiest word getoont.</p>
              <Link to="/colorSelect" className="btn btn-primary">
                Kies een kleur
              </Link>
            </div>
          </div>
          <div
            className="card"
            style={{ width: "18rem", margin: "0 2rem 2rem 0" }}
          >
            <div className="card-body">
              <h5 className="card-title">Filter namen</h5>
              <p className="card-text">
                Een lijst van namen waar je kan filteren
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
              <h5 className="card-title">Interval</h5>
              <p className="card-text">
                Een klok met paar willekeurige getallen ertussen
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
                Hier maak je een boodschappen lijst en kan je schrappen wat je
                gedaan hebt.
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
              <h5 className="card-title">Tic Tac Toe</h5>
              <p className="card-text">Het spelletje Tic Tac Toe</p>
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
              <h5 className="card-title">Pokedex</h5>
              <p className="card-text">
                Pokedex waar je de pokemen namen kan filteren.
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
              <h5 className="card-title">Quiz app</h5>
              <p className="card-text">
                Met gebruik van een api worden vraagen getoont waar je op kan
                antwoorden.
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
