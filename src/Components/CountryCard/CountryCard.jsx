import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Link, NavLink, Navigate } from "react-router-dom";
// ..
AOS.init();
const CountryCard = ({ country }) => {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1100"
      className="card h-96 bg-base-100 shadow-lg image-full p-2"
    >
      <figure>
        <img src={country.image} alt="Photo" />
      </figure>
      <div className="card-body flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h2
            data-aos="fade-up"
            data-aos-duration="1100"
            className="text-3xl font-bold font-playfair text-center my-2"
          >
            {country.countryName}
          </h2>
          <p
            data-aos="zoom-in"
            data-aos-duration="1100"
            className="font-semibold font-playfair text-center my-3"
          >
            {country.description}
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1100"
          className="card-actions justify-center"
        >
          <Link>
            <button className="btn ">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;

{
  /* <div
  data-aos="fade-right"
  data-aos-duration="1100"
  className="card h-96 bg-base-100 shadow-lg image-full p-2"
>
  <figure>
    <img src={} alt="Photo" />
  </figure>
  <div className="card-body flex justify-center items-center">
    <div className="flex flex-col justify-center items-center">
      <h2
        data-aos="fade-up"
        data-aos-duration="1100"
        className="text-3xl font-bold font-playfair text-center my-2"
      >
        {country.countryName}
      </h2>
      <p
        data-aos="zoom-in"
        data-aos-duration="1100"
        className="font-semibold font-playfair text-center my-3"
      >
        {country.description}
      </p>
    </div>
    <div
      data-aos="fade-down"
      data-aos-duration="1100"
      className="card-actions justify-center"
    >
      <Link>
        <button className="btn ">View Details</button>
      </Link>
    </div>
  </div>
</div>; */
}

// <div>
//       <div
//       data-aos="fade-up"
//       data-aos-duration="1100"
//       className="p-1 flex justify-center items-center"
//     >
//       <div className="card bg-base-100 shadow-xl">
//         <figure>
//           <img className="h-52" src={country.image} alt="Photo" />
//         </figure>

//         <div className="card-body">
//           <div className="flex justify-center">
//             <h2
//               data-aos="fade-right"
//               data-aos-duration="1100"
//               className="text-center card-title"
//             >
//               {country.tourists_spot_name}
//             </h2>
//           </div>

//           <div className="flex justify-evenly">
//             <div>
//               <h1
//                 data-aos="fade-down"
//                 data-aos-duration="1200"
//                 className="font-semibold"
//               >
//                 Location: <span>{country.country_Name}</span>
//               </h1>
//             </div>

//             <div>
//               <h1
//                 data-aos="fade-down"
//                 data-aos-duration="1200"
//                 className="font-semibold"
//               >
//                 Travel Time: <span>{country.country_Name}</span>
//               </h1>
//             </div>
//           </div>

//           <div className="flex justify-evenly">
//             <div>
//               <h1
//                 data-aos="fade-up"
//                 data-aos-duration="1200"
//                 className="font-semibold"
//               >
//                 Season: <span>{country.country_Name}</span>
//               </h1>
//             </div>

//             <div>
//               <h1
//                 data-aos="fade-up"
//                 data-aos-duration="1200"
//                 className="font-semibold"
//               >
//                 Travel Time: <span>{time}</span>
//               </h1>
//             </div>
//           </div>

//           <div className="card-actions justify-center">
//             <Link
//               data-aos="zoom-in"
//               data-aos-duration="1200"
//               to={`/details/${place._id}`}
//             >
//               <button className="btn">View Details</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
