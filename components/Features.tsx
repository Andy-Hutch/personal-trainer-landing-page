import { FC } from 'react';

const Features: FC = () => {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Custom Training Plans</h3>
          <p>We design personalized workout plans tailored to your fitness goals.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Expert Trainers</h3>
          <p>Our trainers are certified and experienced to guide you through every step.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
          <p>Access to trainers and workout guidance anytime, anywhere.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;

