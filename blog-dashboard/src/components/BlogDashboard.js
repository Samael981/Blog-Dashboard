import React from 'react';
import { Table } from 'reactstrap';
import './BlogDashboard.css';

const BlogDashboard = ({ posts }) => {
  return (
    <div>
      <h1>Blog Dashboard</h1>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BlogDashboard;