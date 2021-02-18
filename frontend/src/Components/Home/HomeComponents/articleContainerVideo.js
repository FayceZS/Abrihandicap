import React, {Component} from 'react';
import ReactPlayer from 'react-player';

class ArticleContainerVideo extends Component{

    render(){
        return(
            <div className = 'articleContainer' id = "articleContainerHome">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.text}</p>
                    <ReactPlayer controls url="https://youtu.be/9iJ_iTx3yjY" id="videoPlayer" style={{margin : "auto"}}/>
            </div>
        )
    }
}

export default ArticleContainerVideo