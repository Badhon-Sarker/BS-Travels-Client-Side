const CountryCard = ({country}) => {
  return (
    <div>
      <div className="card h-96 bg-base-100 shadow-lg image-full">
        <figure>
          <img src={country.image} alt='Photo' />
        </figure>
        <div className="card-body flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold font-playfair text-center my-2">
              {country.countryName}
            </h2>
            <p className="font-semibold font-playfair text-center my-3">{country.description}</p>
          </div>
          <div className="card-actions justify-center">
            <button className="btn ">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
