import Banner from "../../Components/Banner/Banner";
import Country from "../../Components/Country/Country";
// import AllTouristsSpot from "../AllTouristsSpot/AllTouristsSpot";


const Home = () => {
  

  return (
    <div className="my-8 md:my-10">

        <Banner></Banner>
      
      {/* <AllTouristsSpot></AllTouristsSpot> */}

      <Country></Country>
      
    </div>
  );
};

export default Home;
