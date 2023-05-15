import React, { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(search);
    setSearch("");
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label> Search For Videos!{""}</label>
      <br />
      <input type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
      <button type="submit">Search!</button>
    </form>
  );
};

export default SearchBar;
