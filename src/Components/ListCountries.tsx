import { useEffect, useState } from "react";

interface Country {
    name: string;
    region: string;
    population: number;
    capital: string;
    flags: any;
}

interface ListCountriesProps {
    searchInput: string | null; 
    selectedFilter: string | null;
}

// Les paramètres servent ici à pouvoir transférer aux composants enfants certaines function
// Tout est controlé ici car c'est ici qu'on fetch les pays et qu'on peut ducoup les comparé avec les filtres séléctionnés

const ListCountries = ({ searchInput, selectedFilter }: ListCountriesProps): JSX.Element => {
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch("/data.json");
                if (!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.status}`);
                }
                const data: Country[] = await response.json();
                setCountries(data);
            } catch (error) {
                console.error(`Error while fetching: ${error}`);
            }
        };

        fetchCountries();
    }, []);

    // Filtre par région
    const filteredByRegion = selectedFilter
        ? countries.filter((country) => country.region === selectedFilter)
        : countries;

    // Filtre par recherche
    const filteredCountries = searchInput
        ? filteredByRegion.filter((country) =>
              country.name.toLowerCase().includes(searchInput.toLowerCase())
          )
        : filteredByRegion;

    const countryList = filteredCountries.map((country: Country, index: number) => (
        <div key={index} className="country-container p-10">
            <div className="country-item bg-[#2B3844] hover:cursor-pointer">
                <img src={country.flags.svg} alt={`${country.name} flag`} />
                <div className="country-info p-8">
                    <h1 className="country font-black mb-3 text-white" >{country.name}</h1>
                    <p className="text-white">
                        Population: <span className="font-extralight">{country.population}</span>
                    </p>
                    <p className="text-white">
                        Region: <span className="font-extralight">{country.region}</span>
                    </p>
                    <p className="text-white">
                        Capital: <span className="font-extralight">{country.capital}</span>
                    </p>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="big-country-container grid gap-10 p-5 grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
            {filteredCountries.length > 0 ? countryList : <p className="text-white">Loading...</p>}
        </div>
    );
};

export default ListCountries;