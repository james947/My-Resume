export interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string;
}

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data.map((post: any) => ({
    id: post.id,
    title: post.title,
    date: new Date().toLocaleDateString(),
    content: post.body,
  }));
};

export const fetchBlogPostById = async (id: string): Promise<BlogPost | null> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) {
    return null;
  }
  const post = await response.json();
  return {
    id: post.id,
    title: post.title,
    date: new Date().toLocaleDateString(),
    content: post.body,
  };
};
