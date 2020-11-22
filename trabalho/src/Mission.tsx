import React from 'react'
import './Mission.css'
import {Helmet} from 'react-helmet';

/*
    Página da missão
*/

const Mission:React.FunctionComponent = () => (

        <div>
            <Helmet>
                <title>Missão</title>
            </Helmet>
            <h2>Missão</h2>
            
            <div id="texto">
                
                <p>
                    Somos a Eletrônica (definir nome) e nossa missão é trazer o melhor dos produtos eletrônicos para nossos clientes.
                    Estamos na ativa desde ontem, quando o front foi terminado para a matéria de introdução a desenvolvimento web.
                </p>
                
                <p>
                    Temos uma grande variedade de Hardware para aqueles que se interessam, desde uma grande variedade de micros como Arduinos,
                    Raspberry Pi, além de vários shields para eles, para que nossos clientes possam desenvolver os mais diversos projetos profissionais
                    e pessoais. Além disso, temos um vasto estoque de resistores, capacitores, indutores, protoboards e até mesmo osciloscópios. 
                </p>

                <p>
                    Além de componentes básicos para circuitos RLC's,protoboards e microcontroladores, oferecemos uma grande variedade de componentes de suporte,
                    como pilhas, cabos, chaves e fontes, essenciais para projetos básicos.

                </p>
            </div>
        </div>
    );

export default Mission;