import React, { Component } from 'react';
import {revisarPresupuesto} from '../helper';

class Remaining extends Component {
    render() {

        const presupuesto = this.props.presupuesto;
        const restante = this.props.restante;

        return (
            <div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: $ {this.props.restante}
            </div>
            </div>
        );
    }
}

export default Remaining;