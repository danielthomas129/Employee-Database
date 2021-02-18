import React from "react";

const Search = props => (
    <form className="py-1">
    <input className="form-control" type="search" placeholder="Search" onInput={props.handleInput} />
  </form>
    );



export default Search;
