import React, {Component} from 'react';

class ArticleContainer extends Component{

    render(){
        return(
            <div className = 'articleContainer' id = {this.props.id}>
                    <h2>{this.props.title}</h2>
                   
                    
            <div style={{marginBottom : '10px'}} className='articleContainerText'>ABRI est une association régie par la loi 1901, à but non lucratif créée en décembre 2019,  ses fondateurs Mireille TIDJI et Yerima Ethan TIDJI ont eu à cœur premièrement de défendre la cause des enfants abandonnés ou orphelins victimes d’un handicap visible qui est la drépanocytose.<br></br></div>


            <div style={{marginBottom : '10px'}} className='articleContainerText'>Très vite, nous avons été vite rattrapés par la réalité et avons étendu la cause à tous les enfants victimes d'un handicap qu'il soit visible ou invisible.<br></br></div>


            <div style={{marginBottom : '10px'}} className='articleContainerText'>Il ne fait pas bon de naître avec un handicap ou une malformation dans certaines communautés d’Afrique. Il suffit que l’enfant apparaisse par le siège pour qu’il soit rejeté par sa famille. Parfois, des marques bien plus anodines, une première dent qui sort sur la mâchoire supérieure, par exemple , peuvent faire du nouveau-né un "enfant sorcier", un porte-malheur. Ces enfants sont abandonnés ou souvent condamnés à mort par la coutume.<br></br></div>


            <div style={{marginBottom : '10px'}} className='articleContainerText'>Les«enfants-sorciers» sont le plus souvent orphelins, handicapés ou albinos. Des enfants au comportement insolite (têtu, agressif, pensif, solitaire...) sont également la cible des familles des villes africaines. Handicapés de naissance ou enfants turbulents, ils ont en commun de devenir les parias de leur famille.<br></br></div>


            <div style={{marginBottom : '10px'}} className='articleContainerText'>En Afrique subsaharienne, les "enfants sorciers" sont rejetés et survivent dans la plus grande misère Ils n'ont que la rue pour seul abri .Parfois même, face aux difficultés de la vie, sans raison, l’enfant devient le bouc-émissaire de la famille."Tenu pour responsable d'une maladie, d'un décès, d'un divorce, d'un manque d'argent ou même d'un simple désagrément, l'enfant est alors accusé de sorcellerie et devient rapidement le centre de violents conflits.<br></br></div>


            <div className='articleContainerText'> C'est dans ce contexte que l'association ABRI  vient apporter son soutient à ces enfants pour leur trouver un abri, réhabiliter les orphelinats qui accueillent les enfants afin de leur redonner leur dignité et des conditions de vie décentes, leur donner accès aux soins, à la scolarisation, et participer à l’aide d’urgence alimentaire au sein des orphelinats.</div>
        
           
                    
            </div>
        )
    }
}

export default ArticleContainer