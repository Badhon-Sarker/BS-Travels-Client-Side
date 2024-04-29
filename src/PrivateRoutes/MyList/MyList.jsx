import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { MdDelete } from "react-icons/md";
import { FaPenNib } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user?.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data);
        setLoading(false);
      });
  }, [user.email]);

  const handleDelete =() =>{
    fetch(`http://localhost:5000/delete/:id`)
    .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
    
  }

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
        My List
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="font-bold text-black md:text-xl">
              <th>Serial</th>
              <th>Name</th>
              <th>Location</th>
              <th>Cost</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {places.map((place, idx) => 
              <tr key={place._id}>
                <th>{idx+1}</th>
                <td>{place.tourists_spot_name}</td>
                <td>{place.location}</td>
                <td>{place.average_cost}</td>
                <td><Link to={`/updatePage/${place._id}`}><button className="bg-green-400 text-xl rounded-lg btn text-white"><FaPenNib /></button></Link></td>
                <td><button onClick={handleDelete} className="bg-error text-xl rounded-lg btn text-white"><MdDelete /></button></td>
                
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
