  
import React from 'react';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';  
import NavTabs from './Core/Menu';
import Home from './Core/Home';
import Contactform from './Components/Forms/contact';
import FooterPage from './Components/Footer/footer';
import SuccessPayement from './Components/Stripe/success';
import CancelPayement from './Components/Stripe/cancel';
import Checkout from './Components/Stripe/checkout';
import Signup from './Components/Forms/join';
import underConstruction from './Core/underConstruction'


const MainRouter = () => (

    <div id='body' >

        <NavTabs />
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/contact' component={Contactform}></Route>
            <Route exact path='/success' component={SuccessPayement}></Route>
            <Route exact path='/cancel' component={CancelPayement}></Route>
            <Route exact path='/checkout' component={Checkout}></Route>
            <Route exact path='/nous-rejoindre' component={Signup}></Route>
            <Route exact path='/dossier-de-presse' component={underConstruction}></Route>
            <Route exact path='/partners' component={underConstruction}></Route>
            <Route exact path='/autres' component={underConstruction}></Route>
        </Switch>
        <FooterPage/>
    </div>
)

export default MainRouter