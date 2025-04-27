import { FC } from 'react';

const Hero: FC = () => {
  return (
    <section className="relative bg-blue-600 text-white h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for better text visibility */}
      <h1 className="text-5xl font-extrabold mb-6 z-10">Get Fit from Home</h1>
      <p className="text-lg mb-8 z-10">Start your fitness journey today with a free consultation!</p>
      <button className="z-10 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-semibold rounded-md hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-2xl">
        Book a Free Consultation
      </button>
    </section>
  );
};

export default Hero;



