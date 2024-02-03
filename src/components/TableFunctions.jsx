import React, { Component } from 'react';
import $ from 'jquery';
import { Button } from "@nextui-org/react";


class TableFunctions extends Component {
  
  selectAll = () => {
    $('.item-checkbox').prop('checked', true);
    this.props.calcularSumaMontos();

  }

  deselectAll = () => {
    // Implementa la lógica para deseleccionar todos los elementos de la tabla
    $('.item-checkbox').prop('checked', false);
    this.props.calcularSumaMontos();
  }

  render() {
    return (
      <div>
        <Button onClick={this.selectAll}>Seleccionar Todos</Button>
        <Button onClick={this.deselectAll}>Deseleccionar Todos</Button>
      </div>
    );
  }
}

export default TableFunctions;
