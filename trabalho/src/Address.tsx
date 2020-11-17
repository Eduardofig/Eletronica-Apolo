import React from 'react'
import './Address.css';

export default function Address(){
    
    return(

        <div>
            <h3>Endereço</h3>
            <div id="payment-container">
                
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

}
