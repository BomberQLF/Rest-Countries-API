import { useEffect, useState } from "react";

const ListCountries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch("/public/data.json"); 
                if (!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.status}`);
                }
                const data = await response.json();
                setCountries(data);
            } catch (error) {
                throw new Error(`Error while fetching : ${error}`);
            }
        };
        fetchCountries();
    }, []);
    console.log(countries);
    
    // Mapper les pays avec le système de key et li
}

export default ListCountries;