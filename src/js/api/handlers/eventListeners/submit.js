import EventListener from "./index.js";

export default function submitEvent(form, authRequest) {
  async function callBackListener(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    if (data.avatar) {
      data.avatar = {
        url: media,
        alt: "User uploaded img",
      };
    }

    authRequest(data);
  }

  const submit = new EventListener(form, "submit", callBackListener);
  submit.add();
}
