    import 'datatables.net-dt/css/jquery.dataTables.min.css'    
    //import 'datatables.net-dt/css/dataTables.tailwindcss.min.css'
    //import axios from 'axios'; // Importa Axios


    import React, { Component } from 'react'
    import TableFunctions from './TableFunctions';
    import $ from 'jquery'
    import dt from 'datatables.net'
    import 'datatables.net';
    $.DataTable = dt;
    window.jQuery = $;
    window.$ = $;


    export class Tbl extends Component {
        constructor(props) {
            super(props);
            
            this.state = {
            sumatoriaMontos: 0, // Inicializa sumatoriaMontos
            };
        }
        componentDidUpdate() {
            console.log("El componente se ha actualizado.");

            console.log('componente')
            if (this.$el) {
                if ($.fn.DataTable.isDataTable(this.$el)) {
                    // La tabla DataTable ya existe, así que primero la destruimos
                    this.$el.DataTable().destroy();
                }
        
                // Inicializamos la tabla DataTable
                this.$el.DataTable({
                    data: this.props.data,
                    columns: [
                        { title: "Fecha" },
                        { title: "Referencia" },
                        { title: "Nombre del Comercio" },
                        { title: "D/C" },
                        { title: "Monto" },
                        { title: "Seleccionar" }
                    ],
                    scrollY: '50vh', // Ajusta esta altura según tus necesidades
                    scrollCollapse: true,
                    paging:false,
                });
                // Asocia un evento de cambio a las casillas de verificación
        this.$el.on('change', 'input.item-checkbox', () => {
            this.calcularSumaMontos();
        });
            }
        }
        
        
    componentDidMount() {
        console.log("El componente se ha montado.");

            this.$el = $(this.el); // Refiérete al elemento HTML de la tabla
            this.$el.DataTable({ // Inicializa la tabla DataTable correctamente
                data: this.props.data,
                
                columns: [
                    { title: "Fecha" },
                    { title: "Referencia" },
                    { title: "Nombre del Comercio" },
                    { title: "D/C" },
                    { title: "Monto" },
                    { title: "Seleccionar" }
                ],
                scrollY: '50vh', // Ajusta esta altura
                scrollCollapse: true,
                paging:false,
            });
            
        
        }

                
        componentWillUnmount() {
            // Destruye DataTables antes de desmontar el componente
            if ($.fn.DataTable.isDataTable(this.$el)) {
            this.$el.DataTable().destroy();
            }
            console.log("El componente se ha desmontado.");

        }

        calcularSumaMontos() {
            var total = 0;
            // var count = 0;
          
            if (this.$el) {
              this.$el.find('input.item-checkbox:checked').each(function() {
                var monto = parseFloat($(this).closest('tr').find('td:eq(4)').text().replace('$', '').replace(/,/g, ''));
          
                if (!isNaN(monto)) {
                  total += monto;
                //   count++;
                }
              });
            }
            /*   this.setState((prevState) => {
                return { sumatoriaMontos: total};
            }); 
             */
          
            $('#sum-total').text('Total de transacciones: $ ' + total.toFixed(2));
          }
          

    
        
        
        
        render() {
            return (
                <div>
                    <TableFunctions calcularSumaMontos={this.calcularSumaMontos}/>
                    <p id="sum-total"></p>
                    <table className="display" width="100%" ref={el => (this.el = el)}></table>
                </div>
            );
        }
    }
    export var junk;