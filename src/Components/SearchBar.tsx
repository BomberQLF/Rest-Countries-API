import { useState } from "react";
import SeachIcon from '../assets/search.svg';


const SearchBar = () => {

const [searchInput, setSearchInput] = useState(null);

const handleInput = (e:any): void => {
    const value = e.target.value;
    setSearchInput(value);
    return value;
}

    return (
        <div className="searchbar flex gap-4 mx-8 my-12 px-8 py-4  bg-white shadow-[0px_0px_6px_1px_rgba(181,181,181,1)]">
            <img src={SeachIcon} alt="Search Icon" />
            <input className="border-none bg-transparent focus:outline-none"  type="text" id="search" placeholder="Search for a country..." onChange={handleInput} />
        </div>
    )
}

export default SearchBar;