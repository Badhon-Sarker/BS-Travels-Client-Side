const PlaceCard = ({ place }) => {

    
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
    <div className="p-1">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="h-52" src={photo} alt={spotName} />
        </figure>
        <div className="card-body pt-2 font-playfair">
          <div className="flex justify-center">
            <h2 className="card-title">{spotName}</h2>
          </div>
          <div>
            <p>{description.slice(" ", 60)}...</p>
          </div>

          <div className="flex justify-evenly">
            {" "}
            <div>
              <h1 className="font-semibold">
                Location: <span>{location}</span>
              </h1>
            </div>{" "}
            <div>
              <h1 className="font-semibold">Cost: {cost} $</h1>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-1">
            <div>
              <h1 className="font-semibold">
                Season: <span className="text-gray-600">{seasonality}</span>{" "}
              </h1>
            </div>{" "}
            <div>
              <h1 className="font-semibold">
                Visitors: <span className="text-gray-600">{visitors} /Y</span> 
              </h1>
            </div>
          </div>

          <div className="card-actions justify-center">
            <button className="btn">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
