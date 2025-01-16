import { useEffect, useState } from "react";

interface Country {
    name: string;
    region: string;
    population: number;
    capital: string;
    flags: any;
}

const ListCountries = (): JSX.Element => {
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

    const countryList = countries.map((country: Country, index: number) => (
        <div key={index} className="country-container p-10">
            <div className="contry-item bg-white hover:cursor-pointer">
                <img src={country.flags.svg} alt="" />
                <div className="country-info p-8">
                    <h1 className="country font-black mb-3">{country.name}</h1>
                    <p>Population: <span className="font-extralight">{country.population}</span></p>
                    <p>Region: <span className="font-extralight">{country.region}</span></p>
                    <p>Capital: <span className="font-extralight">{country.capital}</span></p>
                </div>
            </div>
        </div>
    ));
    
    return (
        <div className="big-country-container grid gap-10 p-5 
            grid-cols-1 
            sm:grid-cols-3 
            md:grid-cols-4">
            {countries.length > 0 ? (
                countryList
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
            }

export default ListCountries;