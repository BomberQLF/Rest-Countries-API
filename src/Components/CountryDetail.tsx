import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import ListCountries from "./ListCountries";
import { useLocation } from "react-router-dom";

const CountryDetail = () => {
    const { id } = useParams();
    const location = useLocation()
    console.log(location.state.name);
    

    return (
        <div>
            <h1>Country Detail</h1>
            <p>Country ID: {id}</p>
        </div>
    )
}

export default CountryDetail;