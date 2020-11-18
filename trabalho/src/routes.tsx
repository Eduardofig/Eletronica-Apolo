import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Address from './Address';
import Payment from './Payment';
import Main from './Main';
import Register from './Register';
import PaginaDeCompra from './PaginaDeCompra';

const Routes:React.FunctionComponent = () =>(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/PaginaDeCompra" exact component={PaginaDeCompra}/>
                <Route path="/Address" exact component={Address}/>
                <Route path="/Payment" exact component={Payment}/>
                <Route path="/Register" exact component={Register}/>
            </Switch>
        </BrowserRouter>
    );

export default Routes;
