import React, { Component } from 'react'
import AddPost from './AddPostComponent'
import { connect } from "react-redux"
import { addPostAction } from './Redux/Actions/Actions'
import './PostComponent.css'
import Searchbar from './Searchbar'

const style = {

  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition: "0.3s",
  width: '80%',
  display: 'block',
  margin: '10px 50px 10px 50px',
  placeItems: 'center',
  border: 'black solid 2px',
  background: 'white',

}

const container = {
  padding: '2px 16px',
  width: '70%',

}


class Post extends Component {

  constructor() {
    super()

    this.state = {


      title: '',
      desc: '',
      addPost: false,
      onPublish: false,
      ShowPost: false,
      searchValue: '',
      errors: {
        titleError: '',
        descError: ''
      }
    }
  }

  validate = () => {
    let titleError = ''
    let descError = ''
    let isValid = true

    if (this.state.title.length == 0) {

      titleError = 'Field cannot be empty'
      isValid = false

    }
    if (this.state.desc.length == 0) {
      descError = 'Field cannot be empty'
      isValid = false
    }

    this.setState({
      ...this.state,
      errors: {
        ...this.state.errors,
        titleError,
        descError
      }
    });
    return isValid

  };

  onAddPost = () => {
    this.setState({
      addPost: !(this.state.addPost),
      title: '',
      desc: '',
      ShowPost: false,
      onPublish: false

    })
  }

  onShowPost = () => {
    this.setState({
      ShowPost: !(this.state.ShowPost),
      addPost: false,
      onPublish: false

    })
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log('ip', e.target.value)
  }

  onPublishPost = () => {
    console.log('Publish', this.onPublishPost)

    if (!this.validate()) {
      return

    }
    const formPost = {
      title: this.state.title,
      desc: this.state.desc
    }

    this.setState({
      addPost: !(this.state.addPost),
      onPublish: !(this.state.onPublish)
    })

    this.props.AddNewPost(formPost)



  }

  onsearchValueChange = (e) => {
    const searchValue = e.target.value
    this.setState({ searchValue })
    console.log('search', searchValue)
  }

  getAddNewPostView = () => {

    let addPostView = null

    if (this.state.addPost && this.state.searchValue.length == 0) {
      addPostView = (<div>

        <AddPost
          title={this.state.title}
          desc={this.state.desc}
          handleChange={this.handleChange}
          onPublishPost={this.onPublishPost}
          titleError={this.state.errors.titleError}
          descError={this.state.errors.descError}

        />
      </div>)
    }
    return addPostView

  }

  getPublishedPostView = () => {

    let publishPostView = null
    if (this.state.onPublish && this.state.searchValue.length == 0) {
      publishPostView =
        (
          <div className='main-container'>
            {
              this.props.newPost.posts.map((post, i) => {
                return (

                  <div key={i + 1} style={style} >
                    <h1 style={container}>{post.title}</h1>
                    <p style={container}>{post.desc}</p>

                  </div>

                )
              })
            }

          </div>)
    }

    return publishPostView
  }

  ShowPostView = () => {
    let ShowPostView = null


    if (this.state.ShowPost && this.state.searchValue.length == 0) {
      ShowPostView =
        (<div >
          <h1 className='list-post'>Here are the list of posts</h1>

          <div className='main-container' >
            {
              this.props.newPost.posts.map((post, i) => {
                return (
                  <div key={i + 1} style={style}>
                    <h1 style={container}>{post.title}</h1>
                    <p style={container}> {post.desc}</p>
                  </div>

                )
              })
            }
          </div>
        </div>)
    }
    return ShowPostView
  }

  searchPostView = () => {
    let searchPostView = null

    if (this.state.searchValue.length > 0) {
      searchPostView = (
        <div className='main-container'>
          <h1>Searched Posts</h1>

          {
            this.props.newPost.posts.map((post, i) => {
              if (post.title.includes(this.state.searchValue) || post.desc.includes(this.state.searchValue)) {

                return (
                  <div key={i + 1} style={style}>
                    <h1 style={container}>{post.title}</h1>
                    <p style={container}> {post.desc}</p>
                  </div>

                )
              }
              else {
                return null
              }

            })
          }

        </div>
      )
    }

    return searchPostView
  }

  handleRemove = () => {
    this.setState({
      searchValue: ''
    })
  }

  render() {
    console.log('state', this.state)


    console.log('props', this.props)
    return (
      <div className='app'>
        <Searchbar
          searchValue={this.state.searchValue}
          onsearchValueChange={this.onsearchValueChange}
          handleRemove={this.handleRemove}

        />
        <h1 className="welcome">Welcome to Post-App</h1>
        <div>
          <button className="addbutton" onClick={this.onAddPost} disabled={this.state.addPost}>Add post</button>
          <button className="showbutton" onClick={this.onShowPost} disabled={this.state.ShowPost} >Show post</button>
        </div>

        {this.getAddNewPostView()}
        {this.getPublishedPostView()}
        {this.ShowPostView()}
        {this.searchPostView()}

      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    newPost: state.PublishPost
  }
}

const mapDispatchToProps = dispatch => {

  return {
    AddNewPost: (formPost) => dispatch(addPostAction(formPost))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
