const Features = () => {
    return (
      <section className="py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4">Personalized Plans</h3>
            <p>We create fitness plans tailored to your specific goals and needs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4">Flexible Scheduling</h3>
            <p>Train whenever it fits your schedule, with live or recorded sessions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4">Expert Trainers</h3>
            <p>Work with certified trainers who help you achieve your fitness goals.</p>
          </div>
        </div>
      </section>
    );
};

export default Features;
