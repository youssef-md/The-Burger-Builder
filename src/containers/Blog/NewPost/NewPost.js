import React, { Component } from 'react';
import axios from 'axios'
import './NewPost.css';
import { Redirect } from 'react-router-dom'

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false,
    }

    render () {

        return (
            <div className="NewPost">
                {this.state.submitted ? this.redirectToPosts() : null}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Youssef">Youssef</option>
                    <option value="Muhamad">Muhamads</option>
                </select>
                <button onClick = {this.postDataHandler}>Add Post</button>
            </div>
        );
    }

    redirectToPosts = () => {
        return <Redirect to = "/posts/" />
    }

    postDataHandler = () => {
        const post = {
            title: this.state.title,
            body: this.state.body,
            author: this.state.author
        }

        axios.post('http://jsonplaceholder.typicode.com/posts', post)
            .then(response => {
                console.log(response)
                this.setState({submitted: true})
            })
    }
}

export default NewPost;