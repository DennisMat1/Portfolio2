import React, { Component, useState } from "react";
import emailjs from "emailjs-com";
import { ContactUs } from "./contacting";
export default function Contact() {
  return <div style={{ flex: "1" }}>{ContactUs()}</div>;
}
