import Banner from "../../Components/Banner/Banner";
import TouristSpot from "../../Components/TouristSpot/TouristSpot";
import AllTouristsSpot from "../AllTouristsSpot/AllTouristsSpot";


const Home = () => {
  

  return (
    <div className="my-8 md:my-10">

        <Banner></Banner>
      
      <AllTouristsSpot></AllTouristsSpot>
      
    </div>
  );
};

export default Home;
