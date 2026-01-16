const products = [
  {
    id: 1,
    name: "Gurih-Ya",
    price: "Rp 25.000",
    img: "/product-1.jpg",
    category:
      "The pioneer of seaweed furikake in Indonesia, Our furikake in the first halal certified furikake in Indonesia. We have modified the taste and texture of our furikake to suit the Indonesian tastebuds. Gurihya have since also expanded to other products such as instant mashed potatoes and also cheese powder.",
  },
  {
    id: 2,
    name: "Kuwa",
    price: "Rp 30.000",
    img: "/product-2.jpg",
    category:
      "Kuwa main mission is to bring delicious soups to every household. Our instant dry powder soup products allows you to prepare delicious restaurant grade soups such as chicken collagen hotpot, kimchi jiggse soups, truffle and cheese cream soup in your kitchen. Just add water and voila, let the aroma of the soup fill up your house in an instant!",
  },
  {
    id: 3,
    name: "Gurih-Ya Junior",
    price: "Rp 23.000",
    img: "/product-3.jpg",
    category:
      "Welcome to Gurih-ya Junior: Healthy Little Bites, Big Family Love. Every little step in your child's growth is a moment to cherish. At Gurih-ya Junior, we are here to be your loyal companion in every one of those precious moments. Born from the trusted kitchen of Gurih-ya, a name synonymous with authentic flavor and quality in Indonesia, Gurih-ya Junior carries forward a simple family promise: the very best for your little one.",
  },
  {
    id: 4,
    name: "Wakayama",
    price: "Rp 27.000",
    img: "/product-4.jpg",
    category:
      "Wakayama food ingredients aims to bring affordable and premium ingredients together for small business, with a focus on instant snack seasoning. Wakayama Seasoning have many flavors to choose from, including truffle, cheese, spicy mushroom, original chicken, seaweed, Kimchi and many more",
  },
];

export default function Products() {
  return (
    <div className="bg-white grow py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-spice-dark mb-4">
            Our Catalogue
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our selection of premium product sourced directly from the
            best ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-spice-cream rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full"
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 h-88 shrink-0">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75 transition duration-300"
                />
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-spice-dark mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed text-justify">
                  {product.category}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-spice-dark/10">
                  <p className="text-xl font-bold text-spice-red">
                    {product.price}
                  </p>
                  <button className="bg-spice-dark text-white p-2 rounded-full hover:bg-spice-gold hover:text-spice-dark transition shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
