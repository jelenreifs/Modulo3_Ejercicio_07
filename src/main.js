import { useState } from "react";

const Main = (props) => {
    const [tripulantes, setTripulante] = useState(props.tripulantes);
    
    const addTripulante = () => { 
        setTripulante(tripulantes + 1)
    }
    
    return (
        <main>
            <h4>{props.nombre}</h4>
            <p>{props.eslora}</p>
            <p>{tripulantes}</p> 
            <button onClick={addTripulante}>Añadir tripulante</button>
        </main>
    )
}
 
export default Main;