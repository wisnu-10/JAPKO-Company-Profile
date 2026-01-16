import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useBlogStore } from "../store/blogStore";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { currentPost, loading, error, fetchPostByPostId } = useBlogStore();

  useEffect(() => {
    if (id) {
      fetchPostByPostId(id);
    }
  }, [id, fetchPostByPostId]);

  if (loading) {
    return (
      <div className="bg-alice-blue min-h-screen py-12 flex justify-center items-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  if (error || !currentPost) {
    return (
      <div className="bg-alice-blue min-h-screen py-12 flex flex-col justify-center items-center">
        <div className="text-xl text-red-600 mb-4">
          {error || "Article not found"}
        </div>
        <Link
          to="/blog"
          className="text-spice-red font-semibold hover:underline"
        >
          Back to Journal
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-alice-blue grow py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="w-fit mb-6 px-4 py-2 flex items-center gap-2 text-spice-brown hover:text-spice-red transition-colors"
        >
          ← Back to Journal
        </Link>

        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="h-64 sm:h-96 relative group">
            {/* fetch image dari https://picsum.photos/ */}
            <img
              src={`https://picsum.photos/seed/${currentPost.objectId}/1200/800`}
              alt={currentPost.title}
              className="w-full h-full object-cover transition duration-700 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent">
              <div className="absolute bottom-0 left-0 p-6 sm:p-10 w-full">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg leading-tight">
                  {currentPost.title}
                </h1>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10">
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-spice-gold flex items-center justify-center text-white font-bold text-lg">
                  {currentPost.author[0]?.toUpperCase() || "A"}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">
                    {currentPost.author}
                  </div>
                  <div className="text-xs text-gray-500">Author</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-spice-red">
                  {currentPost.created
                    ? new Date(currentPost.created).toLocaleDateString()
                    : "No Date"}
                </div>
                <div className="text-xs text-gray-500">Published</div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl text-gray-600 font-medium mb-8">
                {currentPost.intro}
              </p>
              <div className="whitespace-pre-wrap">
                {currentPost.content || "No content available."}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
