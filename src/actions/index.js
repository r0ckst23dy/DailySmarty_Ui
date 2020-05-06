import { SET_RECENT_POSTS, SET_RESULTS_POSTS} from './types';

import axios from "axios";

export function fetchRecentPost() { 
    return function(dispatch) {
        axios
            .get("https://api.dailysmarty.com/posts")
            .then(response => {
                console.log(response.data.posts);
                dispatch({
                    type: SET_RECENT_POSTS,
                    payload: response.data.posts
                })
            })
            .catch(error => {
                console.log("error with dailsmarty api call", error);
                
            })
    }
}

export function fetchPostsWithQuery(query) { 
    return function(dispatch) {
        axios
            .get(`https://api.dailysmarty.com/search?q=${query}`)
            .then(response => {
                console.log(response.data.posts);
                dispatch({
                    type: SET_RESULTS_POSTS,
                    payload: response.data.posts
                })
            })
            .catch(error => {
                console.log("error with dailysmarty api call", error);
                
            })
    }
}