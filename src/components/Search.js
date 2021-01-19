import React, { useState } from "react";

function Search({ setSearchInput }) {
  const [insideSearchComonentInput, setInsideSearchComponentInput] = useState("")
  
  function handleSubmit(e) {
    e.preventDefault();
    setSearchInput(insideSearchComonentInput)
  }


  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={insideSearchComonentInput}
        onChange={(e) => setInsideSearchComponentInput(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
