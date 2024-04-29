import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const HomeCard = ({ place }) => {
  const photo = place.image;
  const spotName = place.tourists_spot_name;
  const country = place.country_Name;
  const location = place.location;
  const description = place.description;
  const cost = place.average_cost;
  const seasonality = place.seasonality;
  const time = place.travel_time;
  const visitors = place.totaVisitorsPerYear;
  const email = place.email;
  const name = place.name;

  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="1100"
        className="p-1 flex justify-center items-center"
      >
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="h-52" src={photo} alt="Photo" />
          </figure>

          <div className="card-body">
            <div className="flex justify-center">
              <h2
                data-aos="fade-right"
                data-aos-duration="1100"
                className="text-center card-title"
              >
                {spotName}
              </h2>
            </div>

            <div data-aos="fade-right" data-aos-duration="1100">
              <p>{description.slice(" ", 60)}...</p>
            </div>

            <div className="flex justify-evenly">
              <div>
                <h1
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  className="font-semibold"
                >
                  Location: <span>{location}</span>
                </h1>
              </div>

              <div>
                <h1
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  className="font-semibold"
                >
                  Cost: <span>{cost}</span>
                </h1>
              </div>
            </div>

            <div className="flex justify-evenly">
              <div>
                <h1
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="font-semibold"
                >
                  Season: <span>{seasonality}</span>
                </h1>
              </div>

              <div>
                <h1
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="font-semibold"
                >
                  Travel Time: <span>{time}</span>
                </h1>
              </div>
            </div>

            <div className="card-actions justify-center">
              <Link
                data-aos="zoom-in"
                data-aos-duration="1200"
                to={`/details/${place._id}`}
              >
                <button className="btn">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;

