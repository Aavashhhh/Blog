import React from 'react';

const BlogCard = ({ image, title, description, link }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <a href={link} className="bg-blue-500 text-white px-3 py-1 rounded">
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
