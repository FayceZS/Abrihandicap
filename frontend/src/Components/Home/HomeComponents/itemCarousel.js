import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import HomeCards from './homeCards';
import child from '../../../Images/africanChild.jpg'
import child2 from '../../../Images/africanChild2.jpg'
import handChild from '../../../Images/handChild.jpg'





export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 150;

  
  return (


    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        gutter={20}
        leftChevron={<button className="secondCarouselButton"  style={{ height: 100,width : '100px', color : 'white',fontWeight : "bolder",backgroundColor : 'black',fontSize: '35px',marginLeft : '10px' }}>{'<'}</button>}
        rightChevron={<button className="secondCarouselButton" style={{ height: 100,width : '100px', color : 'white',fontWeight : "bolder",backgroundColor : 'black',fontSize: '35px',marginRight : '10px' }}>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div style={{ height: "100%", background: '#fffff' }}>
            <HomeCards 
                    title = "Carte 1" 
                    text="Environ 10 % de la population mondiale, dont 80 % dans les pays en développement, souffrent d’infirmité physique, mentale ou sensorielle. Ces personnes sont souvent marginalisées." 
                    link="link1"
                    img = {child}
                    alt = "enfant abandonné" />
        </div>
        <div style={{ height: "100%", background: '#fffff' }}>
        <HomeCards 
                    title = "Carte 1" 
                    text="Peux-t-on détourner notre regard de ces enfants qui en plus d’être handicapés, sont à la rue livrés à eux-mêmes, car abandonnés par leur famille."
                    link="link1"
                    img = {child2}
                    alt = "bébé" />
        </div>
        {/* <div style={{ height: "100%", background: '#fffff' }}>
        <HomeCards 
                    title = "Carte 1" 
                    text="Chez Abri nous avons décidé de leurs venir en aide, il était trop dur pour nous d'accepter de tels choses sans rien faire, aider ces enfants est devenu notre combat."
                    link="link1"
                    img = {handChild}
                    alt = "coeur" />
            
        </div> */}
      </ItemsCarousel>
    </div>
  );
};
