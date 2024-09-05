import React from 'react';
import BlogCard from './BlogCard';
import { data } from './data.js';

const BlogList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((blog, index) => (
        <BlogCard
          key={index}
          image={blog.image}
          title={blog.title}
          description={blog.description}
          link={blog.link}
        />
      ))}
    </div>
  );
};

export default BlogList;
