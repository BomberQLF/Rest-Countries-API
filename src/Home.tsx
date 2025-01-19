import Navbar from "./Components/Navbar";
import Headings from "./Components/Headings";
import ListCountries from "./Components/ListCountries";


const Home = () => {

  return (
    <div className="app">
        < Navbar />
        < Headings />
        < ListCountries searchInput={null} selectedFilter={null} country={null} />
    </div>
  )
}

export default Home;