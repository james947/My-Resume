import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBlogPostById, BlogPost as BlogPostType } from '../services/blogService';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);

  useEffect(() => {
    const getBlogPost = async () => {
      if (id) {
        try {
          const fetchedPost = await fetchBlogPostById(id);
          setPost(fetchedPost);
        } catch (error) {
          console.error('Error fetching blog post:', error);
          setPost(null);
        }
      } else {
        console.error('Blog post ID is undefined');
      }
    };
    getBlogPost();
  }, [id]);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main>
      <section id="blog-post">
        <h2>{post.title}</h2>
        <p>Date: {post.date}</p>
        <p>{post.content}</p>
      </section>
    </main>
  );
};

export default BlogPost;
