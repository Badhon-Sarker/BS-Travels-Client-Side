import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const SectionOne = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-playfair font-bold my-5">
        Why Choose Us
      </h1>

      <div className="flex flex-col md:flex-row justify-evenly gap-4 my-10 ">

        <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col justify-center items-center border-2 rounded-lg p-2 md:p-4">
            <div><img className="w-48" src="https://i.ibb.co/F0wYL0S/monycard.png" alt="" /></div>
            <div className="md:text-2xl font-bold font-playfair my-2"><h1>Flexible Payment</h1></div>
            <div><p>We are dedicated to offering the exceptional value for your travel the best investment</p></div>

        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col justify-center items-center border-2 rounded-lg p-2 md:p-4">
            <div><img className="w-48" src="https://i.ibb.co/qB0DBzb/9086064.png" alt="" /></div>
            <div className="md:text-2xl font-bold font-playfair my-2"><h1>Flex Deposit</h1></div>
            <div><p>Ready to start your next adventure? Contact us today to begin planning your dream</p></div>

        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col justify-center items-center border-2 rounded-lg p-2 md:p-4">
            <div><img className="w-48" src="https://i.ibb.co/BCnkSvF/monydeta.png" alt="" /></div>
            <div className="md:text-2xl font-bold font-playfair my-2"><h1>Pay Securely</h1></div>
            <div><p>Feel free to adapt and customize this text to fit your travel agency with secure Payment</p></div>

        </div>
        

      </div>
    </div>
  );
};

export default SectionOne;
