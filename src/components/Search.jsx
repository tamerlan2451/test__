import React from "react";
import { Link } from "react-router-dom";
import search from "../assets/search.svg";

const Search = ({ setValue, value, handleGetValue, handleCancel }) => {
  return (
    <div className="header">
      <div className="searchItems">
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="Поиск"
          type="text"
        />
        <button onClick={handleGetValue}>
          <img src={search} alt="" />
        </button>
      </div>

      <Link onClick={handleCancel} to="/1" className="exit">
        Назад
      </Link>
    </div>
  );
};

export default Search;
