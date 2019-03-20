import React, { Component } from 'react';

class Gasto extends Component {
    render() {

        const {tipoGasto, monto} = this.props.gasto;

        return (
           <li className="gastos">
                <p>
                    {tipoGasto}
                   <span className="gasto">$ {monto}</span>
                </p>
           </li>
        );
    }
}

export default Gasto;