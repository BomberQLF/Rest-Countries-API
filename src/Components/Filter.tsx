interface FilterProps {
    onFilterChange: (region: string) => void;
}

const Filter = ({ onFilterChange }: FilterProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const region = e.target.value;
        onFilterChange(region);
    };

    return (
        <div className="filter">
            <div className="filter__container">
                <select
                    onChange={handleChange}
                    name="filter"
                    id="filter"
                    className="border-none outline-none font-light"
                >
                    <option value="" disabled selected>
                        Filter by Region
                    </option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;