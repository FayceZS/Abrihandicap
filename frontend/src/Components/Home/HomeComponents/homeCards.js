import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';


class HomeCards extends Component{
    render(){

    

 
    
    return(
        <Card>
            <Card.Body>
                {/* <Card.Text> */}
                    {/* <img src="../../../icons/mainBleu.svg"/> */}
                {/* </Card.Text> */}
                <Card.Img className = "cardImgs" src={this.props.img} alt = {this.props.alt} />
                <Card.Text>{this.props.text}</Card.Text>
            </Card.Body>
        </Card>
 
    )} 

}

export default HomeCards