import { FC } from 'react';

const Pricing: FC = () => {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Choose Your Plan</h2>
      <div className="flex justify-center gap-8">
        {/* Basic Plan */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-xs">
          <h3 className="text-2xl font-semibold mb-4">Basic Plan</h3>
          <p className="mb-4">For beginners, includes basic workouts and progress tracking.</p>
          <span className="text-3xl font-bold mb-6">$19.99/month</span>
          <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition-all duration-300">
            Get Started
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-yellow-500 text-black p-6 rounded-lg shadow-xl max-w-xs relative">
          <span className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-tl-lg font-semibold text-xs">Best Seller</span>
          <h3 className="text-2xl font-semibold mb-4">Premium Plan</h3>
          <p className="mb-4">Personalized training with 1-on-1 sessions and weekly check-ins.</p>
          <span className="text-3xl font-bold mb-6">$49.99/month</span>
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;


