import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Register from './Register';
import Address from './Address';
import Payment from './Payment';
import Produto from './Produto'


export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Produto}/>
                <Route path="/Address" exact component={Address}/>
                <Route path="/Payment" exact component={Payment}/>
            </Switch>
        </BrowserRouter>
    );


}