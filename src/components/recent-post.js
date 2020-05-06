import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions';

import Post from "./post";

class RecentPost extends Component {

    componentDidMount() { 
        this.props.fetchRecentPost();
    }

    renderPosts = function() { 
        const posts = this.props.recentPosts.map((post, index) => {
            if ( index < 3) {
                return (
                    <Post {...post} key={index}/>
                )
        }
        })
        return posts
    }
    render() {
        return (
            <div className="recent-posts">
                <div className="recent-posts__wrapper">
                    <div className="recent-posts__heading">Recent Posts</div>
                    <ul className="recent-posts__posts">
                        {this.renderPosts()}
                    </ul>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) { 
    return ( 
        {recentPosts: state.post.recentPosts}
    );
}
export default connect(mapStateToProps, actions)(RecentPost);