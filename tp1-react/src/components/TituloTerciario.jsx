import React, { useState } from 'react';


const TituloTerciario = () => {

const [cambiarEstado, setcambiarEstado] = useState('Hello my friend')

const modificar = () =>{
    setcambiarEstado(cambiarEstado + '(from changed state)!')
}

    return (
        <div>
            <h3>{cambiarEstado}</h3>
            <button onClick={modificar}>clik me</button>
        </div>
    );
};

export default TituloTerciario;