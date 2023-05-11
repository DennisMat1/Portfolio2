import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9owflht",
        "template_agmzq2j",
        form.current,
        "hAYv0HkyEe4EIlBhK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      style={{color:"white", width: "50%", margin: "0 auto" }}
    >
      <label style={{ display: "block", marginBottom: "8px" }}>
        Name:
        <input
          type="text"
          name="user_name"
          style={{ width: "100%", padding: "8px" }}
        />
      </label>
      <label style={{ display: "block", marginBottom: "8px" }}>
        Email:
        <input
          type="email"
          name="user_email"
          style={{ width: "100%", padding: "8px" }}
        />
      </label>
      <label style={{ display: "block", marginBottom: "8px" }}>
        Message:
        <textarea name="message" style={{ width: "100%", padding: "8px" }} />
      </label>
      <input
        type="submit"
        value="Send"
        style={{
          display: "block",
          margin: "8px 0",
          width: "100%",
          padding: "8px",
          backgroundColor: "lightgray",
          border: "none",
        }}
      />
    </form>
  );
};
