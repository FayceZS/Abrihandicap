  
import React from 'react';
import {HashRouter as Router,Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';  
import NavTabs from './Core/Menu';
import Home from './Core/Home';
import Contactform from './Components/Forms/contact';
import FooterPage from './Components/Footer/footer';
import SuccessPayement from './Components/Stripe/success';
import CancelPayement from './Components/Stripe/cancel';
import Checkout from './Components/Stripe/checkout';
import Signup from './Components/Forms/join';


const MainRouter = () => (

    <div id='body' >

        <NavTabs />
        <Switch>
            
            {/* <Route exact path='/' component={Home}></Route>
            <PrivateRoute exact path='/post/:postId' component={SinglePost}></PrivateRoute>
            <PrivateRoute exact path='/post/edit/:postId' component={EditPost}></PrivateRoute>
            <PrivateRoute exact path='/users' component={Users}></PrivateRoute>
            <Route exact path='/signup' component={Signup}></Route>
            <Route exact path='/signin' component={Signin}></Route>
            <PrivateRoute exact path='/user/edit/:userId' component={EditProfile}></PrivateRoute>
            <PrivateRoute exact path='/user/:userId' component={Profile}></PrivateRoute>
            <PrivateRoute exact path='/post/createpost' component={NewPost}></PrivateRoute> */}
            <Route  path='/' component={Home}></Route>
            <Route  path='/contact' component={Contactform}></Route>
            <Route  path='/success' component={SuccessPayement}></Route>
            <Route  path='/cancel' component={CancelPayement}></Route>
            <Route  path='/checkout' component={Checkout}></Route>
            <Route  path='/nous-rejoindre' component={Signup}></Route>
        </Switch>
        <FooterPage/>
    </div>
)

export default MainRouter