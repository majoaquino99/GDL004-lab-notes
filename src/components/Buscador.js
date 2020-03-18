import React, { Component } from 'react';

class Buscador extends Component {
    render() { 
        return ( 
            <form>
                <div className ="buscador">
                    <div className ="componenteBuscador">
                        <input type ="text" placeholder="Busca tu imagen. Ejemplo: Gatitos"></input>
                    </div>
                </div>
            </form>
         );
    }
}
 
export default Buscador;