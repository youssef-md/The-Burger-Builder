import React, { Component } from 'react';
import './Blog.css';
import axios from '../../axios'
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import { Route, NavLink } from 'react-router-dom'


class Blog extends Component {

    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact to="/" activeClassName="my-active" activeStyle={{ color: 'red'}}>Home</NavLink></li>
                            <li><NavLink exact to="/new-post">New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Route path = "/" exact component = {Posts} />
                <Route path = "/new-post" exact component = {NewPost}/>                
            </div>
        );
    }



}

export default Blog;