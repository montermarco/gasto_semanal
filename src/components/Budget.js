import React, { Component } from 'react';


//este props viene del props declarado en controlBudget que antes se llamaba remaining
class Budget extends Component {
    render() {
        return (
            <div className="alert alert-success">
                Presupuesto: $ {this.props.presupuesto}
            </div>
        );
    }
}

export default Budget;