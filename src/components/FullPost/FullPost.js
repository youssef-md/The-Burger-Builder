import React, { Component } from 'react';
import axios from 'axios'

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    componentDidUpdate() {
        if(this.props.id !== null) {
            if( !this.state.loadedPost || (this.state.loadedPost !== null && this.state.loadedPost.id !== this.props.id)) {

                axios.get(`http://jsonplaceholder.typicode.com/posts/${this.props.id}`)
                .then(response => {
                    this.setState({loadedPost: response.data})
                })
            }
        }        
    }

    render () {
        let post = <p style = {{textAlign: 'center'}}>Please select a Post!</p>
        
        if(this.props.id !== null)
            post = <p style = {{textAlign: 'center'}}>Loading...</p>

        if(this.state.loadedPost !== null){
            post = (
                <div className="FullPost">
                    <h1>{ this.state.loadedPost.title }</h1>
                    <p>{ this.state.loadedPost.body }</p>
                    <div className="Edit">
                        <button className="Delete" onClick = { this.deletePostHandler }>Delete</button>
                    </div>
                </div>
    
            )
        }
        return post;
    }

    deletePostHandler = () => {
        axios.delete(`http://jsonplaceholder.typicode.com/posts/${this.props.id}`)
            .then(response => {
                console.log(response)
            })
    }
}

export default FullPost;