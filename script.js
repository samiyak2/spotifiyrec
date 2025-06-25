function setMood(mood) {
  document.getElementById('mood-input').value = mood;
}

document.getElementById("search-btn").addEventListener("click", () => {
  const mood = document.getElementById("mood-input").value.trim();
  const loader = document.getElementById("loader");
  const name = document.getElementById("playlist-name");
  const link = document.getElementById("playlist-link");

  if (!mood) {
    alert("Please enter or select a mood.");
    return;
  }

  loader.style.display = "block";
  name.textContent = "";
  link.textContent = "";
  link.href = "#";

  fetch(https://spotrec-backend-911478887745.asia-south1.run.app/recommend?mood=${encodeURIComponent(mood)})
    .then(res => res.json())
    .then(data => {
      loader.style.display = "none";
      if (data.error) {
        name.textContent = "No playlist found. Try another mood.";
        link.textContent = "";
      } else {
        name.textContent = 🎵 ${data.playlist};
        link.textContent = "Listen on Spotify";
        link.href = data.url;
      }
    })
    .catch(err => {
      loader.style.display = "none";
      name.textContent = "Something went wrong. Try again later.";
      console.error(err);
    });
});
