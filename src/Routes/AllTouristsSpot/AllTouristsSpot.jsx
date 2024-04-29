import PlaceCard from "../../Components/PlaceCard/PlaceCard";
import { useEffect, useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";


const AllTouristsSpot = () => {
  const [places, setPlaces] = useState([]);
  const [displayPlace, setDisplayPlace] = useState([])
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    fetch("http://localhost:5000/allTouristsSpot", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // setPlaces(data);
        setDisplayPlace(data)
        setLoading(false);
      });
  }, []);

  const handleSort = () => {
   
    const sorted = displayPlace.sort((p1, p2) => {return (p1.average_cost - p2.average_cost)}
    );
    
    setDisplayPlace([...sorted])
    
  };

  if (loading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-center text-4xl font-playfair font-bold my-5">
        All Tourists Spot
      </h1>
      <div className="flex justify-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort <BiSolidDownArrow />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-52"
          >
            
              <li onClick={handleSort}>Cost</li>
            
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
        {displayPlace.map((place) => (
          <PlaceCard key={place._id} place={place}></PlaceCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpot;
