import React, { Component } from 'react';
import Logo from "./logo"
import SearchBar from "./search-bar";
import RecentPost from "./recent-post";

export default class Home extends Component {
  render() {
    return (
      
        <div>
          <div>
            
            <Logo/>
            <SearchBar />
            <RecentPost />
          </div>
        </div>
    
    );
  }
}
