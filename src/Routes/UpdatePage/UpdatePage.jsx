import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";


const UpdatePage = () => {

    const {id} = useParams()
    const {user} = useContext(AuthContext)
    const [updateData, setUpdateData] = useState([])
   

    useEffect(()=>{
        fetch(`https://assignment-10-server-liart-theta.vercel.app/updateSingle/${id}`,{
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            setUpdateData(data)
        })
    },[id])

    const handleUpdate = (e) =>{
        e.preventDefault()

        const form = e.target   
        const image = form.photo.value
        const tourists_spot_name = form.spotName.value
        const country_Name = form.country.value
        const location = form.location.value
        const description = form.description.value
        const average_cost = form.averageCost.value
        const seasonality = form.season.value
        const travel_time = form.travelTime.value 
        const totaVisitorsPerYear = form.visitors.value
        
        
        const data = {image, tourists_spot_name, country_Name, location, description, average_cost, seasonality, travel_time, totaVisitorsPerYear}


        fetch(`https://assignment-10-server-liart-theta.vercel.app/updatePage/${id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            
            if(data.modifiedCount > 0){
                toast.success("Successfully Updated")
            }
        })
    }
  return (
    <div>
      <Helmet><title>Update</title></Helmet>
      <h1 className="text-center text-4xl font-playfair font-bold my-5">
        Update Page
      </h1>

      <form onSubmit={handleUpdate}>
        <div className="border-2 p-2 md:p-5 w-full my-3">
          <div className="md:flex justify-between gap-2">
            <div className="w-full">
              <h1>Tourist Spot Name *</h1>
              <input
                className="w-full border-2 p-2 rounded-md mb-2"
                type="text"
                name="spotName"
                placeholder="Tourists spot name"
                id=""
                defaultValue={updateData.tourists_spot_name}
                required
              />
            </div>

            <div className="w-full">
              <h1>Location *</h1>
              <input
                className="w-full border-2 p-2 rounded-md mb-2"
                type="text"
                name="location"
                placeholder="Location"
                id=""
                defaultValue={updateData.location}
                required
              />
            </div>
          </div>

          <div className="md:flex justify-between gap-2 my-2">
            <div className="w-full">
              <h1>Select Country *</h1>
              <select
                name="country"
                className="select select-bordered w-full mb-2"
                required
                
              >
                <option defaultValue={updateData.country_Name}>{updateData.country_Name}</option>
                <option value={"France"}>France</option>
                <option value={"Italy"}>Italy</option>
                <option value={"Spain"}>Spain</option>
                <option value={"England"}>England</option>
                <option value={"Netherlands"}>Netherlands</option>
                <option value={"Switzerland"}>Switzerland</option>
              </select>
            </div>

            <div className="w-full">
              <h1>Select Seasonality *</h1>
              <select
                name="season"
                className="select select-bordered w-full mb-2"
                required
              >
              
                <option defaultValue={updateData.seasonality}>{updateData.seasonality}</option>
                <option value={"Spring"}>Spring</option>
                <option value={"Summer"}>Summer</option>
                <option value={"Autumn"}>Autumn</option>
                <option value={"Winter"}>Winter</option>
              </select>
            </div>
          </div>

          <div>
            <h1>Description *</h1>
            <textarea
              className="textarea textarea-bordered w-full h-48"
              name="description"
              placeholder="Short description"
              required
              defaultValue={updateData.description}
            ></textarea>
          </div>

          <div className="md:flex justify-between gap-2">
            <div className="w-full">
              <h1>Avarage Cost ($) *</h1>
              <input
                className="w-full border-2 p-2 rounded-md mb-2"
                type="number"
                name="averageCost"
                placeholder="Avarage Cost"
                id=""
                required
                defaultValue={updateData.average_cost}
              />
            </div>

            <div className="w-full">
              <h1>Travel Time (/days) *</h1>
              <input
                className="w-full border-2 p-2 rounded-md mb-2"
                type="number"
                name="travelTime"
                placeholder="Travel time"
                id=""
                required
                defaultValue={updateData.travel_time}
              />
            </div>
          </div>

          <div className="md:flex justify-between gap-2">
            <div className="w-full">
              <h1>Photo URL *</h1>
              <input
                className="w-full border-2 p-2 rounded-md mb-2"
                type="text"
                name="photo"
                placeholder="Photo URl"
                id=""
                required
                defaultValue={updateData.image}
              />
            </div>

            <div className="w-full">
              <h1>Total Visitors (/Year) *</h1>
              <input
                className="w-full border-2 p-2 rounded-md mb-2"
                type="number"
                name="visitors"
                placeholder="Total visitors"
                id=""
                required
                defaultValue={updateData.totaVisitorsPerYear}
              />
            </div>
          </div>


          <div className="flex justify-center my-2">
            <button className="w-full md:w-1/2 btn">Update </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdatePage;
