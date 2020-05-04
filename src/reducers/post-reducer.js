import {
    SET_RECENT_POSTS
} from "../actions/typos";
import { Switch } from "react-router";

const INIT_STATE = {
    post: [],
    recentPosts: []
}

export default function(state = INIT_STATE, action) { 
    switch (action.type) {
        case SET_RECENT_POSTS:
            
            return {...state.recentPosts.action.payload};
    
        default:
            return state;
    }
}