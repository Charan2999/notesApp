import React from "react";
import { MdSearch } from "react-icons/md";
import "../index.css";
export default function Search({ handleSearchNote }) {
  return (
    <div className="search new container">
      <MdSearch className="search-icon" size="1.3rem" />
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        className="box"
        type="text"
        placeholder="search"
      />
    </div>
  );
}
