import React, { Component } from "react";
import image from "../Images/1645175615289-removebg-preview.png";

export default class Home extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div
          style={{
            flex: "1",
            padding: "20px",
          }}
        >
          <img src={image} alt="" style={{ height: "100%" }} />
        </div>
        <div
          style={{
            flex: "1",
            marginRight: "20px",
            padding: "20px",
          }}
        >
          <h5>Beschrijving</h5>
          <p>
            {" "}
            Mijn naam is Dennis en ik ben een enthousiaste front-end developer
            met passie voor het bouwen van gebruiksvriendelijke en visueel
            aantrekkelijke websites en webapplicaties. Ik heb ervaring met
            React, TypeScript, HTML en CSS en ben altijd op zoek naar manieren
            om mijn vaardigheden te verbeteren en uit te breiden.
          </p>
          <div style={{ display: "flex" }}>
            <table style={{ borderCollapse: "collapse" }}>
              <h5>Vaardigheden:</h5>
              <tr style={{ backgroundColor: "lightgray" }}>
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
                  Redelijk
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Typescript
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Redelijk
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  CSS
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Redelijk
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  HTML
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Redelijk
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  C#
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Redelijk
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  MySQL
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Redelijk
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
              Work in progress
            </div>
          </div>
        </div>
      </div>
    );
  }
}
