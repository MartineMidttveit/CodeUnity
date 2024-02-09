export default function createPostListen(form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const tags = ["codeUnity"];

    const profile = {
      title: form.title.value,
      body: form.body.value,
      media: form.media.value
        ? { url: form.media.value, alt: "user uploaded img" }
        : null,
      tags: tags,
    };
  });
}
