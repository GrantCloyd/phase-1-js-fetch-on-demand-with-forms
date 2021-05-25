const init = () => {
  formFunc();
};

function formFunc() {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = e.target.search.value;
    fetch(`http://localhost:3000/movies/${input}`)
      .then((response) => response.json())
      .then((json) => {
        movieDetails = document.querySelector("#movieDetails");
        const title = movieDetails.querySelector("h4");
        const summary = movieDetails.querySelector("p");
        title.textContent = json.title;
        summary.textContent = json.summary;
        console.log(json);
      });
  });
}

document.addEventListener("DOMContentLoaded", init);
