import React, { Component } from "react";
import WeatherCard from "./weatherApi";

export default class Home extends Component {
  render() {
    return (
      <div
        style={{color:"white",
          background: "linear-gradient(to top, #bdc3c7, #2c3e50)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",minHeight: "100vh"
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "20px",
            boxSizing: "border-box",
          }}
        ></div>
        <div
          style={{
            width: "100%",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <div  style={{ maxWidth: "800px", margin: "auto",
 }}>
            <div style={{ padding: "20px", boxSizing: "border-box" }}>
              <h4 style={{ marginBottom: "5px" }}>Beschrijving</h4>
              <p
                style={{
                  
                  margin: "0",
                  fontSize: "1rem",
                  lineHeight: "1.5",
                  textAlign: "justify",
                }}
              >
                Mijn naam is Dennis en ik ben een enthousiaste web
                developer met passie voor het bouwen van gebruiksvriendelijke en
                visueel aantrekkelijke websites en webapplicaties. Ik heb
                ervaring met React, TypeScript, HTML en CSS en ben altijd op
                zoek naar manieren om mijn vaardigheden te verbeteren en uit te
                breiden.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h5 style={{ marginBottom: "5px", marginTop: "20px" }}>
              Vaardigheden:
            </h5>
            <table
              style={{
                borderCollapse: "collapse",
                width: "100%",
                maxWidth: "500px",
              }}
            >
              <tr style={{ background: "linear-gradient(to top, #bdc3c7, #2c3e50)", }}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Skills
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Graad
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  React
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  gemiddeld
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Typescript
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  gemiddeld
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  CSS
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  gemiddeld
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  HTML
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Goed
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  C#
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  gemiddeld
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  MySQL
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  gemiddeld
                </td>
              </tr>
            </table>
            <div
              style={{
                flex: "1",
                marginRight: "20px",
                padding: "20px",
              }}
            >
              <WeatherCard  />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
