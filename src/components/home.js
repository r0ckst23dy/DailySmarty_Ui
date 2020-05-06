import React, { Component } from 'react';
import { connect } from "react-redux";


import SearchBar from "./search-bar";
import RecentPost from "./recent-post";
import * as actions from '../actions';
import Logo from "./logo"

class Home extends Component {

  handleSearchBarSubmit =function(query) {
    this.props.fetchPostsWithQuery(query);
    this.props.history.push('./results');
  }  

  render() {
    return (
      
        <div>
          <div>
            
            <Logo/>
            <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
            <RecentPost />
          </div>
        </div>
    
    );
  }
}

export default connect(null, actions)(Home);