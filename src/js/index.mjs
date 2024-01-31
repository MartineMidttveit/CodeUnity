import { API_HOST_URL } from "./api/constants.mjs";

const loginForm = document.querySelector("#login-form");
const inputs = document.querySelectorAll("#login-form input");

console.log(inputs);
const action = "/auth/login";
const method = "post";

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const profile = {
    email: inputs[0].value,
    password: inputs[1].value,
  };

  const body = JSON.stringify(profile);
  const fullUrl = `${API_HOST_URL}${action}`;

  const response = await fetch(fullUrl, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const postData = await response.json();
  console.log(postData);
});
