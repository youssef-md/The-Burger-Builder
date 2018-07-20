import React, { Component } from 'react';
import './Blog.css';
import axios from '../../axios'
import Posts from './Posts/Posts'
import { Route } from 'react-router-dom'


class Blog extends Component {

    render () {

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
                <Route path = "/" exact render = {() => <h1>Home exact</h1>}/>
                <Route path = "/"  render = {() => <h1>Home for all</h1>}/>
            </div>
        );
    }



}

export default Blog;