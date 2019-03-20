import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header'; 
import Form from './components/Form';
import ListaGastos from './components/ListaGastos';
import ControlBudget from './components/ControlBudget';
import {validarPresupuesto} from './helper';


class App extends Component {

  state= {
    presupuesto: '',
    restante: '',
    gastos: {} 
  }

  componentDidMount(){
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () => {
    let presupuesto = prompt('Cual es tu presupuesto?');
    let result = validarPresupuesto(presupuesto);


    if(result){
      this.setState({
        presupuesto:presupuesto,
        restante: presupuesto
      })
    }else{
      // si no ingresa un presupuesto el prompt no se va a quitar
      this.obtenerPresupuesto();
    }
  }

  //Agregar nuevo gasto al state
  agregarGasto = gasto => {
    //tomar copia del state actual
    const gastos = {...this.state.gastos}

    //agregar el gasto al objeto
    gastos[`gasto${Date.now()}`] = gasto;

    //restar al presupuesto
    this.restarPresupuesto(gasto.monto)

    //pasarlo al state
    this.setState({
      gastos
    })
  }

  //restar al presupuesto cuando se ingrese un monto
  restarPresupuesto = monto => {
    //primero hay que leer el gasto, lo guardamos en restar
    let restar = Number(monto);
    //hacer una copia del state actual
    let restante = this.state.restante;
    //restar
    restante -= restar;
    //regresar nuevo state
    this.setState({restante})
  }




  render() {
    return (
      <div className="App container">
          <Header title='Gasto semanal'/>


              <div className="contenido-principal contenido">
                <div className="row">
                    <div className="one-half column">
                      <Form agregarGasto={this.agregarGasto}/>
                    </div>

                    <div className="one-half column">
                    <ListaGastos gastos={this.state.gastos}/>

                    <ControlBudget presupuesto={this.state.presupuesto} restante={this.state.restante}/>

                    </div>
                   
                </div>
              </div>
      </div>
    );
  }
}

export default App;


/* 

  Tenemos un componente principal que es App.js
  En el creamos un formulario, que nos sirve para crear los gastos
  y despues retornamos los datos al componente principal y de ahi se comunican hacia el listado con state
  de ahi los leemos con el listado y los pasamos a un hijo que es Gasto
   


*/