import React from 'react';

import {BrowserRouter, Switch, Route} from "react-router-dom";

import Main from './pages/main'
import Contact from './pages/contact'
import Create from './pages/create'
import Historic from './pages/historic'
import ContactHistoric from './pages/contacthistoric'




const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/contacts/:id" component={Contact}/>
        <Route path="/create" component={Create}/>
        <Route path="/historic" component={Historic}/>
        <Route path="/contacthistoric/:id" component={ContactHistoric}/>



    </Switch>
    </BrowserRouter>
)

export default Routes;