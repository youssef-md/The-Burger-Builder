import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios'

class Blog extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 5) 
                const updatedPosts = posts.map(post => {
                    return { ...post, author: 'Youssef'}
                })

                this.setState({posts: updatedPosts})
                console.log(this.state.posts)
            })
    }

    render () {

        const posts = this.state.posts.map(post => {
            return <Post 
                        key = { post.id } 
                        title = { post.title } 
                        author = { post.author }
                        clicked = { () => this.selectedPostHandler(post.id) }/>
        })

        return (
            <div>
                <section className="Posts">
                { posts }
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }

    selectedPostHandler = (id) => {
        console.log(id)        
    }

}

export default Blog;