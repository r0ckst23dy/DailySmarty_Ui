import React, {Component} from 'react';


class Post extends Component { 
    rendorTopics() { 
        let topics = this.props.associated_topics.map((topic, index) => {
            return <span className="post-topic" key={index}>{topic}</span>
        })
        return topics;
    }

    renderLinks() {
        let links = this.props.post_links.map((post_link, link) => {
            return (
            <div className="post-links" key={link}>
                <div className="post-link-box">

                </div>
                <div className="post-link-link"> 
                    <a href={post_link.link_url}>Useful Link #{link + 1}</a>
                </div>
            </div>);
        })
        return links
    }

    render() {
        if (this.props.type == 'recent') {
            return (
                <li className="recent-post">
                    <div className= "recent-post-title">
                        {this.props.title}
                    </div>
                    <div className="recent-post-associated-topics">
                        {this.rendorTopics()}
                    </div>
                

                </li>
            );
        } else if(this.props.type == 'result') {
            return ( 
                <li className='result-posts'>
                    <div className="result-post-topics">
                    {this.rendorTopics()}

                    </div>
                    <div className="result-post-title">
                        {this.props.title}
                    </div>
                    <div className="result-post-links">
                        {this.renderLinks()}
                    </div>
                </li>
            )
        } 
    }
}

export default Post