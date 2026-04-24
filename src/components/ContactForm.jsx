import React from "react";

export default function ContactForm() {
  return (
    <div>
      <form>
        <label htmlFor="username">
          Username:
          <input type="text" name="username" id="username" placeholder="username" />
        </label>
        <label htmlFor="password">
          Password:
          <input type="text" name="password" id="password" placeholder="password" />
        </label>
      </form>
    </div>
  );
}