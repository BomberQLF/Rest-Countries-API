import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import BackArrow from '../assets/back-arrow.svg';
import Navbar from "./Navbar";

const CountryDetail = () => {
    const { id } = useParams();
    const location = useLocation()
    console.log(id);


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

                <div className="big-detail-container lg:flex lg:gap-80 lg:items-center">
                    <div className="mt-10">
                        <img className="lg:w-[560px] lg:h-[400px]" src={location.state.flags.svg} alt={"Flag of " + location.state.name} />
                    </div>
                    <div className="big-wrapper">
                        <div className="wrapper">
                            <div className="mt-8">
                                <h1 className="text-2xl text-white font-medium lg:mb-4">{location.state.name}</h1>
                            </div>
                            <div className="avg-details lg:flex lg:gap-5">
                                <div className="mt-6 lg:mt-0 mb-12">
                                    <p className="text-white">Native Name :<span className="font-thin"> {location.state.nativeName}</span></p>
                                    <p className="text-white">Population :<span className="font-thin"> {location.state.population}</span></p>
                                    <p className="text-white">Region :<span className="font-thin"> {location.state.region}</span></p>
                                    <p className="text-white">Sub Region :<span className="font-thin"> {location.state.subregion}</span></p>
                                    <p className="text-white">Capital :<span className="font-thin"> {location.state.capital}</span></p>
                                </div>
                                <div className="other-details">
                                    <p className="text-white">Top Level Domain :<span className="font-thin"> {location.state.topLevelDomain}</span></p>
                                    <p className="text-white">Currencies :<span className="font-thin"> {location.state.currencies[0].code}</span></p>
                                    <p className="text-white">Languages :<span className="font-thin"> {location.state.languages[0].name}</span></p>
                                </div>
                            </div>
                            <div className="borders">
                                    <h2 className="text-white mt-10">Border Countries:</h2>
                                    {location.state.borders && location.state.borders.length > 0 ? (
                                        <div className="border-countries flex gap-2 flex-wrap mt-4">
                                            {location.state.borders.map((border: any, index: number) => (
                                                <span key={index} className="bg-[#2B3844] px-4 py-1 rounded text-white font-thin">
                                                    {border}
                                                </span>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-white font-thin mt-2">No border countries available.</p>
                                    )}
                                </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryDetail;