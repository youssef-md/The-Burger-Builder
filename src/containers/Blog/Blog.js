import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
//import axios from 'axios'
import axios from '../../axios'

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
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
                this.setState({error: true})
            });
    }

    render () {

        let posts = <p style = {{textAlign: 'center', fontSize: '2em'}}>Something went wrong!</p>

        if(!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post 
                            key = { post.id } 
                            title = { post.title } 
                            author = { post.author }
                            clicked = { () => this.selectedPostHandler(post.id) }/>
            })
        }

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
                { posts }
                </section>
                <section>
                    <FullPost id = { this.state.selectedPostId }/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }

    selectedPostHandler = (id) => {
        console.log(id)     
        this.setState({selectedPostId: id})   
    }

}

export default Blog;