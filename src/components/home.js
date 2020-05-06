import React, { Component } from 'react';
import Logo from "./logo"
import SearchBar from "./search-bar";
import RecentPost from "./recent-post";

export default class Home extends Component {

  handleSearchBarSubmit =function(query) {
    console.log("trying handle form submit query ", query);
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
