function generateJokes(event) {
    event.preventDefault();

    new Typewriter("#jokes", {
      strings: "List of Jokes",
      autoStart: true,
      delay: 1,
      cursor: "",
    });
}

let jokesFormElement = document.querySelector("#jokes-generate-form");
jokesFormElement.addEventListener("submit", generateJokes);
