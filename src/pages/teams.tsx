import { useEffect, useState } from "react";

interface TeamMember {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  email: string;
  location: {
    city: string;
    country: string;
  };
}

const Teams = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=8&nat=us,gb,au")
      .then((res) => res.json())
      .then((data) => {
        setMembers(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching team:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-spice-cream grow py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-spice-dark mb-4">
            Meet Our Team
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The passionate individuals behind Japko Pangan Indonesia.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-spice-red"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300"
              >
                <div className="h-48 bg-spice-dark relative">
                  <img
                    src={member.picture.large}
                    alt={`${member.name.first} ${member.name.last}`}
                    className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white shadow-md"
                  />
                </div>
                <div className="pt-16 pb-8 px-6 text-center">
                  <h3 className="text-xl font-bold text-spice-dark mb-1">
                    {member.name.first} {member.name.last}
                  </h3>
                  <p className="text-spice-red text-sm mb-4 uppercase tracking-wide font-semibold">
                    {
                      [
                        "Research And Development Head",
                        "Quality Control",
                        "Logistics Head",
                        "Sales Manager",
                        "Marketing Lead",
                        "Marketing Teams",
                        "Production Lead",
                        "Production Teams",
                      ][idx % 8]
                    }
                  </p>
                  <p className="text-gray-500 text-sm mb-2">
                    {member.location.city}, {member.location.country}
                  </p>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-spice-brown hover:text-spice-gold text-sm transition"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Teams;
