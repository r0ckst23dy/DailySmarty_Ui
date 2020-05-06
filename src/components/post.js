import React, {Component} from 'react';


class Post extends Component { 
    rendorTopics() { 
        let topics = this.props.associated_topics.map((topic, index) => {
            return <span className="post-topic" key={index}>{topic}</span>
        })
        return topics;
    }
    render() {
        return ( 
            <li className="recnt-post">
                <div className= "recent-post-title">
                    {this.props.title}
                </div>
                <div className="recent-post-associated-topics">
                    {this.rendorTopics()}
                </div>
                

            </li>
        )
    }
}

export default Post