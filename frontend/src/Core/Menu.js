import React from 'react'
import {withRouter} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import logoAbri from '../logo.jpg';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';





const Menu = ({history}) => (
  <>
<Nav id="navDropdown" fill variant="tabs" defaultActiveKey="/home" style = { {backgroundImage : `url(${logoAbri}) no repeat`,position : 'fixed',width : '100%',zIndex : "999",top : '0px'}}>

    <Nav.Item>
          <Nav.Link className='nav1' href="/"><img src={logoAbri} id="menuLogo" alt='logo abri'></img></Nav.Link>
        </Nav.Item>
  <DropdownButton id="dropdown-basic-button" title="Menu">


    
    
      <Dropdown.Item>
      <Nav.Item>
        <Nav.Link className='nav2' href='#donateComponent' eventKey="link-1" >Faire un don</Nav.Link>
      </Nav.Item>
      </Dropdown.Item>
      <Dropdown.Item>
      <Nav.Item>
        <Nav.Link className='nav3' href="/#HomeCards">Notre Combat</Nav.Link>
      </Nav.Item>
      </Dropdown.Item>
      <Dropdown.Item>
        <Nav.Item>
        <Nav.Link className='nav4' href="/#articleContainerHome" eventKey="link-3">Nos actions</Nav.Link>
      </Nav.Item>
      </Dropdown.Item>
      <Dropdown.Item>
      <Nav.Item>
        <Nav.Link href="#carouselTeam" className='nav5' eventKey="link-4">Notre équipe</Nav.Link>
      </Nav.Item>
      </Dropdown.Item>

    </DropdownButton>  
  </Nav>


<Nav id="navLarge" fill variant="tabs" defaultActiveKey="/home" style = { {backgroundImage : `url(${logoAbri}) no repeat`,position : 'fixed',width : '100%',zIndex : "999",top : '0px'}}>

<Nav.Item>
      <Nav.Link className='nav1' href="/"><img src={logoAbri} id="menuLogo" alt='logo abri'></img></Nav.Link>
    </Nav.Item>





  
  <Nav.Item>
    <Nav.Link className='nav2' href='#donateComponent' eventKey="link-1" >Faire un don</Nav.Link>
  </Nav.Item>

  <Nav.Item>
    <Nav.Link className='nav3' href="/#HomeCards">Notre Combat</Nav.Link>
  </Nav.Item>
  
    <Nav.Item>
    <Nav.Link className='nav4' href="/#articleContainerHome" eventKey="link-3">Nos actions</Nav.Link>
  </Nav.Item>

  <Nav.Item>
    <Nav.Link href="#carouselTeam" className='nav5' eventKey="link-4">Notre équipe</Nav.Link>
  </Nav.Item>
  
</Nav>
    </>
  
)





export default withRouter(Menu)