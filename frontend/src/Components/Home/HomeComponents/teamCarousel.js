import React, {Component} from 'react';
import member1 from '../../../Images/Team/member1.jpeg';


class TeamCarousel extends Component{
    render(){
    return(
    <div className = 'articleContainerTeam'>
        <p>Notre équipe est constituée de jeunes de 7 à 77 ans, venant de tout horizon, tous animés d’un seul et même esprit, plus heureux de donner que de recevoir.</p>
        <img
        className="d-block  imgTeamCarousel" 
        src={member1}
        alt="Membre association"
        />

        
    </div>
 )}
}     
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

 

export default TeamCarousel