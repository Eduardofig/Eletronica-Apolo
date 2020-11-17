import React from 'react'
import './Payment1.css'

export default function Payment(){
    
    return(

        <div>
            <h3>Pagamento</h3>
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

                <button id='btn-register'>Avançar</button>
                </form>
            </div>
        </div>
    );

}

