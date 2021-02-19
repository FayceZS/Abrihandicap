import React, {Component} from 'react';
import construction from '../Images/construction.svg'

class underConstruction extends Component{

    render(){
        return(
            <div id = 'underConstruction'>
                    <h2>Nous arrivons vite !</h2>
                   
                    <img src={construction} alt='construction' id="constructionImage"></img>
                    <p>Cette page est en cours de construction, nous mettons tout en oeuvre pour qu'elle soit disponible le plus vite possible !</p>
        
           
                    
            </div>
        )
    }
}

export default underConstruction