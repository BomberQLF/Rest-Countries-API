const Filter = () => {
    // construire la logique plus tard une fois que j'ai affiché toutes les données
    // Comparer la région sélectionnée avec la valeur de la région dans le JSON avec un '==='.

    return (
        <div className="filter">
            <div className="filter__container">
                <select name="filter" id="filter" className="border-none outline-none font-light">
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