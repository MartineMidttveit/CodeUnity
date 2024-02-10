export default function imagePreview(input, image) {
  // With URL input for src NOT file input
  input.addEventListener("input", (e) => {
    // Can you check if the URL is valid?

    const url = e.target.value;
    if (!url) {
      image.src = "/images/image.png";
      return;
    }
    console.log(url);
    console.log(image);

    try {
      new URL(url);
      image.src = url;
    } catch {
      console.log("Invalid URL");
      image.src = "/images/image.png";
      return;
    }
  });
}
