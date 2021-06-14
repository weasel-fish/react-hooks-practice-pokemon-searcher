import React, {useState} from "react";

function Search({filterPokemon}) {
  const [searchStr, setSearchStr] = useState('')

  function handleChange(e) {
    const str = e.target.value
    setSearchStr(str)
    filterPokemon(str)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleChange} value={searchStr} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
