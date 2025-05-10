import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

 
  const fetchBlogs = async () => {
    try {
      const response = await axios.get("https://blog-hqx2.onrender.com/blog");
      setBlogs(response.data); 
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(); 
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Blog Posts</h1>
        {loading ? (
          <div className="text-center text-xl text-gray-500">Loading blogs...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div key={blog._id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h2 className="text-2xl font-bold text-gray-800 mt-4">{blog.title}</h2>
                <p className="text-gray-600 mt-2">{blog.content}</p>
                <div className="mt-4">
                  <p className="text-gray-500 text-sm">Author: {blog.author.name}</p>
                  <p className="text-gray-500 text-sm">{new Date(blog.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
