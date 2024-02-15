import { useState } from "react";

const Searchbar = ({ value, onChange }) => {
  const [searchData, setSearchData] = useState(value || "");

  const inputHandler = (e) => {
    setSearchData(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };
  console.log(searchData);
  return (
    <input
      onChange={inputHandler}
      type="text"
      name="search"
      value={searchData}
      placeholder="Search"
    ></input>
  );
};
export default Searchbar;
