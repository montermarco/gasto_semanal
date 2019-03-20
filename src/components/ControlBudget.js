import React, { Component } from 'react';
import Budget from './Budget';
import Remaining from './Remaining';

class ControlBudget extends Component {
    render() {
        return (
            <React.Fragment>
                <Budget presupuesto={this.props.presupuesto}/>
                <Remaining restante={this.props.restante} presupuesto={this.props.presupuesto}/>
            </React.Fragment>
        );
    }
}

export default ControlBudget;