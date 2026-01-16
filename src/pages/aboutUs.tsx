const AboutUs = () => {
  return (
    <div className="bg-spice-cream grow">
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-spice-red mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Make something simple and easy to bring around that you can put on
              your rice - japanese inspired furikake with an Indonesian twist.
            </p>
            <h2 className="text-3xl font-bold text-spice-brown mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Modernize and diversify the Indonesian food landscape by
              transforming global food trends, such as Japanese and
              Korean-inspired seasonings and instant meals, into products
              perfectly tailored to local Indonesian tastes and modern, busy
              lifestyles.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/homepage-image-JPI.jpg"
              alt="Mission"
              className="rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition duration-500"
            />
          </div>
        </div>

        {/* History */}
      </div>
    </div>
  );
};

export default AboutUs;
