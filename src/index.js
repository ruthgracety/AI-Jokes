function displayJokes(response) {
    new Typewriter("#jokes", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
}

function generateJokes(event) {
    event.preventDefault();

let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "ccc4b1tc7of0e402eb0f24b35faed2d9";
let context = "You are a well known comedian with the best authentic jokes ever";
let prompt = `Tell me 3 funniest jokes about ${instructionsInput.value} and list each joke in numbering form on each line with a <br /> without saying numbered as requested`;
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let jokesElement = document.querySelector("#jokes");
jokesElement.classList.remove("hidden");
jokesElement.innerHTML = `<div class="blink">😁Generating Jokes about ${instructionsInput.value}</div>`;

axios.get(apiURL).then(displayJokes);
    
}

let jokesFormElement = document.querySelector("#jokes-generate-form");
jokesFormElement.addEventListener("submit", generateJokes);

