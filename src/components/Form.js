import React, { Component } from 'react';

class Form extends Component {

    gastoRef = React.createRef();
    monto = React.createRef();

    crearGasto = (e) => {
        //prevent defaul
        e.preventDefault();

        //crear el objeto con los datos
        const gasto = {
            tipoGasto: this.gastoRef.current.value,
            monto: this.monto.current.value,
        }
        //console.log(gasto)

        // agregarlo y enviarlo por props, con esto se comunica con el componente padre
        this.props.agregarGasto(gasto);

        //resetear formulario
        e.currentTarget.reset();

    }




    render() {
        return (
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input ref={this.gastoRef} className="u-full-width" type="text" placeholder="Ej. Comida" />
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input ref={this.monto} className="u-full-width" type="text" placeholder="Ej. 300" />
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        );
    }
}

export default Form; 