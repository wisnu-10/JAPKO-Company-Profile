import { Link } from "react-router-dom";
import { FaCheckCircle, FaLeaf } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { useEffect, useState } from "react";

const features = [
  {
    icon: <FaLeaf className="w-8 h-8 text-[#5B8930]" />,
    title: "High-Quality Product",
    description:
      "Our products use the best materials so that the quality of the products produced is very good.",
  },
  {
    icon: <HiOutlineLightBulb className="w-8 h-8 text-[#E6A15C]" />,
    title: "Innovative Foods",
    description:
      "Create a practical and simple food product that is needed by the market.",
  },
  {
    icon: <FaCheckCircle className="w-8 h-8 text-[#C23B22]" />,
    title: "Halal Certified",
    description: "Our products are Halal and BPOM certified.",
  },
];

interface TestimonialUser {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  location: {
    city: string;
    country: string;
  };
}

const TESTIMONIAL_TEXTS = [
  "Japko Pangan Indonesia has consistently provided us with the highest quality spices. Their dedication to authenticity makes a huge difference in our products.",
  "The flavors are incredibly rich and authentic. I've never tasted a better furikake in Indonesia!",
  "Absolute game changer for my home cooking. The wakayama seasoning is a must-have in every kitchen.",
  "Fast shipping, premium packaging, and the taste is just phenomenal. Highly recommended!",
];

const Home = () => {
  const [testimonials, setTestimonials] = useState<TestimonialUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3&nat=us,gb,au")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching testimonials:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-spice-cream">
      {/* Hero Section */}
      <section className="relative h-180 flex items-center justify-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop')]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-t from-spice-dark/90 via-spice-dark/40 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Japko <span className="text-spice-gold"> Pangan Indonesia</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            The Finest Flavours of the World, Brought Home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="px-8 py-4 bg-spice-red text-white text-lg font-semibold rounded-full hover:bg-red-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Our Products
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-spice-gold text-spice-gold text-lg font-semibold rounded-full hover:bg-spice-gold hover:text-spice-dark transition shadow-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Why Japko */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#333333]">
              Why Choose Japko?
            </h2>
            <div className="w-20 h-1 bg-[#C23B22] mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-orange-50 transition-colors"
              >
                <div className="mb-4 p-4 bg-white rounded-full shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-spice-green font-bold tracking-wider uppercase">
              Our Selection
            </span>
            <h2 className="text-4xl font-bold text-spice-dark mt-2">
              Premium Products
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: "Gurih-Ya",
                img: "/product-1.jpg",
                desc: "The pioneer of seaweed furikake in Indonesia, Our furikake in the first halal certified furikake in Indonesia.",
              },
              {
                id: 2,
                name: "Kuwa",
                img: "/product-2.jpg",
                desc: "Kuwa main mission is to bring delicious soups to every household.",
              },
              {
                id: 3,
                name: "Gurih-Ya Junior",
                img: "/product-3.jpg",
                desc: "Welcome to Gurih-ya Junior: Healthy Little Bites, Big Family Love.",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="bg-spice-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-spice-dark mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{item.desc}</p>
                  <Link
                    to="/products"
                    className="inline-block px-6 py-2 border border-spice-dark rounded-full text-spice-dark hover:bg-spice-dark hover:text-white transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-20 bg-spice-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-spice-red rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-spice-gold rounded-full blur-[100px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>

          {loading ? (
            <div className="flex justify-center">
              <span className="loading loading-dots loading-lg text-spice-gold"></span>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((user, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition duration-300"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 mb-6 rounded-full p-1 bg-linear-to-r from-spice-gold to-spice-red">
                      <img
                        src={user.picture.large}
                        alt={user.name.first}
                        className="w-full h-full rounded-full object-cover border-2 border-spice-dark"
                      />
                    </div>
                    <p className="text-lg italic mb-6 text-gray-300">
                      "{TESTIMONIAL_TEXTS[idx % TESTIMONIAL_TEXTS.length]}"
                    </p>
                    <h3 className="font-bold text-xl text-spice-gold">
                      {user.name.first} {user.name.last}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {user.location.city}, {user.location.country}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Find Us On */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#333333] mb-8">Find Us On</h2>
          <div className="w-20 h-1 bg-[#C23B22] mx-auto mb-12"></div>

          <div className="flex justify-center items-center">
            <img
              src="/jpi-offlinestore.png"
              alt="Available at these offline stores"
              className="max-w-full h-auto object-contain hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
