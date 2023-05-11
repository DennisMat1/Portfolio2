import React, { Component, useState } from "react";
import emailjs from "emailjs-com";
import { ContactUs } from "./contacting";
export default function Contact() {
  return <div style={{ flex: "1",background: "linear-gradient(to top, #bdc3c7, #2c3e50)" ,minHeight: "100vh" }}>{ContactUs()}</div>;
}
