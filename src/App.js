import React, { useState } from "react";
import "./styles.css";

const ytc = {
  WebDev: [
    { name: "Tanay Pratap", rating: "4.5 / 5" },
    { name: "FreeCodeCamp", rating: "3.5 / 5" },
    { name: "Web Dev Simplified", rating: "3 / 5" }
  ],
  Technology: [
    { name: "Marques Brownlee", rating: "4.5 / 5" },
    { name: "Geekyranjit", rating: "4 / 5" },
    { name: "JerryRigEverything", rating: "4 / 5" }
  ],
  Vlogs: [
    { name: "Ranveer Allahbadia", rating: "4 / 5" },
    { name: "Casey Neistat", rating: "3.5 / 5" }
  ],
  Podcast: [
    { name: "Ranveer Allahbadia", rating: "4 / 5" },
    { name: "Hustlers Bay", rating: "3 / 5" }
  ],
  Gaming: [
    { name: "Techano Gamerz", rating: "4.5 / 5" },
    { name: "Mythpad", rating: "4 / 5" },
    { name: "Scout", rating: "3 / 5" }
  ]
};

var category = Object.keys(ytc);

export default function App() {
  const [categoryUser, printChannel] = useState("WebDev");

  function clickHandler(item) {
    printChannel(item);
  }

  function printCategory(item) {
    return (
      <button class="categoryList hover" onClick={() => clickHandler(item)}>
        {item}
      </button>
    );
  }

  return (
    <div className="App">
      <div class="heading">
        <h1>Hello Friend!</h1>
      </div>
      <h3>Here I am recommending you some Youtube channels.</h3>

      <section class="btnSec">
        <h4>Pick up a category to see my recommendations!</h4>
        {category.map(printCategory)}
      </section>

      <section>
        <ul class="no-bullet">
          {ytc[categoryUser].map((cat) => (
            <li>
              <div class="name">{cat.name}</div>
              <div class="rating">{cat.rating}</div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <p class="disclamer">
          These are just my recommendations, I would love to hear your opinion
          on the recommendations. It would be great if you contact me using
          links below and tell me your opinion.
        </p>
      </section>

      <footer class="footer">
        <div class="footer-header">
          <h3>Social Media Handles:</h3>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/adhish-bahl-4113591b7/"
            target="_blank"
            class="link hover"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="http://github.com/adhish-bahl"
            target="_blank"
            class="link hover"
          >
            {" "}
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://twitter.com/adhish_bahl"
            target="_blank"
            class="link hover"
          >
            Twitter
          </a>{" "}
          |{" "}
          <a
            href="https://instagram.com/adhish.bahl_"
            target="_blank"
            class="link hover"
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}
