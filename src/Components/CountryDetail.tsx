import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import BackArrow from '../assets/back-arrow.svg';
import Navbar from "./Navbar";

const CountryDetail = () => {
    const { id } = useParams();
    const location = useLocation()
    console.log(location.state.name);


    return (
        <div className="country-detail">
            <Navbar />
            <div className="p-8">
                <div className="back-container bg-[#2B3844] px-5 py-2 w-fit">
                    <Link to="/">
                        <div className="details-container flex gap-3">
                            <img src={BackArrow} alt="" />
                            <span className="text-white font-thin">Back</span>
                        </div>
                    </Link>
                </div>

                <div className="big-detail-container">
                    <div className="mt-10">
                        <img src={location.state.flags.svg} alt={"Flag of " + location.state.name} />
                    </div>
                    <div className="mt-8">
                        <h1 className="text-2xl text-white font-medium">{location.state.name}</h1>
                    </div>
                    <div className="mt-6">
                        <p className="text-white">Native Name :<span className="font-thin"> {location.state.nativeName}</span></p>
                        <p className="text-white">Population :<span className="font-thin"> {location.state.population}</span></p>
                        <p className="text-white">Region :<span className="font-thin"> {location.state.region}</span></p>
                        <p className="text-white">Sub Region :<span className="font-thin"> {location.state.subregion}</span></p>
                        <p className="text-white">Capital :<span className="font-thin"> {location.state.capital}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryDetail;