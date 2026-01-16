import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBlogStore } from "../store/blogStore";
import { useAuthStore } from "../store/authStore";

const BlogCreate = () => {
  const navigate = useNavigate();
  const { createPost, loading, error } = useBlogStore();
  const { username } = useAuthStore();

  useEffect(() => {
    if (!username) {
      navigate("/login");
    }
  }, [username, navigate]);

  const [formData, setFormData] = useState({
    title: "",
    intro: "",
    content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createPost({
        ...formData,
        author: username || "Admin",
      });
      navigate("/blog");
    } catch (err) {
      console.error("Failed to create post:", err);
    }
  };

  return (
    <div className="grow bg-spice-cream py-12">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-spice-dark px-8 py-6">
          <h1 className="text-2xl font-bold text-white">Create New Article</h1>
        </div>

        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mx-8 mt-4"
            role="alert"
          >
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spice-gold focus:border-transparent outline-none transition"
              placeholder="Enter article title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="intro"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Short Introduction
            </label>
            <input
              type="text"
              id="intro"
              name="intro"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spice-gold focus:border-transparent outline-none transition"
              placeholder="Brief summary used in the list view"
              value={formData.intro}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              rows={8}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spice-gold focus:border-transparent outline-none transition"
              placeholder="Write your article content here..."
              value={formData.content}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate("/blog")}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-2 bg-spice-red text-white rounded-lg hover:bg-red-700 transition shadow-md ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Publishing..." : "Publish Article"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogCreate;
