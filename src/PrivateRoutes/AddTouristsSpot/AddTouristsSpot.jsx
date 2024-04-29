import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const AddTouristsSpot = () => {

    const {user} = useContext(AuthContext)
   


    const handleSubmit = (e) =>{
        e.preventDefault()

        const form = e.target  
        const image = form.photo.value
        const tourists_spot_name = form.spotName.value
        const country_Name = form.country.value
        const location = form.location.value
        const description = form.description.value
        const average_cost = parseInt(form.averageCost.value)
        const seasonality = form.season.value
        const travel_time = form.travelTime.value 
        const totaVisitorsPerYear = form.visitors.value
        const email = user.email
        const name = user.displayName
        
        const data = {image, tourists_spot_name, country_Name, location, description, average_cost, seasonality, travel_time, totaVisitorsPerYear, email, name}

        fetch(`http://localhost:5000/addTouristsSpot`, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{

            if(data.insertedId){
                toast.success("Successfully Added")
                form.reset()

            } 
        })       
    }

  return (
    <div data-aos="zoom-in" data-aos-duration="1000">
      <h1 className="text-5xl font-playfair font-bold text-center my-5">
        Add Tourists Spot
      </h1>
      <form onSubmit={handleSubmit}>
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
                required
              />
            </div>
          </div>

          <div className="md:flex justify-between gap-2 my-2">
            <div className="w-full">
              <h1>Select Country *</h1>
              <select name="country"  className="select select-bordered w-full mb-2" required>
                
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
              <select name="season" className="select select-bordered w-full mb-2" required>
              
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
              />
            </div>
          </div>

          <div className="md:flex justify-between gap-2">
            <div className="w-full">
              <h1>User Name</h1>
              <input
                className="w-full border-2 p-2 rounded-md mb-2"
                type="text"
                name="name"
                placeholder="User name"
                id=""
                defaultValue= {user?.displayName}
                
              />
            </div>

            <div className="w-full">
              <h1>User Email</h1>
              <input
                className="w-full border-2 p-2 rounded-md mb-2"
                type="email"
                name=""
                placeholder="User email"
                id="email"
                defaultValue={user?.email}
                required
               
              />
            </div>
          </div>

          <div className="flex justify-center my-2">
            <button className="w-full md:w-1/2 btn">Add </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTouristsSpot;
