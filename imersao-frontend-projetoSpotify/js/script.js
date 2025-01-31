
const searchInput = document.getElementById("search_input");
const resultArtists = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlist");


function requestAPI (searchTerm){
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
  fetch(url)
    .then((response) => response.json())
    .then((results) => displayResults(results));
}

function displayResults (results){
  resultPlaylist.classList.add("hidden");
  const artistName = document.getElementById("artist-name");
  const artistImage = document.getElementById("artist-img");

  results.forEach((element) => {
    artistName.innerText = element.name;
    artistImage.src = element.urlImg;
  });
  resultArtists.classList.remove("hidden");
   
}

document.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  if (searchTerm === ""){
    resultPlaylist.classList.remove("hidden");
    resultArtists.classList.add("hidden");
    return;

  }

  requestAPI(searchTerm);

});