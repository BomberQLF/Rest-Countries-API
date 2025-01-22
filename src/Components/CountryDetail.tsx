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

                <div className="mt-10">
                    <img src={location.state.flags.svg} alt={"Flag of " + location.state.name}/>
                </div>
            </div>
        </div>
    )
}

export default CountryDetail;