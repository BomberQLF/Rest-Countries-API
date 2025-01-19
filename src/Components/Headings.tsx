import { useState } from "react";
import SearchIcon from "../assets/search.svg";
import Filter from "./Filter";
import ListCountries from "./ListCountries";

const Headings = () => {
    const [searchInput, setSearchInput] = useState<string | null>(null);
    const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setSearchInput(value);
    };

    const handleFilterChange = (region: string): void => {
        setSelectedFilter(region);
    };

    return (
        <div>
            <div className="search-bar sm:flex sm:items-center sm:justify-between">
                <div className="searchbar flex gap-4 mx-8 my-12 px-8 py-4 bg-[#2B3844] lg:w-[400px]">
                    <img src={SearchIcon} alt="Search Icon" />
                    <input
                        className="border-none bg-transparent focus:outline-none text-white"
                        type="text"
                        id="search"
                        placeholder="Search for a country..."
                        onChange={handleInput}
                    />
                </div>
                <div className="filter-container py-4 px-8 mx-8 bg-[#2B3844] w-[200px]">
                    <Filter onFilterChange={handleFilterChange} />
                </div>
            </div>

            <ListCountries searchInput={searchInput} selectedFilter={selectedFilter} country={null}  />
        </div>
    );
};

export default Headings;