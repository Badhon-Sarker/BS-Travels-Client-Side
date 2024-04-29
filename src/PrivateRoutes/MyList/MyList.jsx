import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { MdDelete } from "react-icons/md";
import { FaPenNib } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [control, setControl] = useState(false)

  useEffect(() => {
    fetch(`https://assignment-10-server-liart-theta.vercel.app/myList/${user?.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data);
        setLoading(false);
      });
  }, [user, control]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-10-server-liart-theta.vercel.app/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            setControl(!control)
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
            });
          });
      }
    });
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
      <Helmet><title>My List</title></Helmet>
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
            {places.map((place, idx) => (
              <tr key={place._id}>
                <th>{idx + 1}</th>
                <td>{place.tourists_spot_name}</td>
                <td>{place.location}</td>
                <td>{place.average_cost}</td>
                <td>
                  <Link to={`/updatePage/${place._id}`}>
                    <button className="bg-green-400 text-xl rounded-lg btn text-white">
                      <FaPenNib />
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(place._id)}
                    className="bg-error text-xl rounded-lg btn text-white"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
