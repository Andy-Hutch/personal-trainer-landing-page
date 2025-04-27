import { FC } from 'react';

const Features: FC = () => {
  return (
    <section className="py-20 bg-gray-800 text-white text-center">
      <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:animate-bounce">
          <div className="mb-4 text-5xl text-white">
            <i className="fas fa-dumbbell text-5xl transition-transform transform hover:rotate-12" aria-label="Training Icon"></i>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-shadow-lg">Custom Training Plans</h3>
          <p className="text-lg">We design personalized workout plans tailored to your fitness goals.</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:animate-bounce">
          <div className="mb-4 text-5xl text-white">
            <i className="fas fa-chalkboard-teacher text-5xl transition-transform transform hover:rotate-12" aria-label="Training Icon"></i>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-shadow-lg">Expert Trainers</h3>
          <p className="text-lg">Our trainers are certified and experienced to guide you through every step.</p>
        </div>
        <div className="bg-gradient-to-r from-red-500 to-yellow-500 text-white p-8 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:animate-bounce">
          <div className="mb-4 text-5xl text-white">
            <i className="fas fa-headset text-5xl transition-transform transform hover:rotate-12" aria-label="Training Icon"></i>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-shadow-lg">24/7 Support</h3>
          <p className="text-lg">Access to trainers and workout guidance anytime, anywhere.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;





