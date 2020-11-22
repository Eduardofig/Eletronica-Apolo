import React from 'react'
import './Contact.css'
import {Helmet} from 'react-helmet';

/*
    Página de contato
*/

const Contact:React.FunctionComponent = () => (

        <div>
            <Helmet>
                <title>Contato</title>
            </Helmet>
            <h2>Contato</h2>
            
            <div id="texto">
                <p>
                    Nosso e-mail: eletronica...@eletro.com.br<br/>
                    Nosso telefone: (16)3333-3333
               </p>
            </div>
        </div>
    );

export default Contact;