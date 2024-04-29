
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from 'react-router-dom';
// ..
AOS.init();
const CountryCard = ({country}) => {
  return (
    <div>
      <div data-aos="fade-right" data-aos-duration="1100"  className="card h-96 bg-base-100 shadow-lg image-full">
        <figure>
          <img src={country.image} alt='Photo' />
        </figure>
        <div className="card-body flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h2 data-aos="fade-up" data-aos-duration="1100"  className="text-3xl font-bold font-playfair text-center my-2">
              {country.countryName}
            </h2>
            <p data-aos="zoom-in" data-aos-duration="1100" className="font-semibold font-playfair text-center my-3">{country.description}</p>
          </div>
          <div data-aos="fade-down" data-aos-duration="1100"  className="card-actions justify-center">
            <Link ><button className="btn ">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
