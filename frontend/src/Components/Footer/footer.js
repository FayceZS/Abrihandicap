import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import fbicon from '../../icons/fb-icon.svg'
import twitterIcon from '../../icons/twitter-icon.svg'
import mailIcon from '../../icons/mail-icon.svg'
import lnkIcon from '../../icons/linkedin-icon.svg'
import instaIcon from '../../icons/insta-icon.svg'
import youtubeIcon from '../../icons/youtube-icon.svg'
// import logoAbri from '../../logo.jpg'
// import menuIcon from '../../icons/menu-icon.svg';

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4" >
      {/* style = {{backgroundImage : `url(${logoAbri})`}} */}
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6" id="containerMenuIcon">
            <div className ="footerComponent" >
              {/* <h5 className="title" id="liens">Liens</h5> */}
              <ul>
                <li className="list-styled">
                  <a href='/dossier-de-presse'  id="presse">Dossier de presse</a>
                </li>
                {/* <li className="list-styled">
                  <a href="#!" id="newsletter">Newsletter</a>
                </li> */}
                <li className="list-styled">
                  <a href="/contact" id="contact">Contact</a>
                </li>
                <li className="list-styled">
                  <a href="/join" id="rejoindre">Nous rejoindre</a>
                </li>
              </ul>
              <ul >
                <li className="list-styled">
                  <a href='/partners'  id="newsletter">Partenaires</a>
                </li>
                <li className="list-styled">
                  <a href='/autres' id="rejoindre">Autres</a>
                </li>
              </ul>
          </div>
            {/* <h5 className="title">Abdrihandicap</h5>
            <p>
              Oeuvrer face cachée
            </p> */}
            {/* <img alt='logo' src='https://nsa40.casimages.com/img/2021/01/21/210121020247484156.jpg' className="logoFooter"/> */}
          </MDBCol>
          <MDBCol md="6" className='footerCategories'>
            

          <div>
            
            <ul id="footerIconContainer">
              <li className="list-unstyled">
                <a href="https://www.facebook.com/ABRIHANDICAP" target = '_blank' rel="noreferrer"><img src={fbicon} alt="facebook association" className = "footerIcons"></img></a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.twitter.com/abri_handicap" target = '_blank' rel="noreferrer"><img src={twitterIcon} alt="twitter association" className = "footerIcons"></img></a>
              </li>
              <li className="list-unstyled">
                <a href="/contact" target = '_blank' rel="noreferrer"><img src={mailIcon} alt="mail association" className = "footerIcons"></img></a>
              </li>
              
            </ul>
          </div>
          <div>
            
            <ul id="footerIconContainer">
              <li className="list-unstyled">
                <a href="https://www.instagram.com/abrihandicap/" target = '_blank' rel="noreferrer"><img src={instaIcon} alt="instagram association" className = "footerIcons"></img></a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/channel/UCRi0eXJuGqX_IzA7m_DcZZQ" target = '_blank' rel="noreferrer"><img src={youtubeIcon} alt="youtube association" className = "footerIcons"></img></a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.linkedin.com/company/abri-association-des-b%C3%A9n%C3%A9voles-pour-le-refuge-des-enfants-invalides" target = '_blank' rel="noreferrer"><img src={lnkIcon} alt="linkedin association" className = "footerIcons"></img></a>
              </li>
              
            </ul>
          </div>
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3" id="copyright">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.abrihandicap.org" > Abrihandicap </a>
        </MDBContainer>
      </div>
      
    </MDBFooter>
  );
}

export default FooterPage;