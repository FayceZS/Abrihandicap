import React, {Component} from 'react';
import ReactPlayer from 'react-player';

class ArticleContainerVideo extends Component{

    render(){
        return(
            <div className = 'articleContainer' id = "articleContainerHome">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.text}</p>
                    <ReactPlayer url="https://youtu.be/x-0fJNCb1LI" id="videoPlayer" style={{margin : "auto"}}/>
            </div>
        )
    }
}

export default ArticleContainerVideo