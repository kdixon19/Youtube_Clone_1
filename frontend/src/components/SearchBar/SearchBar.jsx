import React, { useState } from "react";
import "./SearchBar.css";

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
      <div>
      <input className="form-control" type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
      </div>
      <button type="submit">Search!</button>
    </form>
  );
};

export default SearchBar;
