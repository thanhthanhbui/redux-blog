import React from 'react'
import { connect } from 'react-redux'
import { Header } from 'semantic-ui-react';
import Blog from './Blog'
import Edit from './Edit'

class BlogList extends React.Component {
  render() {
    const { blogs } = this.props
    return (
      <div>
        <Header as='h1'>All Blogs</Header>
        <ol>
          { blogs.map( blog => (
            <div key={blog.id}>
              {blog.editing ? <Edit blog={blog} key={blog.id} /> :
              <Blog key={blog.id} blog={blog} /> }
            </div>
          ))}
        </ol>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { blogs: state.blogs, }
}

export default connect(mapStateToProps)(BlogList)