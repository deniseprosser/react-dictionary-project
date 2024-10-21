import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "aab3d3obc0205ebt561454f09dff85ec";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary mt-5">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeyword} />
      </form>
      <Result result={result} />
    </div>
  );
}
