import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useBlogStore } from "../store/blogStore";
import { useAuthStore } from "../store/authStore";
import Swal from "sweetalert2";

const BlogList = () => {
  const { posts, loading, error, fetchPosts, deletePost } = useBlogStore();
  const { username, role } = useAuthStore();

  const handleDelete = (objectId: string) => {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Data yang dihapus tidak dapat dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deletePost(objectId);
        Swal.fire({
          title: "Terhapus!",
          text: "Postingan Anda telah berhasil dihapus.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) {
    return (
      <div className="bg-alice-blue min-h-screen py-12 flex justify-center items-center">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-alice-blue min-h-screen py-12 flex justify-center items-center">
        <div className="text-xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="bg-alice-blue grow py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-6">
          <div>
            <h1 className="text-4xl font-bold text-spice-dark mb-2">
              JAPKO Article
            </h1>
          </div>
          <Link
            to="/blog/create"
            className="bg-spice-red text-white px-6 py-3 rounded-full hover:bg-red-700 transition shadow-md"
          >
            + Write Article
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.objectId}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition border border-gray-100 flex flex-col"
            >
              <div className="h-48 bg-spice-cream overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${post.objectId}/800/600`}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-spice-gold uppercase tracking-wider">
                  {post.created
                    ? new Date(post.created).toLocaleDateString()
                    : "No Date"}
                </span>
                <Link to={`/blog/${post.post_id}`}>
                  <h2 className="text-xl font-bold text-spice-dark mt-2 mb-3 hover:text-spice-red cursor-pointer">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.intro}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-sm font-medium text-gray-500">
                    By {post.author}
                  </span>
                  <div className="flex gap-2">
                    <Link
                      to={`/blog/${post.post_id}`}
                      className="text-spice-red font-semibold text-sm hover:underline"
                    >
                      Read More
                    </Link>
                    {username && role === 1 && (
                      <button
                        onClick={() => {
                          if (post.objectId) {
                            handleDelete(post.objectId);
                          }
                        }}
                        className="text-red-500 font-semibold text-sm hover:underline ml-4"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
