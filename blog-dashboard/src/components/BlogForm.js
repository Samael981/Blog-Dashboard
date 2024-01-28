import React, { useState } from 'react';

const BlogForm = ({ onAddBlog }) => {
  const [blog, setBlog] = useState({ title: '', body: '', authorName: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBlog(blog);
    setBlog({ title: '', body: '', authorName: '' });
  };

  return (
    <div>
      <h1>Add Blog</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Blog Name</label>
          <input type="text" name="title" id="title" onChange={handleChange} value={blog.title} />
        </div>
        <div>
          <label htmlFor="body">Description</label>
          <textarea name="body" id="body" onChange={handleChange} value={blog.body} />
        </div>
        <div>
          <label htmlFor="authorName">Author Name</label>
          <input type="text" name="authorName" id="authorName" onChange={handleChange} value={blog.authorName} />
        </div>
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default BlogForm;