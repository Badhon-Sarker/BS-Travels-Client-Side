import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Helmet } from "react-helmet-async";
// ..
AOS.init();

const Details = () => {
  const { id } = useParams();
  const [detailsData, setDetailsData] = useState([]);

  useEffect(() => {
    fetch(`https://assignment-10-server-liart-theta.vercel.app/detailsData/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setDetailsData(data);
      });
  }, [id]);

  return (
    <div className="p-2 md:p-5 lg:p-8 ">
        <Helmet><title>Details</title></Helmet>
      <div className="flex justify-center">
        <h1 data-aos="fade-down" data-aos-duration="1000" className="text-center text-4xl font-playfair font-bold my-5">
        {detailsData.tourists_spot_name}
          
        </h1>
      </div>

      <div data-aos="fade-up" data-aos-duration="1000" className="flex justify-center">
        <img className="w-10/12" src={detailsData.image} alt="" />
      </div>

      <div className="flex justify-evenly">
        <div>
          <h1 data-aos="fade-down" data-aos-duration="1300" className="text-center md:text-xl font-playfair font-bold my-5">
            <span>Country: </span>
            {detailsData.country_Name}
          </h1>
        </div>
        <div>
          <h1 data-aos="fade-down" data-aos-duration="1300" className="text-center md:text-xl font-playfair font-bold my-5">
            <span>Location: </span>
            {detailsData.location}
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 data-aos="fade-right" data-aos-duration="1200" className="text-center md:text-xl font-playfair font-bold my-1">
            Seasonality: {detailsData.seasonality}
          </h1>
        </div>
        <div>
          {" "}
          <h1 data-aos="fade-right" data-aos-duration="1200" className="text-center md:text-xl font-playfair font-bold my-1">
            Travel Time: {detailsData.travel_time}
          </h1>
        </div>
        <div>
          <h1 data-aos="fade-right" data-aos-duration="1300" className="text-center md:text-xl font-playfair font-bold my-1">
            Total Visitor: {detailsData.totaVisitorsPerYear} /Y
          </h1>
        </div>
        <div>
          {" "}
          <h1 data-aos="fade-right" data-aos-duration="1300" className="text-center md:text-xl font-playfair font-bold my-1">
            Avarage Cost: {detailsData.average_cost}
          </h1>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="1200" className="text-center font-playfair font-md my-1">
        {detailsData.description}
      </div>
    </div>
  );
};

export default Details;
