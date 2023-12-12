const thumbnails = document.querySelectorAll(".thumbnails img");
const mainImg = document.getElementById("mainImg");
const caption = document.getElementById("caption");

const displayImage = (imageSrc, captionText) => {
  if (mainImg && caption) {
    mainImg.src = imageSrc;
    caption.textContent = captionText;
  }
};

thumbnails.forEach((thumbnail) => {
  const imageSrc = thumbnail.src;
  const captionText = thumbnail.alt;

  thumbnail.addEventListener("click", () => {
    displayImage(imageSrc, captionText);
  });
});
