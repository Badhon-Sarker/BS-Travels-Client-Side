const Country = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-playfair font-bold my-5">
        Countries
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* card-one */}
        <div className="card  bg-base-100 shadow-lg image-full">
          <figure>
            <img
              src="https://i.ibb.co/1bCcG7W/france.webp"
              alt="France"
            />
          </figure>
          <div className="card-body flex justify-center items-center">
            <div className="flex flex-col justify-center items-center"><h2 className="text-3xl font-bold font-playfair text-center my-2">France</h2>
            <p className="font-semibold font-playfair text-center my-3">France: A timeless blend of art, culture, and cuisine. From the romance of Paris to the charm of Provence, explore endlessly</p></div>
            <div className="card-actions justify-center">
              <button className="btn ">View Details</button>
            </div>
          </div>
        </div>

        {/* card-two */}
        <div className="card bg-base-100 shadow-lg image-full">
          <figure>
            <img
              src="https://i.ibb.co/xzR6mxb/Amalfi-Italy.webp"
              alt="Italy"
            />
          </figure>
          <div className="card-body flex justify-center items-center">
            <div className="flex flex-col justify-center items-center"><h2 className="text-3xl font-bold font-playfair text-center my-2">Italy</h2>
            <p className="font-semibold font-playfair text-center my-3">Italy: Where history, art, and gastronomy unite in a symphony of beauty. From the ancient ruins of Rome to the stunning Amalfi Coast, indulge in la dolce vita</p></div>
            <div className="card-actions justify-center">
              <button className="btn ">View Details</button>
            </div>
          </div>
        </div>

        {/* card-three*/}
        <div className="card bg-base-100 shadow-lg image-full">
          <figure>
            <img
              src="https://i.ibb.co/m0dZhjR/images-2.jpg"
              alt="Spain"
            />
          </figure>
          <div className="card-body flex justify-center items-center">
            <div className="flex flex-col justify-center items-center"><h2 className="text-3xl font-bold font-playfair text-center my-2">Spain</h2>
            <p className="font-semibold font-playfair text-center my-3">Spain: Vibrant and diverse, where siestas meet fiestas. From the bustling streets of Barcelona to the flamenco rhythms of Andalusia, discover endless passion.</p></div>
            <div className="card-actions justify-center">
              <button className="btn">View Details</button>
            </div>
          </div>
        </div>


        {/* card-four */}
        <div className="card  bg-base-100 shadow-lg image-full">
          <figure>
            <img
              src="https://i.ibb.co/8NKGn22/images-3.jpg"
              alt="England
              "
            />
          </figure>
          <div className="card-body flex justify-center items-center">
            <div className="flex flex-col justify-center items-center"><h2 className="text-3xl font-bold font-playfair text-center my-2">England</h2>
            <p className="font-semibold font-playfair text-center my-3">England: A tapestry of tradition and innovation. Explore historic landmarks in London, quaint villages in the countryside, and the rugged beauty of its coastline.</p></div>
            <div className="card-actions justify-center">
              <button className="btn ">View Details</button>
            </div>
          </div>
        </div>


        {/* card-five */}
        <div className="card  bg-base-100 shadow-lg image-full">
          <figure>
            <img
              src="https://i.ibb.co/Zz36qbQ/Child-in-a-tulip-field.jpg"
              alt="Netherlands"
            />
          </figure>
          <div className="card-body flex justify-center items-center">
            <div className="flex flex-col justify-center items-center"><h2 className="text-3xl font-bold font-playfair text-center my-2">Netherlands</h2>
            <p className="font-semibold font-playfair text-center my-3">Netherlands: Where windmills spin tales of history and tulip fields paint the landscape. Explore charming canals, vibrant cities, and a rich cultural heritage</p></div>
            <div className="card-actions justify-center">
              <button className="btn">View Details</button>
            </div>
          </div>
        </div>


        {/* card-six */}
        <div className="card  bg-base-100 shadow-lg image-full">
          <figure>
            <img
              src="https://i.ibb.co/m6FVJ1c/lauterbrunnen.webp"
              alt="Switzerland"
            />
          </figure>
          <div className="card-body flex justify-center items-center">
            <div className="flex flex-col justify-center items-center"><h2 className="text-3xl font-bold font-playfair text-center my-2">Switzerland</h2>
            <p className="font-semibold font-playfair text-center my-3">Switzerland: Where majestic Alps meet pristine lakes. Experience breathtaking scenery, world-class skiing, and charming cities nestled in the heart of Europe's playground</p></div>
            <div className="card-actions justify-center">
              <button className="btn">View Details</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Country;
