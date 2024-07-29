import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBlogPosts, BlogPost } from '../services/blogService';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBlogPosts = async () => {
      try {
        const posts = await fetchBlogPosts();
        setPosts(posts.slice(0, 2)); 
      } catch (error) {
        // Handle potential errors here (e.g., log to console)
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setIsLoading(false); 
      }
    };
    getBlogPosts();
  }, []);

  return (
    <section id="blog">
      <h2>Blog</h2>
      {isLoading ? ( 
        <p>Loading blog posts...</p>
      ) : posts.length < 1 ? (
        posts.map(post => (
          <div className="blog-post" key={post.id}>
            <h3>{post.title}</h3>
            <p>Snippet of the blog post about {post.title}...</p>
            <Link to={`/blog/${post.id}`}>Read More</Link>
          </div>
        ))
      ) : (
        <div className="coming-soon">
          <h3>Coming Soon!</h3>
          <p>Stay tuned for exciting updates and insights on my blog.</p>
        </div>
      )}
    </section>
  );
};

export default Blog;
