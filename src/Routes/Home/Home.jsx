import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import Country from "../../Components/Country/Country";
import HomeCard from "../../Components/HomeCard/HomeCard";
import CountryCard from "../../Components/CountryCard/CountryCard";
// import AllTouristsSpot from "../AllTouristsSpot/AllTouristsSpot";

const Home = () => {
  const [data, setData] = useState([]);
  const [countryData, setCountryData] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // setPlaces(data);
        setData(data);
        
      });
  }, []);



  useEffect(() => {
    fetch("http://localhost:5000/country", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // setPlaces(data);
        setCountryData(data);
        
      });
  }, []);



  return (

    <div className="my-6 md:mb-10 md:mt-6">
      <Banner></Banner>


      {/* tourist spot section */}
      <div className="my-10">
        <h1 className="text-center text-4xl font-playfair font-bold my-5">
          Tourists Spot
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
          {data.map((place) => (
            <HomeCard key={place._id} place={place}></HomeCard>
          ))}
        </div>
      </div>


         {/* country section */}

      <div className="my-10">
        <h1 className="text-center text-4xl font-playfair font-bold my-5">
          Country
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
          {countryData.map((country) => (
            <CountryCard key={country._id} country={country}></CountryCard>
          ))}
        </div>
      </div>


    </div>
  );
};

export default Home;
