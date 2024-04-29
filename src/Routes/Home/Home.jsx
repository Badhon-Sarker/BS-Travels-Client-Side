import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import HomeCard from "../../Components/HomeCard/HomeCard";
import CountryCard from "../../Components/CountryCard/CountryCard";


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import SectionOne from "../../Components/SectionOne/SectionOne";
import SectionTwo from "../../Components/SectionTwo/SectionTwo";
// ..
AOS.init();


const Home = () => {
  const [data, setData] = useState([]);
  const [countryData, setCountryData] = useState([])
  

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

    <div className="my-6">

       

       
      <Banner></Banner>


      {/* tourist spot section */}
      <div  className="my-10">
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

      <div  className="my-10">
        <h1 className="text-center text-4xl font-playfair font-bold my-5">
          Country
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
          {countryData.map((country) => (
            <CountryCard key={country._id} country={country}></CountryCard>
          ))}
        </div>
      </div>

       {/* secion-one */}
      <SectionOne></SectionOne>



       {/* section-2 */}

       <SectionTwo></SectionTwo>


    </div>
  );
};

export default Home;
