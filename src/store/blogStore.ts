import { create } from "zustand";
import Backendless from "../lib/backendless";

export interface BlogPost {
  objectId?: string;
  post_id?: string;
  title: string;
  intro: string;
  content: string;
  author: string;
  created?: number;
  updated?: number;
}

interface BlogStore {
  posts: BlogPost[];
  currentPost: BlogPost | null;
  loading: boolean;
  error: string | null;
  fetchPosts: () => Promise<void>;
  fetchPostById: (id: string) => Promise<void>;
  fetchPostByPostId: (postId: string) => Promise<void>;
  createPost: (
    post: Omit<BlogPost, "objectId" | "created" | "updated">
  ) => Promise<void>;
  deletePost: (id: string) => Promise<void>;
}

export const useBlogStore = create<BlogStore>((set, get) => ({
  posts: [],
  currentPost: null,
  loading: false,
  error: null,

  fetchPosts: async () => {
    set({ loading: true, error: null });
    try {
      const posts = await Backendless.Data.of(
        "blogListCompro"
      ).find<BlogPost>();
      set({ posts: posts.reverse(), loading: false });
    } catch (error: any) {
      console.error("Error fetching posts:", error);
      set({ error: error.message || "Failed to fetch posts", loading: false });
    }
  },

  fetchPostById: async (id: string) => {
    set({ loading: true, error: null, currentPost: null });
    try {
      const post = await Backendless.Data.of(
        "blogListCompro"
      ).findById<BlogPost>(id);
      set({ currentPost: post, loading: false });
    } catch (error: any) {
      console.error(`Error fetching post ${id}:`, error);
      set({ error: error.message || "Failed to fetch post", loading: false });
    }
  },

  fetchPostByPostId: async (postId: string) => {
    set({ loading: true, error: null, currentPost: null });
    try {
      const queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause(
        `post_id = '${postId}'`
      );
      const posts = await Backendless.Data.of("blogListCompro").find<BlogPost>(
        queryBuilder
      );

      if (posts.length > 0) {
        set({ currentPost: posts[0], loading: false });
      } else {
        set({ error: "Post not found", loading: false });
      }
    } catch (error: any) {
      console.error(`Error fetching post by post_id ${postId}:`, error);
      set({ error: error.message || "Failed to fetch post", loading: false });
    }
  },

  createPost: async (newPost) => {
    set({ loading: true, error: null });
    try {
      await Backendless.Data.of("blogListCompro").save(newPost);
      await get().fetchPosts();
      set({ loading: false });
    } catch (error: any) {
      console.error("Error creating post:", error);
      set({ error: error.message || "Failed to create post", loading: false });
      throw error;
    }
  },

  deletePost: async (id: string) => {
    set({ loading: true, error: null });
    try {
      await Backendless.Data.of("blogListCompro").remove({ objectId: id });
      await get().fetchPosts();
      set({ loading: false });
    } catch (error: any) {
      console.error(`Error deleting post ${id}:`, error);
      set({ error: error.message || "Failed to delete post", loading: false });
    }
  },
}));
