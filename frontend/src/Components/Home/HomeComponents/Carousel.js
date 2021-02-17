import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import handChild from '../../../Images/handChild.jpg';

class HomeCarousel extends Component{
    render(){
    return(
<Carousel id={this.props.ID}>
    <Carousel.Item>
        <img
        className="d-block  imgCarousel" 
        src={handChild}
        alt="First slide"
        />
        <Carousel.Caption>
        <h3>Aime ton prochain comme toi-même.</h3>
        {/* <p>Pouvons-nous laisser ces enfants mourir ?</p> */}
        </Carousel.Caption>
    </Carousel.Item> 
    {/* <Carousel.Item>
        <img
        className="d-block imgCarousel"
        src={carousel2}
        alt="Third slide"
        />

        <Carousel.Caption>
       
        <p>Pouvons-nous laisser des enfants abandonnés ou orphelins vivre dans ce genre de conditions ?</p>
        </Carousel.Caption>
    </Carousel.Item> */}
    {/* <Carousel.Item>
        

        <img
        className="d-block  imgCarousel"
        src={carousel3}
        alt="Third slide"
        />

        <Carousel.Caption>
        <p>Pouvons-nous les laisser vivre dans de tels conditions hygièniques ?</p>
        </Carousel.Caption>
    </Carousel.Item> */}
</Carousel>
)}
}   

export default HomeCarousel