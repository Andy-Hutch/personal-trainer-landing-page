import { FC } from 'react';

const Hero: FC = () => {
  return (
    <section className="bg-blue-600 text-white h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-extrabold mb-6">Get Fit from Home</h1>
      <p className="text-lg mb-8">Start your fitness journey today with a free consultation!</p>
      <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition-all duration-300">
        Book a Free Consultation
      </button>
    </section>
  );
};

export default Hero;


