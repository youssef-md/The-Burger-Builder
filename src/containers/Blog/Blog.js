import React, { Component } from 'react';
import './Blog.css';
import axios from '../../axios'
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

class Blog extends Component {

    state = {
        auth: false
    }

    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" activeClassName="my-active" activeStyle={{ color: 'orange'}}>Posts</NavLink></li>
                            <li><NavLink exact to="/new-post">New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    { this.state.auth ? <Route path = "/new-post" component = { NewPost }/> : null }
                    <Route path = "/posts/" component = { Posts } />
                    <Redirect from = "/" to = "/posts/" />
                </Switch>
            </div>
        );
    }



}

export default Blog;