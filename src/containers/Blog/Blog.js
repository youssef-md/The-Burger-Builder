import React, { Component } from 'react';
import './Blog.css';
import axios from '../../axios'
import Posts from './Posts/Posts'
//import NewPost from './NewPost/NewPost'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import asyncComponent from '../../hoc/asyncComponent'

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost') // Will only import NewPost when the const is used
})

class Blog extends Component {

    state = {
        auth: true
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
                    { this.state.auth ? <Route path = "/new-post" component = { AsyncNewPost }/> : null }
                    <Route path = "/posts/" component = { Posts } />
                    <Route render = {() => <h1>404 Not Found</h1>} />
                    {/* <Redirect from = "/" to = "/posts/" /> */}
                </Switch>
            </div>
        );
    }



}

export default Blog;