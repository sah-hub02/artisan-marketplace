const filterButtons = document.querySelectorAll(".filter-btn");
const artists = document.querySelectorAll(".artist-item");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");

    artists.forEach(artist => {
      if (filter === "all" || artist.classList.contains(filter)) {
        artist.style.display = "block";
      } else {
        artist.style.display = "none";
      }
    });
  });
});
