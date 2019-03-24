import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react';
import BlogList from './BlogList';

const Blogs =() => (
  <div>
    <Link to='./blogs/new'>
      <Button>Add Blog</Button>
    </Link>
    <BlogList />
  </div>
)

export default Blogs