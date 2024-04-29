const SectionTwo = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-playfair font-bold my-5">
        Trending Now
      </h1>

      <div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {/* no-1 */}
          <div
            data-aos="fade-up"
            data-aos-duration="1100"
            className="card h-96 bg-base-100 shadow-lg image-full"
          >
            <figure>
              <img src="https://i.ibb.co/BwCGNd3/eiffel-tower-view.jpg" alt="Photo" />
            </figure>
            <div className="card-body flex justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="1100"
                  className="text-3xl font-bold font-playfair text-center my-2"
                >
                  Eiffel Tower
                </h2>
                <p
                  data-aos="zoom-in"
                  data-aos-duration="1100"
                  className="font-semibold font-playfair text-center my-3"
                >
                  The iconic Eiffel Tower is a symbol of Paris and one of the
                  most visited landmarks in the world. Constructed in 1889 as
                  the entrance to the 1889 World's Fair, it stands at 324 meters
                  tall and offers stunning views of the city from its
                  observation decks.
                </p>
              </div>
            </div>
          </div>


          
            {/* no-2 */}
            <div
            data-aos="fade-up"
            data-aos-duration="1100"
            className="card h-96 bg-base-100 shadow-lg image-full"
          >
            <figure>
              <img src="https://i.ibb.co/C7P0QQ0/roman-coliseum.jpg" alt="Photo" />
            </figure>
            <div className="card-body flex justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="1100"
                  className="text-3xl font-bold font-playfair text-center my-2"
                >
                  Colosseum
                </h2>
                <p
                  data-aos="zoom-in"
                  data-aos-duration="1100"
                  className="font-semibold font-playfair text-center my-3"
                >
                  The majestic Colosseum stands as a testament to ancient Roman engineering and a symbol of Italy's rich history.
                </p>
              </div>
            </div>
          </div>

          
            {/* no-3 */}
            <div
            data-aos="fade-up"
            data-aos-duration="1100"
            className="card h-96 bg-base-100 shadow-lg image-full"
          >
            <figure>
              <img src="https://i.ibb.co/mhKRd5W/Grand-Canal-Venice.webp" alt="Photo" />
            </figure>
            <div className="card-body flex justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="1100"
                  className="text-3xl font-bold font-playfair text-center my-2"
                >
                  EVenice Canals
                </h2>
                <p
                  data-aos="zoom-in"
                  data-aos-duration="1100"
                  className="font-semibold font-playfair text-center my-3"
                >
                  Experience the romance of Venice as you glide through its intricate network of canals aboard a gondola.
                </p>
              </div>
            </div>
          </div>


        </div>

       


      </div>
    </div>
  );
};

export default SectionTwo;

{
  /* <div
data-aos="fade-down"
data-aos-duration="1100"
className="card-actions justify-center"
>
{
  <Link>
    <button className="btn ">View Details</button>
  </Link>
}
</div> */
}
