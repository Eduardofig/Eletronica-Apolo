import React from 'react'
import './Address.css';
import {Helmet} from 'react-helmet';

/*
    Página de endereço
*/

const Address:React.FunctionComponent = () => (

        <div>
            <h2>Endereço</h2>
            <div id="payment-container">
                <Helmet>
                    <title>Endereço</title>
                </Helmet>
                <form id="address-box">

                CEP <br/>
                <input placeholder="Digite seu CEP" type="text"/><br></br>
                Endereço <br/>
                <input placeholder="Digite sua endereço" type="text"/><br></br>
                Número <br/>
                <input placeholder="Digite seu número" type="text"/><br></br>
                Complemento<br/>
                <input placeholder="Digite um complemento" type="text"/><br></br>
                <button>Avançar</button>

                </form>

            </div>
        </div>

    );

export default Address;
