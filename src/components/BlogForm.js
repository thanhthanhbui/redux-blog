import React from 'react'
import { Header, Form, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'

class BlogForm extends React.Component {
  state = { title: '', body: '', }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, id } = this.props
    const { title, body } = this.state
    const blog = { id, title, body, editing: false }
    dispatch({ type: 'ADD_BLOG', blog, })
    dispatch({ type: 'INC_ID', })
    this.props.history.push('/blogs')
    this.setState({ title: '', body: '', })
  }

  render() {
    const { title, body } = this.state
    return (
      <div>
        <Header as='h3'>Add Blog</Header>
        <Form onSubmit={this.handleSubmit}>
          <Input
            name='title'
            placeholder='Title'
            value={title}
            required
            onChange={this.handleChange}
            style={{ width: '1000px', }}
          />
          <br />
          <Input
            name='body'
            placeholder='Body'
            value={body}
            required
            onChange={this.handleChange}
            style={{ height: '200px', width: '1000px', }}
          />
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.getId }
}

export default connect(mapStateToProps)(BlogForm)