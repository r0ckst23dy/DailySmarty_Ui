import React, { Component } from "react";
import { connect } from "react-redux";

import Logo from "./logo";
import SearchBar from "./search-bar";
import * as actions from '../actions';
import ResultsPosts from './results-posts'


class Results extends Component { 

    handleSearchBarSubmit(query) { 
        this.props.fetchPostsWithQuery(query);
        
    }

    render() { 
        return (
            <div className="results">
                
                <Logo size={55}/>
                <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
                <ResultsPosts />
            </div>
        ) 
    }
}

export default connect(null, actions)(Results);