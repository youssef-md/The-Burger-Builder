import React from 'react'
import axios from '../../../axios'
import Post from '../../../components/Post/Post'
import './Posts.css'
import { Link } from 'react-router-dom'

class Posts extends React.Component {

  state = {
    posts: [],
    selectedPostId: null,
    error: false
  }

  componentDidMount() {
    console.log(this.props)
    axios.get('/posts')
        .then(response => {
            const posts = response.data.slice(0, 5) 
            const updatedPosts = posts.map(post => {
                return { ...post, author: 'Youssef'}
            })
            this.setState({posts: updatedPosts})
            console.log(this.state.posts)
        })
        .catch(error => {
            console.log(error)
            //this.setState({error: true})
        });
  }

  render() {
    let posts = <p style = {{textAlign: 'center', fontSize: '2em'}}>Something went wrong!</p>

    if(!this.state.error) {
        posts = this.state.posts.map(post => {
            return (
              <Link key = { post.id }  to = {'/' + post.id}>
                <Post          
                  title = { post.title } 
                  author = { post.author }
                  clicked = { () => this.selectedPostHandler(post.id) }/>
              </Link>
            )
        })
    }
    return(
      <section className="Posts">
      { posts }
      </section>

    )
  }

  selectedPostHandler = (id) => {
    console.log(id)     
    this.setState({selectedPostId: id})   
  }
}

export default Posts