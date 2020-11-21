import React from 'react'
import './Payment1.css'
import {Helmet} from 'react-helmet';

/*
    Página de pagamento
*/

const Payment:React.FunctionComponent = () => (

        <div>
            <Helmet>
                <title>Pagamento</title>
            </Helmet>
            <h2>Pagamento</h2>
            <div id="payment-container">

                <form id="payment-box">

                Número do Cartão <br/>
                <input placeholder="Digite o número do cartão" type="text"/><br></br>
                CVV <br/>
                <input placeholder="CVV" type="text"/>
                Validade
                <input placeholder="Validade" type="text"/><br></br>
                Nome do Titular <br/>
                <input placeholder="Digite o nome do titular" type="text"/><br></br>
                <a href="/Address">
                    <button id='btn-register'>Avançar</button>
                </a>

                </form>
            </div>
        </div>
    );

export default Payment;
