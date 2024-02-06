import submit from "../../api/handlers/eventListeners/submit.js";
import login from "../../api/auth/requests/login.js";

const loginForm = document.querySelector("#login-form");

submit(loginForm, login);
