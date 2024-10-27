import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data);
  }

  function search() {
    let apiKey = "aab3d3obc0205ebt561454f09dff85ec";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary mt-5">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeyword}
              defaultValue={props.defaultKeyword}
              className="search-bar"
            />
            <input type="submit" value="Search" className="search-button" />
          </form>
        </section>
        <Result result={result} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
