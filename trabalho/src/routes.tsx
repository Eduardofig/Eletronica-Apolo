import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Address from './Address';
import Payment from './Payment';
import Main from './Main';
import Register from './Register';
import PaginaDeCompra from './PaginaDeCompra';
import PagCarrinho from './PagCarrinho';
import Admin from './Admin';
import Mission from './Mission';
import Contact from './Contact';
/*  
    Contém as rotas utilizadas no front
*/

const Routes:React.FunctionComponent = () =>(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/PagCarrinho" exact component={PagCarrinho}/>
                <Route path="/PaginaDeCompra" exact component={PaginaDeCompra}/>
                <Route path="/Address" exact component={Address}/>
                <Route path="/Payment" exact component={Payment}/>
                <Route path="/Register" exact component={Register}/>
                <Route path="/Admin" exact component={Admin}/>
                <Route path="/Contact" exact component={Contact}/>
                <Route path="/Mission" exact component={Mission}/>
            </Switch>
        </BrowserRouter>
    );

export default Routes;
