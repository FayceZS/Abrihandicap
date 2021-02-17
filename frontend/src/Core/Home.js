import React, {Component} from 'react';
import HomeCarousel from '../Components/Home/HomeComponents/Carousel';
// import FooterPage from '../Components/Home/footer';
import ArticleContainer from '../Components/Home/HomeComponents/articleContainer'
import ArticleContainerVideo from '../Components/Home/HomeComponents/articleContainerVideo'
// import stripes from '../Images/stripe2.png'
import ItemsCarousel from '../Components/Home/HomeComponents/itemCarousel';
import TeamCarousel from '../Components/Home/HomeComponents/teamCarousel';
import DonateComponent from '../Components/Home/HomeComponents/donateComponent'



class Home extends Component {

    constructor(){
    super()
    this.state = {
        
        
        loading : false,
        error : '',


    }}


    

    componentDidMount() {
        
        

        
    };

    componentWillReceiveProps() {
        

        
    };

    
    
    


render(){

    
    return(
    <>
        
        <HomeCarousel ID="firstCarousel"/>
        <DonateComponent/>
        <div id="HomeCards" >
            <ArticleContainer id = "firstArticleContainer"  />
            
           

            <DonateComponent/>
            <div class="cardContainer">
                
                <ItemsCarousel />
                    
                    

            </div>
            <ArticleContainerVideo
            title = 'Nos actions'
            
            />
        </div>
        <div id='carouselTeam'>
        <h3 id="titleTeam">NOTRE EQUIPE</h3>
        <TeamCarousel ID="teamCarousel"/>
        </div>
        
    </>
    )}
    
}

export default Home;