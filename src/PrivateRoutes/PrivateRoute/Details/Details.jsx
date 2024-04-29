import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {

    const {id} = useParams()
    const [detailsData, setDetailsData] = useState([])

    
    useEffect(()=>{
        fetch(`http://localhost:5000/detailsData/${id}`,{
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            setDetailsData(data)
        })
    },[id])

    return (
        <div className="p-2 md:p-5 lg:p-8 ">
            <div className="flex justify-center">
                <h1 className="text-center text-4xl font-playfair font-bold my-5">{detailsData.tourists_spot_name}</h1>
            </div>

            <div className="flex justify-center">
                <img className="w-10/12" src={detailsData.image} alt="" />
            </div>
            
            <div className="flex justify-evenly">
                <div><h1 className="text-center md:text-xl font-playfair font-bold my-5"><span>Country: </span>{detailsData.country_Name}</h1></div>
                <div><h1 className="text-center md:text-xl font-playfair font-bold my-5"><span>Location: </span>{detailsData.location}</h1></div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div><h1 className="text-center md:text-xl font-playfair font-bold my-1">Seasonality: {detailsData.seasonality}</h1></div>
                <div> <h1 className="text-center md:text-xl font-playfair font-bold my-1">Travel Time: {detailsData.travel_time}</h1></div>
                <div><h1 className="text-center md:text-xl font-playfair font-bold my-1">Total Visitor: {detailsData.totaVisitorsPerYear} /Y</h1></div>
                <div> <h1 className="text-center md:text-xl font-playfair font-bold my-1">Avarage Cost: {detailsData.average_cost}</h1></div>     
               
            </div>

            <div className="text-center font-playfair font-md my-1">
                {detailsData.description}
            </div>


        </div>
    );
};

export default Details;