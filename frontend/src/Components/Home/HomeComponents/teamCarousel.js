import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import member1 from '../../../Images/Team/member1.jpeg';
import member2 from '../../../Images/Team/member2.jpeg';
import member3 from '../../../Images/Team/member3.jpeg';
import member4 from '../../../Images/Team/member4.jpeg';
import member5 from '../../../Images/Team/member5.jpeg';
import member6 from '../../../Images/Team/member6.jpeg';
import member7 from '../../../Images/Team/member7.jpeg';

class TeamCarousel extends Component{
    render(){
    return(
<Carousel id={this.props.ID}>
    <Carousel.Item>
        <img
        className="d-block  imgTeamCarousel" 
        src={member1}
        alt="Membre association"
        />
    </Carousel.Item> 
    <Carousel.Item>
        <img
        className="d-block imgTeamCarousel"
        src={member2}
        alt="Membre association"
        />

    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block imgTeamCarousel"
        src={member3}
        alt="Membre association"
        />

    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block imgTeamCarousel"
        src={member4}
        alt="Membre association"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block imgTeamCarousel"
        src={member5}
        alt="Membre association"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block imgTeamCarousel"
        src={member6}
        alt="Membre association"
        />

    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block imgTeamCarousel"
        src={member7}
        alt="Membre association"
        />

       
    </Carousel.Item>
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

export default TeamCarousel