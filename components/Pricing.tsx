const Pricing = () => {
    return (
      <section id="pricing" className="py-16 bg-blue-500 text-white text-center">
        <h2 className="text-4xl font-bold mb-8">Simple Pricing</h2>
        <p className="text-lg mb-16">Get started with a free consultation and choose the plan that fits you!</p>
        <div className="flex flex-wrap justify-center space-x-6">
          <div className="w-full sm:w-72 mb-6">
            <div className="bg-yellow-500 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Free Trial</h3>
              <p className="text-lg mb-4">Experience the basics with a free consultation.</p>
              <button className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-300">
                Start Free Trial
              </button>
            </div>
          </div>
          <div className="w-full sm:w-72">
            <div className="bg-yellow-600 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Premium Plan</h3>
              <p className="text-lg mb-4">$29/month for unlimited access to personal training sessions.</p>
              <button className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-300">
                Start Premium
              </button>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Pricing;
